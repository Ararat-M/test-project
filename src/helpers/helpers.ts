import { sortVariant } from "../types";

export const CREDIT_OFFERS_URL = "https://my-json-server.typicode.com/Ararat-M/simulatedb/products";

export const sortOptions: {value: sortVariant, name: string }[] = [{
    value: "less",
    name: "по убыванию"
},{
    value: "upward",
    name: "по возрастанию"
}]

// сохраняет и обновляет данные на клиенте в local storage
export function saveData(name: string, data: {}) {
    localStorage.removeItem(name);
    localStorage.setItem(name, JSON.stringify({data}));
}

export async function getData<T>(url: string, dispatch: React.Dispatch<React.SetStateAction<T>>)  {
    try {
        const response = await fetch(url);
        const jsonData = await response.json();
        dispatch(jsonData);
    } catch (error) {
        const e = error as Error;
        console.error(e.message);
    }
}