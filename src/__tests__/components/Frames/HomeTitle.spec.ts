/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, it, expect, beforeEach } from "vitest";
import { mount, VueWrapper } from "@vue/test-utils";
import HomeTitle from "../../../components/Frames/HomeTitle.vue";

describe("HomeTitle unit tests", async () => {
  let sut: VueWrapper<any>;
  const titleMock = "Color Drop";

  beforeEach(async () => {
    sut = mount(HomeTitle);
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

    expect(wrapper).toContain("text-5xl");
  })
});
