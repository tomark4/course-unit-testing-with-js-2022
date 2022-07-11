import axios from 'axios';

export const getUserById = async (id:number) => {
    return await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
}


export const getUserNameById = async (id:number) => {
    try{
        const res = await axios.get(`https://jonplaceholder.typicode.com/users/${id}`)
        return res.data.name;
    } catch(e){
        throw new Error("Ocurrio un error");
    }
}