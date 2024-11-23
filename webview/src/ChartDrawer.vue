<script lang="ts" setup>
import { computed, nextTick, ref, watch } from 'vue';
import { Bubble } from 'vue-chartjs';
import { Chart as ChartJS, Tooltip, LinearScale, PointElement } from 'chart.js'
import zoomPlugin from 'chartjs-plugin-zoom';

ChartJS.register(Tooltip, LinearScale, PointElement, zoomPlugin)

type Command = 
  ["origin", number, number] 
| ["rotate", number] 
| ["scale", number, number] 
| ["pixsize", number] 
| ["color", [number, number, number, number]] 
| ["draw", number, number];

const props = defineProps<{
  dataId: string;
  rawData: Command[];
}>()

const datasets = ref<{
  backgroundColor: string;
  data: {
    x: number;
    y: number;
    r: number;
    origin: [number, number];
    rotate: number;
    scale: [number, number];
    xOrigin: number;
    yOrigin: number;
  }[];
}[]>([]);

const maxXValue = computed(() => {
  return datasets.value.reduce((acc, dataset) => {
    return Math.max(acc, ...dataset.data.map((item) => item.x));
  }, 0) + 100;
})

const maxYValue = computed(() => {
  return datasets.value.reduce((acc, dataset) => {
    return Math.max(acc, ...dataset.data.map((item) => item.y));
  }, 0) + 100;
})

// current drawing state
const state = ref<{
  origin: [number, number];
  rotate: number;
  scale: [number, number];
  pixsize: number;
  color: string;
}>({
  origin: [0, 0],
  rotate: 0,
  scale: [1, 1],
  pixsize: 1,
  color: "rgba(0, 0, 0, 1)",
});

const zoomLevel = ref(1);
const responsiveLevel = ref(1);

const scale = computed(() => responsiveLevel.value * zoomLevel.value);

watch(() => props.dataId, () => {
  const datasetsDraft: typeof datasets.value = [
    {
      backgroundColor: "rgba(0, 0, 0, 1)",
      data: [],
    },
  ];
  const stateDraft: typeof state.value = {
    origin: [0, 0],
    rotate: 0,
    scale: [1, 1],
    pixsize: 1,
    color: "rgba(0, 0, 0, 1)",
  }
  let currentDataset = datasetsDraft[0];
  props.rawData.reduce<typeof state.value>((acc, item) => {
    switch (item[0]) {
      case "origin":
        acc.origin = [item[1], item[2]];
        break;
      case "rotate":
        acc.rotate = item[1];
        break;
      case "scale":
        acc.scale = [item[1], item[2]];
        break;
      case "pixsize":
        acc.pixsize = item[1];
        break;
      case "color":
        acc.color = `rgba(${item[1].join(',')})`;
        currentDataset = {
          backgroundColor: acc.color,
          data: [],
        };
        datasetsDraft.push(currentDataset);
        break;
      case "draw":
        currentDataset.data.push({
          x:
            item[1] * acc.scale[0] * Math.cos(acc.rotate) +
            item[2] * acc.scale[1] * Math.sin(acc.rotate) +
            acc.origin[0],
          y:
            item[1] * acc.scale[0] * Math.sin(acc.rotate) -
            item[2] * acc.scale[1] * Math.cos(acc.rotate) +
            acc.origin[1],
          r: acc.pixsize / 2,
          origin: acc.origin,
          rotate: acc.rotate,
          scale: acc.scale,
          xOrigin: item[1],
          yOrigin: item[2],
        });
      default:
        // not support
        break;
    }
    return acc;
  }, stateDraft);
  state.value = stateDraft;
  datasets.value = datasetsDraft.reverse();
})

watch(() => scale.value, (scale) => {
  datasets.value.forEach((dataset) => {
    dataset.data.forEach((item) => {
      item.r = state.value.pixsize / 2 * scale;
    })
  })
})

</script>

<template>
  <div>
    <!--在一行显示当前state-->
    <div class="status">
      <div>原点: {{ state.origin }}</div>
      <div>旋转: {{ state.rotate }}</div>
      <div>放缩: {{ state.scale }}</div>
      <div>宽度: {{ state.pixsize }}</div>
      <div>颜色: {{ state.color }}</div>
    </div>
  </div>
  <Bubble 
    id="bubble-chart"
    :key="dataId"
    :data="{ 
      datasets
    }" 
    :plugins="[zoomPlugin]"
    :options="{ 
      animation: {
        duration: 0
      },
      elements: {
        point: {
          borderWidth: 0
        }
      },
      scales: {
        x: {
          min: 0,
          max: maxXValue,
          position: 'top',
          alignToPixels: true,
        },
        y: {
          min: 0,
          max: maxYValue,
          reverse: true,
          position: 'left',
          alignToPixels: true,
        },
      },
      plugins: {
        zoom: {
          pan: {
            enabled: true,
          },
          zoom: {
            wheel: {
              enabled: true,
              modifierKey: 'ctrl',
            },
            mode: 'xy',
            onZoomComplete({ chart }) {
              zoomLevel = chart.getZoomLevel();
            },
          },
          limits: {
            x: {
              min: 0,
              max: 'original',
              minRange: maxXValue / 10,
            },
            y: {
              min: 0,
              max: 'original',
              minRange: maxYValue / 10,
            }
          }
        }
      },
      aspectRatio: maxXValue / maxYValue,
      onResize: (chart, size) => {
        responsiveLevel = size.width / maxXValue;
      }
    }"
  />
</template>

<style scoped>
.status {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #f0f0f0;
}
</style>