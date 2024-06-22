
const TableRowAllUsers = ({ singleData, number, handleMakeAdmin }) => {

    const { email, name, _id } = singleData;

    return (
        <tr>
            <th>{number + 1}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td><button className="btn btn-ghost" onClick={() => handleMakeAdmin({ _id, name })}>Make Admin</button></td>
            <td><button className="btn btn-ghost">Make Premium</button></td>
        </tr>
    );
};

export default TableRowAllUsers;