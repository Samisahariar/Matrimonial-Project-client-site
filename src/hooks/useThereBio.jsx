import { useContext } from "react";
import { AuthContext } from "../components/AuthInformation";
import { useQuery } from "@tanstack/react-query";
import useAxiousSecure from "./useAxiousSecure";

const useThereBio = () => {

    const axiousSecure = useAxiousSecure();
    const { user } = useContext(AuthContext);

    const { data: isBioData, isPending, refetch : responBio } = useQuery({
        queryKey: [user?.email, 'isBioData'],
        queryFn: async () => {
            const res = await axiousSecure.get(`/biodatas/${user?.email}`);
            return res.data?.avail
        }
    })

    return [isBioData, isPending , responBio]

};

export default useThereBio;