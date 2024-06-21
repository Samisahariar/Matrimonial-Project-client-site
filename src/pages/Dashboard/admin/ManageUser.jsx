import { useQuery } from "@tanstack/react-query";
import useAxiousSecure from "../../../hooks/useAxiousSecure";

const ManageUser = () => {

    const axiousSecure = useAxiousSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiousSecure.get('/users');
            return res.data;
        }
    })

    
    return (
        <div>
            this is the manage user section and all of the team are looking for{users?.length}
        </div>
    );
};

export default ManageUser;
