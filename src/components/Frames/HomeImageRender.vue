<script setup lang="ts">
import { useFileStore } from "../../store/file";

const fileStore = useFileStore();
</script>

<template>
  <span class="relative max-h-[500px]">
    <button
      @click="fileStore.clearFile"
      class="absolute right-1 top-1 flex h-6 w-6 flex-col items-center justify-center rounded-md bg-white"
    >
      <v-icon name="md-close" />
    </button>

    <img  v-if="fileStore.file" :src="fileStore.file" alt="image uploaded" class="max-h-[500px]" />
  </span>
</template>
