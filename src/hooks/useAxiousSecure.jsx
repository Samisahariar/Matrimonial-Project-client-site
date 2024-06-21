import axios from 'axios';
import { useEffect } from 'react';


const axioussecure = axios.create({
    baseURL : "http://localhost:5000",
    withCredentials: true
})

const useAxiousSecure = () => {
   useEffect(() =>{
    axioussecure.interceptors.response.use(res =>{
        return res
    }, error =>{
        if(error.response.status === 401 || error.response.status === 403){
            console.log("error in the interceptor!!!")
        }
    })
   }, [])

   return axioussecure
};

export default useAxiousSecure;