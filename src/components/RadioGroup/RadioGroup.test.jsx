import React from "react";
import {
  cleanup,
  render,
  act,
  fireEvent
} from "../../utils/helpers/testingHelper";
import RadioGroup from "./RadioGroup";
import cycleTypes from "../../utils/constants/cycleTypes";

afterEach(cleanup);

const { MONTHLY, ANNUALLY, TRIENNIALLY } = cycleTypes;

const defaultProps = {
  checked: "monthly",
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
    render: render(<RadioGroup {...props} />)
  };
};

describe("RadioGroup test suit", () => {
  it("renders without error", () => {
    const {
      render: { container }
    } = setup();

    expect(container).toBeInTheDocument();
  });

  it("should render with active detail", () => {
    const {
      render: { getByText }
    } = setup();

    const activeOption = getByText("1 mês");

    expect(activeOption.parentElement).toHaveStyleRule(
      "background-color",
      "#4480C5"
    );
    expect(activeOption.previousSibling.textContent).toEqual("radio-on.svg");
  });

  it("should render with inactive detail", () => {
    const {
      render: { getByText }
    } = setup();

    const inactiveOption = getByText("1 ano");

    expect(inactiveOption.parentElement).not.toHaveStyleRule(
      "background-color"
    );
    expect(inactiveOption.previousSibling.textContent).toEqual("radio-off.svg");
  });

  it("should call onChange when clicked", () => {
    const {
      render: { getByTestId },
      props: { onChange }
    } = setup();

    const option = getByTestId("option-annually");

    act(() => {
      fireEvent.click(option);
    });

    expect(onChange).toHaveBeenCalledWith("annually");
  });
});
