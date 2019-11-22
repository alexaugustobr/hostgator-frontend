import React from "react";
import { cleanup, render } from "../../utils/helpers/testingHelper";
import Header from "./Header";

afterEach(cleanup);

const setup = () => ({
  render: render(<Header />)
});

describe("Header test suit", () => {
  it("renders without error", () => {
    const {
      render: { container }
    } = setup();

    expect(container).toBeInTheDocument();
  });

  it("should render header images when window size is greater than 1400 px", () => {
    const {
      render: { getByText }
    } = setup();

    expect(getByText("work-desk.svg")).toHaveStyleRule("display", "block", {
      media: "(min-width: 1400px)"
    });

    expect(getByText("coffee-table.svg")).toHaveStyleRule("display", "block", {
      media: "(min-width: 1400px)"
    });
  });

  it("should hide header images when window size is lesser than 1400 px", () => {
    const {
      render: { getByText }
    } = setup();

    expect(getByText("work-desk.svg")).toHaveStyleRule("display", "none");

    expect(getByText("coffee-table.svg")).toHaveStyleRule("display", "none");
  });
});
