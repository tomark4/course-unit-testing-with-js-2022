import { getByLabelText, render, screen } from "@testing-library/react"
import axios from "axios";
import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import HelloWorld from "./HelloWorld"
import {getUserById} from '../services/users.service'

let container = null;

// jest.mock("axios");

beforeEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
    container = document.createElement("div")
    document.body.appendChild(container);
})

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove()
    container = null
})

// simple test render
// test("it component render",()=>{
//     render(<HelloWorld />)
//     expect(screen.getByText("Hello world")).toBeInTheDocument();
// })


test("api call test get by user id", async () => {
    const userId = 4
    const response = await getUserById(userId);
    const {data} = response;
    expect(data.id).toBe(userId)
})

test("renderiza user id correctamente",async() => {
    const fakeUser = {
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
                lng: "81.1496"
            }
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
            name: "Romaguera-Crona",
            catchPhrase: "Multi-layered client-server neural-net",
            bs: "harness real-time e-markets"
        }
    };

    // with fecth
    // jest.spyOn(global, "fetch").mockImplementation(() =>
    //     Promise.resolve({
    //         json: () => Promise.resolve(fakeUser)
    //     })
    // );

    const mockGet = jest.spyOn(axios, 'get');

    mockGet.mockResolvedValue({
        data:fakeUser
    })

    await act(async() => render(<HelloWorld />));
    const el = document.querySelector("strong");
    expect(el.textContent).toBe(String(fakeUser.id));

    // global.fetch.mockRestore();
})