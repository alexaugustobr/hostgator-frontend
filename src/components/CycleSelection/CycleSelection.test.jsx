import React from "react";
import { cleanup, render } from "../../utils/helpers/testingHelper";
import CycleSelection from "./CycleSelection";
import cycleTypes from "../../utils/constants/cycleTypes";

afterEach(cleanup);

const { MONTHLY, ANNUALLY, TRIENNIALLY } = cycleTypes;

const defaultProps = {
  checked: TRIENNIALLY,
  onChange: jest.fn(),
  options: [
    { key: TRIENNIALLY, label: "3 anos" },
    { key: ANNUALLY, label: "1 ano" },
    { key: MONTHLY, label: "1 mês" }
  ]
};

const setup = (props = defaultProps) => {
  return {
    props,
    render: render(<CycleSelection {...props} />)
  };
};

describe("CycleSelection test suit", () => {
  it("renders without error", () => {
    const {
      render: { container }
    } = setup();

    expect(container).toBeInTheDocument();
  });
});
