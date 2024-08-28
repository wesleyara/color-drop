<script setup lang="ts">
import { useEyeDropper } from "@vueuse/core";

const { isSupported, open, sRGBHex } = useEyeDropper();

const handleDrop = async () => {
  await open();
};
</script>

<template>
  <button :disabled="!isSupported" @click="handleDrop">
    <v-icon class="h-8 w-8" name="bi-eyedropper" />
  </button>

  <span>{{ sRGBHex }}</span>
</template>
