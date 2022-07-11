import { render, screen } from "@testing-library/react";
import { getUserById, getUserNameById } from "../services/users.service";
import TestAsync from "./TestAsync";
const user = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};

test("component is render", () => {
  render(<TestAsync />);
  const element = screen.getByText(/TestAsync/i);
  expect(element).toBeInTheDocument();
});

test("check api", async () => {
  const { data } = await getUserById(1);

  expect(data).toMatchObject(user);
  expect(data).toHaveProperty("id");
});

test("Check api response with reject error or resolve", async () => {
    // resolve
    //await expect(getUserNameById(1)).resolves.toEqual("Leanne Graham")

    // reject
    await expect(getUserNameById(1)).rejects.toThrow("Ocurrio un error")
});
