<script lang="ts" setup>
import { ref, watch } from 'vue';
import { Bubble } from 'vue-chartjs';
import { Chart as ChartJS, Tooltip, CategoryScale, LinearScale, PointElement } from 'chart.js'

ChartJS.register(Tooltip, CategoryScale, LinearScale, PointElement)

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
  }[];
}[]>([]);

watch(() => props.dataId, () => {
  const datasetsDraft: typeof datasets.value = [
    {
      backgroundColor: "rgba(0, 0, 0, 1)",
      data: [],
    },
  ];
  let currentDataset = datasetsDraft[0];
  props.rawData.reduce<{ 
    origin: [number, number]; 
    rotate: number; 
    scale: [number, number], 
    pixsize: number; 
    color: string; 
  }>((acc, item) => {
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
          // shi ba ra ku kou su ru
          r: acc.pixsize,
        });
      default:
        // not support
        break;
    }
    return acc;
  }, {
    origin: [0, 0],
    rotate: 0,
    scale: [1, 1],
    pixsize: 1,
    color: "rgba(0, 0, 0, 1)",
  });
  datasets.value = datasetsDraft;
})

</script>

<template>
  <Bubble 
    :key="dataId"
    :data="{ 
      datasets
    }" 
    :options="{ 
      
      scales: {
        x: {
          min: 0,
          stacked: true,
          position: 'top',
          alignToPixels: true,

        },
        y: {
          min: 0,
          stacked: true,
          reverse: true,
          position: 'left',
          alignToPixels: true,
        },
      },
      aspectRatio: 1
    }"
  />
</template>
