/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, it, expect, beforeEach } from "vitest";
import { mount, VueWrapper } from "@vue/test-utils";
import HomeRoot from "../../../components/Frames/HomeRoot.vue";

describe("HomeRoot unit tests", async () => {
  let sut: VueWrapper<any>;

  beforeEach(async () => {
    sut = mount(HomeRoot);
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

    expect(wrapper).toContain("flex");
  });
});
