import { useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
import { productRows } from "../../Data";
import { NavLink } from "react-router-dom";
import "./products.scss";
import { DeleteOutline } from "@material-ui/icons";

const Products = () => {
    const [data, setData] = useState(productRows);

    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        {
            field: 'name', headerName: 'Name', width: 300, renderCell: (params) => {
                return (
                    <div className="userField">
                        <img src={params.row.img} alt="" />
                        {params.row.name}
                    </div>
                )
            }
        },
        { field: 'stock', headerName: 'Stock', width: 170 },
        { field: 'status', headerName: 'Status', width: 170, },
        { field: 'price', headerName: "Price", width: 170 },
        {
            field: 'action', headerName: "Action", width: 170, renderCell: (params) => {
                return (
                    <>
                        <NavLink to={"/products/" + params.row.id}>
                            <button className="edit">
                                Edit
                            </button>
                        </NavLink>
                        <DeleteOutline onClick={() => handleDelete(params.row.id)} className="delete" />
                    </>
                )
            }
        }
    ]

    return (
        <div className="products">
            <div className="pageTitleContainer">
                <h2 className="title">
                    Products
                </h2>
                <button className="createBtn">
                    <NavLink className="link" to="/products/create">
                        Add
                    </NavLink>
                </button>
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
        </div>
    )
}

export default Products
