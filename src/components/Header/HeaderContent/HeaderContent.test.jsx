import React from "react";
import { cleanup, render } from "../../../utils/helpers/testingHelper";
import HeaderContent from "./HeaderContent";

afterEach(cleanup);

const setup = () => ({
  render: render(<HeaderContent />)
});

describe("HeaderContent test suit", () => {
  it("renders without error", () => {
    const {
      render: { container }
    } = setup();

    expect(container).toBeInTheDocument();
  });
});
