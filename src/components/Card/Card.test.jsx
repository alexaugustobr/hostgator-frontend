import React from "react";
import { cleanup, render } from "../../utils/helpers/testingHelper";
import Card from "./Card";

afterEach(cleanup);

const defaultProps = {
  featured: false,
  children: <span>Card Content</span>
};

const setup = (props = defaultProps) => {
  return {
    props,
    render: render(<Card {...props} />)
  };
};

describe("Card test suit", () => {
  it("renders without error", () => {
    const {
      render: { container }
    } = setup();

    expect(container).toBeInTheDocument();
  });

  it("should render card content", () => {
    const {
      render: { getByText }
    } = setup();

    expect(getByText("Card Content")).toBeInTheDocument();
  });

  it("should render featured style", () => {
    const {
      render: { getByTestId }
    } = setup({ ...defaultProps, featured: true });

    expect(getByTestId("card-container")).toHaveStyleRule(
      "border-top",
      "8px solid #FF6A17"
    );
    expect(getByTestId("card-container")).toHaveStyleRule(
      "border-bottom",
      "4px solid #FF6A17"
    );
  });
});
