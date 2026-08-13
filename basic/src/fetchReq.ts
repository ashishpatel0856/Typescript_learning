import axios from "axios";
import type { AxiosResponse } from "axios";
interface todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean
}


const fetchData = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com");
        if(!response.ok){
            throw new Error (`http error `)
        }
        const data: todo = await response.json()
    } catch (error:any) {
    }
}
