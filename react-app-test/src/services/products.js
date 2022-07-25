import { ApiRequest } from "./ApiRequest";

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: [
          { id: 1, name: "tech" },
          { id: 2, name: "housing" },
        ],
      });
    }, 1500);
  });
};

export const getTodos = () => {
  return ApiRequest.get("/todos");
};

export const storeTodo = (payload) => {
  return ApiRequest.post("/todos", payload);
};
