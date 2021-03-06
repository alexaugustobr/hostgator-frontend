import React from "react";
import { cleanup, render } from "../../utils/helpers/testingHelper";
import Heading from "./Heading";

afterEach(cleanup);

const defaultProps = {
  children: "Textual content"
};

const setup = (props = defaultProps) => {
  return {
    props,
    render: render(<Heading {...props} />)
  };
};

describe("Heading test suit", () => {
  it("renders without error", () => {
    const {
      render: { container }
    } = setup();

    expect(container).toBeInTheDocument();
  });

  it("should render children", () => {
    const {
      render: { getByText }
    } = setup();

    expect(getByText("Textual content")).toBeInTheDocument();
  });

  it("should render with default size", () => {
    const {
      render: { getByText }
    } = setup();

    expect(getByText("Textual content")).toHaveStyleRule("font-size", "26px");
  });

  it("should render with given size", () => {
    const {
      render: { getByText }
    } = setup({ ...defaultProps, size: "lg" });

    expect(getByText("Textual content")).toHaveStyleRule("font-size", "28px");
  });

  it("should render with default font weight", () => {
    const {
      render: { getByText }
    } = setup();

    expect(getByText("Textual content")).toHaveStyleRule("font-weight", "500");
  });

  it("should render with given font weight", () => {
    const {
      render: { getByText }
    } = setup({ ...defaultProps, fontWeight: "bold" });

    expect(getByText("Textual content")).toHaveStyleRule("font-weight", "800");
  });

  it("should render with default color", () => {
    const {
      render: { getByText }
    } = setup();

    expect(getByText("Textual content")).toHaveStyleRule("color", "#333333");
  });

  it("should render with given color", () => {
    const {
      render: { getByText }
    } = setup({ ...defaultProps, color: "blue" });

    expect(getByText("Textual content")).toHaveStyleRule("color", "#4480C5");
  });

  it("should render with default colorVariation", () => {
    const {
      render: { getByText }
    } = setup();

    expect(getByText("Textual content")).toHaveStyleRule("color", "#333333");
  });

  it("should render with no margin", () => {
    const {
      render: { getByText }
    } = setup();

    expect(getByText("Textual content")).not.toHaveStyleRule("margin-bottom");
  });

  it("should render with margin", () => {
    const {
      render: { getByText }
    } = setup({ ...defaultProps, margin: "sm" });

    expect(getByText("Textual content")).toHaveStyleRule(
      "margin-bottom",
      "12px"
    );
  });

  it("should render with no line height", () => {
    const {
      render: { getByText }
    } = setup();

    expect(getByText("Textual content")).not.toHaveStyleRule("line-height");
  });

  it("should render with given line height", () => {
    const {
      render: { getByText }
    } = setup({ ...defaultProps, lineHeight: "sm" });

    expect(getByText("Textual content")).toHaveStyleRule("line-height", "16px");
  });
});
