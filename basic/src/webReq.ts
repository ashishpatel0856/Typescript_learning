import axios,{AxiosResponse} from "axios" 

interface todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean
}
// axios.get('https://example.com/data')
// .then(response => {
//     console.log(response.data);
// })


const fetchData = async () => {
    try {
        const response: AxiosResponse<todo> = await get("https://jsonplaceholder.typicode.com")
        console.log("todo",response.data)
    } catch (error:any) {
        if(axios.isAxiosError(error)){
            console.log("axios error",error.code)

            if(error.response){
                console.log(error.response.data);
            }
        }

    }
}
