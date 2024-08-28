<script setup lang="ts">
import HomeRoot from "../components/Frames/HomeRoot.vue";
import HomeHead from "../components/Frames/HomeHead.vue";
import HomeInput from "../components/Frames/HomeInput.vue";
import { useFileStore } from "../store/file";
import HomeImageRender from "../components/Frames/HomeImageRender.vue";
import HomeDropper from "../components/Frames/HomeDropper.vue";

const fileStore = useFileStore();
</script>

<template>
  <HomeRoot>
    <HomeHead />
    <HomeInput v-if="!fileStore.file" />
    <span v-else class="flex flex-col items-center justify-center">
      <HomeImageRender />
      <HomeDropper />
    </span>
  </HomeRoot>
</template>
