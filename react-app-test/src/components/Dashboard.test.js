import {
  render,
  screen,
  act,
  waitFor,
  fireEvent,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Dashboard from "./Dashboard";
import { getProducts, storeTodo } from "../services/products";
import { ApiRequest } from "../services/ApiRequest";

jest.mock("../services/products");
jest.mock("../services/ApiRequest");

// este es usando cuando tienes providers, redux, etc
const ComponentWithProvider = ({ children }) => {
  return <div>{children}</div>;
};

beforeEach(() => {
  storeTodo.mockReset();
});

describe("Dashboard", () => {
  test("show show add button", async () => {
    getProducts.mockReturnValueOnce({
      data: [{ id: 1, name: "tech" }],
    });
    await act(async () =>
      render(<Dashboard />, { wrapper: ComponentWithProvider })
    );
    expect(screen.getByRole("button", { name: /add/i })).toBeInTheDocument();
  });

  test("Show loading state when api is fetch", async () => {
    render(<Dashboard />);
    expect(await screen.findByText(/loading/i)).toBeInTheDocument();
  });

  test("Not show loading state when api fetch is finish", async () => {
    getProducts.mockReturnValueOnce(Promise.resolve([{ id: 1, name: "tech" }]));
    await act(async () => render(<Dashboard />));
    await waitFor(() => {
      expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
    });
  });

  test("Test when has error", async () => {
    getProducts.mockImplementation(() => {
      throw new Error("There was an error");
    });
    render(<Dashboard />);
    expect(await screen.findByText(/there was an error/i)).toBeInTheDocument();
  });

  test("Component render with data", async () => {
    getProducts.mockReturnValueOnce({
      data: [
        { id: 1, name: "test" },
        { id: 2, name: "housing" },
      ],
    });
    render(<Dashboard />);
    expect(await screen.findByText(/housing/i)).toBeInTheDocument();
  });

  test("Test form", async () => {
    render(<Dashboard />);
    expect(await screen.findByText(/products/i)).toBeInTheDocument();
    const formData = {
      name: "delectus aut autem",
    };
    const name = screen.getByLabelText("name");
    const lastName = screen.getByLabelText("last name");
    const btn = screen.getByRole("button", { name: /enviar/i });
    fireEvent.change(name, { target: { value: formData.name } });
    fireEvent.change(lastName, { target: { value: "Quintero" } });
    fireEvent.click(btn);

    const todo = {
      title: formData.name,
      completed: false,
    };
    storeTodo.mockReturnValueOnce(todo);

    expect(storeTodo).toHaveBeenCalledWith(todo);

    expect(await screen.findByText("Store data!")).toBeInTheDocument();
  });

  test("Test form validation", async () => {
    render(<Dashboard />);
    expect(await screen.findByText(/products/i)).toBeInTheDocument();
    const btn = screen.getByRole("button", { name: /enviar/i });
    fireEvent.click(btn);
    expect(await screen.findByText("name required")).toBeInTheDocument();
  });
});
