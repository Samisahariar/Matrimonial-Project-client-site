import { useQuery } from "@tanstack/react-query";
import useAxiousSecure from "../../../hooks/useAxiousSecure";
import TableRowAllUsers from "../../../components/TableRowAllUsers";
import Swal from "sweetalert2";

const ManageUser = () => {

    const axiousSecure = useAxiousSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiousSecure.get('/users');
            return res.data;
        }
    });


    const handleMakeAdmin = ({ _id, name }) => {
        axiousSecure.patch(`/users/admin/${_id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            });
    };


    const handleMakePremium = ({ _id, name }) => {
        console.log(name)
        axiousSecure.patch(`/users/premium/${_id}`)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${name} is an Premium Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            });
    }


    return (
        <div className="py-10">
            <h3 className="text-center text-5xl">All the Users : </h3>
            <table className="table w-[70vw]">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Make Admin</th>
                        <th>Make Premium</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        users?.map((singleData, idx) => <TableRowAllUsers handleMakePremium={handleMakePremium} handleMakeAdmin={handleMakeAdmin} singleData={singleData} key={idx} number={idx}></TableRowAllUsers>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageUser;
