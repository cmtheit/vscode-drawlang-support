<script setup lang="ts">
import ChartDrawer from './ChartDrawer.vue';
import { onMounted, ref, watch } from 'vue';

const vscode = acquireVsCodeApi();

const rawData = ref([]);
const dataId = ref(Date.now().toString());
onMounted(() => {
  window.addEventListener("message", (event) => {
    console.debug('vscode event', event);
    const message = event.data; // The json data that the extension sent
    switch (message.action) {
      case "refresh":
        rawData.value = message.data;
        dataId.value = Date.now().toString();
        break;
    }
  });
})

</script>

<template>
  <div class="root">
    <ChartDrawer :raw-data :data-id />
  </div>
</template>

<style scoped>
.root {
  background-color: white;
  min-height: 100vh;
  min-width: 100vw;
}
</style>
