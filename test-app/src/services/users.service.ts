import axios from "axios";

export const getUserById = async (id: number) => {
  return await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
};

export const getUserNameById = async (id: number) => {
  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    return res.data.name;
  } catch (e) {
    throw new Error("Ocurrio un error");
  }
};


export interface FakePromiseI {
    data:{
        id: number;
        name: string;
    },
    error?: any;
}
export const fakePromise = async ():Promise<FakePromiseI> => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = {
        id: new Date().getTime(),
        name: "jose",
      };
      setTimeout(() => {
          resolve({ data, error: null });
      },800)
    } catch (e) {
      reject({ data: null, error: e });
    }
  });
};
