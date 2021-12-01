import './Users.scss';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@material-ui/icons'
import { userRows } from "../../Data";
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const Users = () => {
    const [data, setData] = useState(userRows);

    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        {
            field: 'user', headerName: 'User', width: 200, renderCell: (params) => {
                return (
                    <div className="userField">
                        <img src={params.row.avatar} alt="" />
                        {params.row.username}
                    </div>
                )
            }
        },
        { field: 'email', headerName: 'Email', width: 200 },
        { field: 'firstname', headerName: "First Name", width: 150 },
        { field: 'lastname', headerName: "Last Name", width: 150 },
        { field: 'status', headerName: 'Status', width: 130, },
        {
            field: 'action', headerName: "Action", width: 150, renderCell: (params) => {
                return (
                    <>
                        <NavLink to={"/users/" + params.row.id}>
                            <button className="edit">
                                Edit
                            </button>
                        </NavLink>
                        <DeleteOutline onClick={() => handleDelete(params.row.id)} className="delete" />
                    </>
                )
            }
        }
    ];


    return (
        <div className="users">
            <div className="userTitleContainer">
                <h2 className="ti">
                    Users
                </h2>
                <NavLink className="link" to="/users/create">
                    <button className="createBtn">
                        Add
                    </button>
                </NavLink>
            </div>
            <div className="userTableContainer" style={{ height: 500, width: '100%' }}>
                <DataGrid
                    disableSelectionOnClick
                    rows={data}
                    columns={columns}
                    pageSize={7}
                    checkboxSelection
                />
            </div>
        </div >
    )
}

export default Users
