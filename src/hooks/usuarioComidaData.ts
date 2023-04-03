import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios"
import { ComidaData } from "../interface/ComidaData";


const API_URL = 'http://localhost:8080'

const fetchData = async (): AxiosPromise <ComidaData[]> =>{
    const response = axios.get(API_URL +"/comida");
    return response; 
}

export function usarioComidaData(){
    const query = useQuery({
        queryFn: fetchData,
        queryKey:['comida-data'],
        retry:2
        
    })
    return{
        ...query,
        data:query.data?.data
    }
}