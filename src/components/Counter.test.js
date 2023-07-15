import { render, fireEvent, screen } from "@testing-library/react";
import Counter from "./Counter";


           // get vs query
           // use get if it must be there no condition
           // use query if something must show conditionally;
           // getByTestId is used if your content is dynamically changing, like a count;
           //data-testId if there is no other way to get ur value;

describe("Counter", () => {
  it("counter displays correct initial count", () => {
    render(<Counter initialCount={0} />);
    expect(Number(screen.getByTestId("count").textContent)).toEqual(0);
  });

  it("count should increment by 1 if the increment button is clicked", () => {
    render(<Counter initialCount={0} />);
    const incrementBtn = screen.getByRole("button", { name: "Increment" });
    fireEvent.click(incrementBtn);
    expect(Number(screen.getByTestId("count").textContent)).toEqual(1);
  });

  it("count should decrement by 1 if the decrement button is clicked", () => {
    render(<Counter initialCount={0} />);
    const decrementBtn = screen.getByRole("button", { name: "Decrement" });
    fireEvent.click(decrementBtn);
    expect(Number(screen.getByTestId("count").textContent)).toEqual(-1);
  });

  it("count should be 0 if the restart button is clicked", () => {
    render(<Counter initialCount={50} />);
    const restartBtn = screen.getByRole("button", { name: "Restart" });
    fireEvent.click(restartBtn);
    expect(Number(screen.getByTestId("count").textContent)).toEqual(0);
  });

  it("count should invert signs if the switch signs button is clicked", () => {
    render(<Counter initialCount={50} />);
    const switchBtn = screen.getByRole("button", { name: "Switch Signs" });
    fireEvent.click(switchBtn);
    expect(Number(screen.getByTestId("count").textContent)).toEqual(-50);
  });

});
