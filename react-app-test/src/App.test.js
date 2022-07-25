import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import React from "react";
/**
 * enfocarse en lo que el usuario ve no en la funcionalidad ni el UI/UX
 */
beforeEach(() => {
  render(<App />);
});

test("render title bmi calculator", () => {
  const title = screen.getByText(/bmi calculator/i);
  expect(title).toBeInTheDocument();
});

test("calculate cuando el usuario esta por debajo del peso", () => {
  // si no encuentra el elemento la prueba
  
  const weightEl = screen.getByLabelText("Weight (KG)");
  const heightEl = screen.getByLabelText("Height (M)");

  const sendBtnEl = screen.getByRole("button", { name: /send/i });

  fireEvent.change(weightEl, { target: { value: "50" } });
  fireEvent.change(heightEl, { target: { value: "1.7" } });
  fireEvent.click(sendBtnEl);

  expect(screen.queryByText("Bmi: 17,301")).toBeInTheDocument();
  expect(
    screen.queryByText(/Bmi estimation: Peso inferior al normal/i)
  ).toBeInTheDocument();
});

test("calculate cuando el usuario tiene el peso normal", () => {
  const weightEl = screen.getByLabelText("Weight (KG)");
  const heightEl = screen.getByLabelText("Height (M)");

  const sendBtnEl = screen.getByRole("button", { name: /send/i });

  fireEvent.change(weightEl, { target: { value: "80" } });
  fireEvent.change(heightEl, { target: { value: "1.80" } });
  fireEvent.click(sendBtnEl);

  expect(screen.queryByText("Bmi: 24,691")).toBeInTheDocument();
  expect(
    screen.queryByText(/Bmi estimation: Peso normal/i)
  ).toBeInTheDocument();
});

test("calculate cuando el usuario tiene el peso normal", () => {
  const weightEl = screen.getByLabelText("Weight (KG)");
  const heightEl = screen.getByLabelText("Height (M)");

  const sendBtnEl = screen.getByRole("button", { name: /send/i });

  fireEvent.change(weightEl, { target: { value: "80" } });
  fireEvent.change(heightEl, { target: { value: "1.80" } });
  fireEvent.click(sendBtnEl);

  expect(screen.queryByText("Bmi: 24,691")).toBeInTheDocument();
  expect(
    screen.queryByText(/Bmi estimation: Peso normal/i)
  ).toBeInTheDocument();
});

test("calculate cuando el usuario tiene sobrepeso", () => {
  const weightEl = screen.getByLabelText("Weight (KG)");
  const heightEl = screen.getByLabelText("Height (M)");

  const sendBtnEl = screen.getByRole("button", { name: /send/i });

  fireEvent.change(weightEl, { target: { value: "90" } });
  fireEvent.change(heightEl, { target: { value: "1.80" } });
  fireEvent.click(sendBtnEl);

  expect(screen.queryByText("Bmi: 27,778")).toBeInTheDocument();
  expect(screen.queryByText(/Bmi estimation: Sobrepeso/i)).toBeInTheDocument();
});

test("calculate cuando el usuario tiene obesidad", () => {
  const weightEl = screen.getByLabelText("Weight (KG)");
  const heightEl = screen.getByLabelText("Height (M)");

  const sendBtnEl = screen.getByRole("button", { name: /send/i });

  fireEvent.change(weightEl, { target: { value: "100" } });
  fireEvent.change(heightEl, { target: { value: "1.80" } });
  fireEvent.click(sendBtnEl);

  expect(screen.queryByText("Bmi: 30,864")).toBeInTheDocument();
  expect(screen.queryByText(/Bmi estimation: Obesidad/i)).toBeInTheDocument();
});
