import React from "react";
import { cleanup, render } from "../../utils/helpers/testingHelper";
import AppBar from "./AppBar";

afterEach(cleanup);

const setup = () => ({
  render: render(<AppBar />)
});

describe("AppBar test suit", () => {
  it("renders without error", () => {
    const {
      render: { container }
    } = setup();

    expect(container).toBeInTheDocument();
  });

  it("should render logo", () => {
    const {
      render: { getByText }
    } = setup();

    expect(getByText("logo.svg")).toBeInTheDocument();
  });
});
