
const TableRowAllUsers = ({ singleData, number, handleMakeAdmin, handleMakePremium }) => {

    const { email, name, _id } = singleData;

    return (
        <tr>
            <th>{number + 1}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{ singleData.role === "admin" ? <button>Admin</button> : <button className="btn btn-ghost" onClick={() => handleMakeAdmin({ _id, name })}>Make Admin</button>}</td>
            <td>{ singleData.customer === "premium" ? <button>Premium</button> : <button className="btn btn-ghost" onClick={() => handleMakePremium({ _id, name })}>Make Premium</button>}</td>
        </tr>
    );
};

export default TableRowAllUsers;