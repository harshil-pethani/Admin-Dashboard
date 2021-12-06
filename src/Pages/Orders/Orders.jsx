import "./orders.scss";
import { transactionsRows } from "../../Data";
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { DeleteOutline } from '@material-ui/icons';
import { DataGrid } from '@mui/x-data-grid';


const Orders = ({ activeSidebar }) => {
    const [data, setData] = useState(transactionsRows);

    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id))
    }

    //Custom Component
    const Button = ({ type }) => {
        return <button className={"lgBtn " + type} >{type}</button>
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        {
            field: 'user', headerName: 'User', width: 250, renderCell: (params) => {
                return (
                    <div className="userField">
                        <img src={params.row.avatar} alt="" />
                        {params.row.username}
                    </div>
                )
            }
        },
        { field: 'email', headerName: 'Email', width: 250 },
        { field: 'orderDate', headerName: 'Order Date', width: 150 },
        { field: 'orderAmount', headerName: "Order Amount", width: 150 },
        {
            field: 'orderStatus', headerName: 'Order Status', width: 180,
            renderCell: (params) => {
                return (
                    <Button type={params.row.orderStatus} />
                )
            }
        },
        {
            field: 'action', headerName: "Action", width: 150, renderCell: (params) => {
                return (
                    <>
                        <NavLink to={"/users/" + params.row.id}>
                            <button className="view">
                                View
                            </button>
                        </NavLink>
                        <DeleteOutline onClick={() => handleDelete(params.row.id)} className="delete" />
                    </>
                )
            }
        }
    ];

    return (
        <div className={activeSidebar ? "orders pageContent" : "orders"}>
            <div className="pageTitleContainer">
                <h2 className="title">
                    Orders
                </h2>
            </div>
            <div className="transactionTableContainer" style={{ height: 500, width: '100%' }}>
                <DataGrid
                    disableSelectionOnClick
                    rows={data}
                    columns={columns}
                    pageSize={7}
                    checkboxSelection
                />
            </div>
        </div>
    )
}

export default Orders
