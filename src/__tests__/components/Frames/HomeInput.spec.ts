/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, it, expect, beforeEach } from "vitest";
import { mount, VueWrapper } from "@vue/test-utils";
import HomeInput from "../../../components/Frames/HomeInput.vue";
import { createPinia, setActivePinia } from "pinia";

describe("HomeInput unit tests", async () => {
  let sut: VueWrapper<any>;

  beforeEach(async () => {
    setActivePinia(createPinia());
    sut = mount(HomeInput);
  });

  it("should render the component", () => {
    const wrapper = sut.exists();

    expect(wrapper).toBeDefined();
  });

  it("should match the snapshot", () => {
    const wrapper = sut.html();

    expect(wrapper).toMatchSnapshot();
  });

  it("should have a class", () => {
    const wrapper = sut.classes();

    expect(wrapper).toContain("custom-file-upload");
  });

  it("should have a input", () => {
    const wrapper = sut.find("input");

    expect(wrapper.exists()).toBe(true);
  });
});
