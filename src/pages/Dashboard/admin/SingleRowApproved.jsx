import { FcApprove } from "react-icons/fc";
import useAxiousSecure from "../../../hooks/useAxiousSecure";
import Swal from "sweetalert2";


const SingleRowApproved = ({ singleRow, approvedRef }) => {

    const axiousSecure = useAxiousSecure()
    const { name, email,
        biodataId } = singleRow


    const handletheapprovepre = async() => {
        axiousSecure.patch(`/premium/${email}`)
        .then(res => {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Premium is Approved !",
                showConfirmButton: false,
                timer: 1500
              });
              approvedRef();
        })
    }


    return (
        <tr>
            <th>3</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{biodataId}</td>
            <td><button className="btn btn-ghost text-4xl" onClick={handletheapprovepre}><FcApprove /></button></td>
        </tr>
    );
};

export default SingleRowApproved;