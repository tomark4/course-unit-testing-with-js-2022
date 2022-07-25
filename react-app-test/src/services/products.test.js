import { getTodos, storeTodo } from "./products";
import { ApiRequest } from "./ApiRequest";

jest.mock("./ApiRequest");

beforeEach(() => {
  ApiRequest.mockClear();
});

// test for product services
describe("Product service", () => {
  test("Should return data for todos", () => {
    getTodos();

    expect(ApiRequest.get).toHaveBeenCalledWith("/todos");
  });

  test("Should store a todo", () => {
    const todo = {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
    };

    storeTodo(todo);

    expect(ApiRequest.post).toHaveBeenCalledWith("/todos", todo);
  });
});
