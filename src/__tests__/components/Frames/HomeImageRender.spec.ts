/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, it, expect, beforeEach } from "vitest";
import { mount, VueWrapper } from "@vue/test-utils";
import HomeImageRender from "../../../components/Frames/HomeImageRender.vue";
import { createPinia, setActivePinia } from "pinia";

describe("HomeImageRender unit tests", async () => {
  let sut: VueWrapper<any>;

  beforeEach(async () => {
    setActivePinia(createPinia());
    sut = mount(HomeImageRender);
  });

  it("should render the component", () => {
    const wrapper = sut.exists();

    expect(wrapper).toBeDefined();
  });

  it("should match the snapshot", () => {
    const wrapper = sut.html();

    expect(wrapper).toMatchSnapshot();
  });

  it("should have a icon", () => {
    const wrapper = sut.find("v-icon");

    expect(wrapper.exists()).toBe(true);
  });

  it("should have a class", () => {
    const wrapper = sut.classes();

    expect(wrapper).toContain("relative");
  });
});
