<script setup lang="ts">
import { useEyeDropper } from "@vueuse/core";
import { computed } from "vue";
import { rgbaToHex } from "../../utils";

const { isSupported, open, sRGBHex } = useEyeDropper();

const handleDrop = async () => {
  await open();
};

const hex = computed(() => {
  return rgbaToHex(sRGBHex.value);
})
</script>

<template>
  <button :disabled="!isSupported" @click="handleDrop" class="mt-6">
    <v-icon class="h-8 w-8" name="bi-eyedropper" />
  </button>

  <span class="mt-6">{{ hex }}</span>
</template>
