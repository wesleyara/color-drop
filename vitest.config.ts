/* eslint-disable @typescript-eslint/no-explicit-any */
import Vue from "@vitejs/plugin-vue";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [Vue()] as any,
  test: {
    globals: true,
    environment: "jsdom",
  },
});
