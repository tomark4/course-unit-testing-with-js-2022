import { render, screen } from "@testing-library/react";
import {
  fakePromise,
  FakePromiseI,
  getUserById,
} from "../services/users.service";
import axios from "axios";
import { text } from "node:stream/consumers";
import MockComponent from "./MockComponent";

jest.mock("../services/users.service");

describe('mock component', () => {
  test("component has render", () => {
    render(<MockComponent />)
    expect(screen.getByText("MockComponent")).toBeInTheDocument();
  })

  test('test fake promise', async () =>{
      (fakePromise as jest.Mock).mockReturnValueOnce({
          data: {id: 1, name: 'test'}
      })
      const response:FakePromiseI = await fakePromise();
      const {data} = response;
  
      expect(data.id).toBe(1);
      expect(data.name).toBe("test");
  })

  /* with axios
  jest.mock("axios");
  test("test get user", async () => {
    (axios.get as any).mockReturnValue({ data: { id: 1, name: "jose" } });
  
    const resp = await getUserById(1);
    expect(resp.id).toBe(1);
  });
  */
})


