/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, it, expect, beforeEach } from "vitest";
import { mount, VueWrapper } from "@vue/test-utils";
import HomeView from "../../views/HomeView.vue";

describe("HomeView unit tests", async () => {
  let sut: VueWrapper<any>;

  beforeEach(async () => {
    sut = mount(HomeView);
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

  it("should have a main element", () => {
    const wrapper = sut.find("main");

    expect(wrapper.exists()).toBeTruthy();
  });
});
