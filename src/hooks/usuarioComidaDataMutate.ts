import { useMutation,useQueryClient } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios"
import { ComidaData } from "../interface/ComidaData";


const API_URL = 'http://localhost:8080'

const postData = async (data:ComidaData): AxiosPromise <any>=>{
    const response = axios.post(API_URL +"/comida",data);
    return response; 
}

export function usarioComidaDataMutate(){
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: postData,
        retry:2,
        onSuccess:() =>{
            queryClient.invalidateQueries(['comida-data'])

        }
        
    })
    return mutate;
}