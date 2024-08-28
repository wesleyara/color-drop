/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, it, expect, beforeEach } from "vitest";
import { mount, VueWrapper } from "@vue/test-utils";
import HomeHead from "../../../components/Frames/HomeHead.vue";

describe("HomeHead unit tests", async () => {
  let sut: VueWrapper<any>;
  const titleMock = "Color Drop";

  beforeEach(async () => {
    sut = mount(HomeHead);
  });

  it("should render the component", () => {
    const wrapper = sut.exists();

    expect(wrapper).toBeDefined();
  });

  it("should match the snapshot", () => {
    const wrapper = sut.html();

    expect(wrapper).toMatchSnapshot();
  });

  it("should render the component with the correct title", () => {
    const wrapper = sut.text();

    expect(wrapper).toContain(titleMock);
  });

  it("should have a class", () => {
    const wrapper = sut.classes();

    expect(wrapper).toContain("flex");
  });
});
