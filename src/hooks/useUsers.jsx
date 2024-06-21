import { useQuery } from "@tanstack/react-query";
import useAxiousSecure from "./useAxiousSecure";
import { useContext } from "react";
import { AuthContext } from "../components/AuthInformation";

const useUsers = () => {

    const axiousSecure = useAxiousSecure();
    const { data: usersDb = [], isPending } = useQuery({
        queryKey: ["userdb"],
        queryFn: async () => {
            const res = await axiousSecure.get("/users");
            return res.data
        }
    })

    return [usersDb, isPending]
};

export default useUsers;