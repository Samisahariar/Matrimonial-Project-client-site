import { useContext } from "react";
import { AuthContext } from "../../../components/AuthInformation";
import useAxiousSecure from "../../../hooks/useAxiousSecure";
import { useQuery } from "@tanstack/react-query";
import SingleRowApproved from "./SingleRowApproved";

const ApprovedPremium = () => {

    const axiousSecure = useAxiousSecure();
    const { user } = useContext(AuthContext);
    const { data: appreovedPremium, refetch : approvedRef } = useQuery({
        queryKey: ["appreovedPremium"],
        queryFn: async () => {
            const allthedata = await axiousSecure.get("/pending")
            return allthedata.data;
        }
    })

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th>Make Premium</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appreovedPremium?.map((singledata, idx) => <SingleRowApproved singleRow={singledata} number={idx + 1} key={idx} approvedRef={approvedRef}></SingleRowApproved>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ApprovedPremium;