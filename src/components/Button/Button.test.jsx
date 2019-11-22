import React from "react";
import {
  cleanup,
  render,
  act,
  fireEvent
} from "../../utils/helpers/testingHelper";
import Button from "./Button";
import { themeConstants } from "../../theme";

afterEach(cleanup);

const defaultProps = {
  children: "Button Label"
};

const setup = (props = defaultProps) => {
  return {
    props,
    render: render(<Button {...props} />)
  };
};

describe("Button test suit", () => {
  it("renders without error", () => {
    const {
      render: { container }
    } = setup();

    expect(container).toBeInTheDocument();
  });

  it("should render children", () => {
    const {
      render: { debug, getByText }
    } = setup();

    debug();

    expect(getByText("Button Label")).toBeInTheDocument();
  });

  it("should render with default color", () => {
    const {
      render: { debug, getByText }
    } = setup();

    debug();

    expect(getByText("Button Label")).toHaveStyleRule(
      "background-color",
      "#4480C5"
    );
  });

  it("should render with given color", () => {
    const {
      render: { getByText }
    } = setup({ ...defaultProps, color: themeConstants.colors.ORANGE });

    expect(getByText("Button Label")).toHaveStyleRule(
      "background-color",
      "#FF6A17"
    );
  });

  it("should render change background-color when hover", () => {
    const {
      render: { getByText }
    } = setup();

    act(() => {
      fireEvent.mouseOver(getByText("Button Label"));
    });

    expect(getByText("Button Label")).toHaveStyleRule(
      "background-color",
      "#1d5297",
      { modifier: ":hover" }
    );
  });
});
