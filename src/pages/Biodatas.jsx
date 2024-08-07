import { useQuery } from "@tanstack/react-query";
import useAxiousSecure from "../hooks/useAxiousSecure";
import SingleBiodat from "../components/SingleBiodat";




const Biodatas = () => {

    const axiousSecure = useAxiousSecure();
    const { data: allBiodatas, isPending: dataFectching } = useQuery({
        queryKey: ["allBiodatas"],
        queryFn: async () => {
            const result = await axiousSecure.get("/biodatas");
            return result.data;
        }
    })


    return (
        <div>
            {
                allBiodatas?.map((singleData, idx) => <SingleBiodat key={idx} singleData={singleData}></SingleBiodat>)
            }
        </div>
    );
};

export default Biodatas;