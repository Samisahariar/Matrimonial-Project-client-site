import { useContext } from "react";
import { AuthContext } from "../../../components/AuthInformation";
import { useQuery } from "@tanstack/react-query";
import useAxiousSecure from "../../../hooks/useAxiousSecure";
import Swal from "sweetalert2";

const ViewBiodata = () => {

    const axiousSecure = useAxiousSecure();
    const { user } = useContext(AuthContext);
    const { data: userBiodata, isPending } = useQuery({
        queryKey: [user?.email, "userBiodata"],
        queryFn: async () => {
            const usebio = await axiousSecure.get(`/biodata/${user.email}`)
            return usebio.data
        }
    })

    const handlethemakePremium = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
        }).then((result) => {
            if (result.isConfirmed) {
                axiousSecure.post(`/premium/${user?.email}`)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.modifiedCount > 0) {
                            console.log("hooo")
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })

            }
        });
    }




    return (
        <div>
            <h3> This is the view biodata {userBiodata?.name} here !!</h3>
            <button className="btn btn-primary" onClick={handlethemakePremium}>Make BioData To Premium</button>
        </div>
    );
};

export default ViewBiodata;