import { render } from "@testing-library/react";
import Register from "./src/components/Register";

test("renders all input", () => {
  const { getByByTestId } = render(<Register />);

  expect(getByByTestId("userName")).toBeInTheDocument();
  expect(getByByTestId("email")).toBeInTheDocument();
  expect(getByByTestId("tel")).toBeInTheDocument();
  expect(getByByTestId("password")).toBeInTheDocument();
  expect(getByByTestId("confirmPassword")).toBeInTheDocument();
});
