
const TableRowAllUsers = ({ singleData, number, handleMakeAdmin, handleMakePremium }) => {

    const { email, name, _id } = singleData;

    return (
        <tr>
            <th>{number + 1}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{ singleData.role === "admin" ? <button>Admin</button> : <button className="btn btn-ghost" onClick={() => handleMakeAdmin({ _id, name })}>Make Admin</button>}</td>
        <td>{ singleData.customer === "premium" ? <button>Premium Member</button> : <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50" onClick={() => handleMakePremium({ _id, name })}>
        Make Premium
      </button>}</td>
        </tr>
    );
};

export default TableRowAllUsers;