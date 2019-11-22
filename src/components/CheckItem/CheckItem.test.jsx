import React from "react";
import { cleanup, render } from "../../utils/helpers/testingHelper";
import CheckItem from "./CheckItem";

afterEach(cleanup);

const defaultProps = {
  label: "Item label"
};

const setup = (props = defaultProps) => {
  return {
    props,
    render: render(<CheckItem {...props} />)
  };
};

describe("CheckItem test suit", () => {
  it("renders without error", () => {
    const {
      render: { container }
    } = setup();

    expect(container).toBeInTheDocument();
  });

  it("should render the correct label", () => {
    const {
      render: { getByText }
    } = setup();

    expect(getByText("Item label")).toBeInTheDocument();
  });
});
