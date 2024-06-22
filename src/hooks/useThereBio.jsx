import { useContext } from "react";
import { AuthContext } from "../components/AuthInformation";
import { useQuery } from "@tanstack/react-query";
import useAxiousSecure from "./useAxiousSecure";

const useThereBio = () => {

    const axiousSecure = useAxiousSecure();
    const { user } = useContext(AuthContext);

    const { data: isBioData, isPending, refetch } = useQuery({
        queryKey: [user?.email, 'isBioData'],
        queryFn: async () => {
            console.log('asking or checking is admin', user)
            const res = await axiousSecure.get(`/biodatas/${user?.email}`);
            // console.log(res.data);
            console.log(res.data)
            return res.data?.avail
        }
    })
    
    return [isBioData, isPending]

};

export default useThereBio;