import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiousSecure from "../hooks/useAxiousSecure";

const BiodataDetails = () => {

    const { biodataId } = useParams();
    const axiousSecure = useAxiousSecure();

    const { data: singleData, isPending: dataIsLoading } = useQuery({
        queryKey: ["singleData"],
        queryFn: async () => {
            const result = await axiousSecure.get(`/singleDetails/${biodataId}`)
            return result.data
        }
    })


    return (
        <div className="w-[80vw] mx-auto bg-black">
            <h3 className="mt-10 text-center text-5xl">Biodata Details</h3>
            <div className="flex flex-col">
                <div>

                </div>
                <div>
                    <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image" />
                </div>
            </div>
        </div>
    );
};

export default BiodataDetails;