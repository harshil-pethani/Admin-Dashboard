import './updateProduct.scss'
import { Publish } from '@material-ui/icons'
import { productRows } from '../../Data';
import { useLocation } from 'react-router-dom';
import Chart from '../../Components/Chart/Chart';
import { productSalesData } from '../../Data';

const UpdateProduct = ({ activeSidebar }) => {
    const location = useLocation();
    let productId = location.pathname.split('/')[2];
    productId = parseInt(productId);
    let product = productRows.filter(element => element.id === productId)[0];

    return (
        <div className={activeSidebar ? "updateProduct pageContent" : "updateProduct"}>
            <div className="pageTitleContainer">
                <h2 className="title">
                    Edit Product
                </h2>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <Chart data={productSalesData} dataKey="Sales" title="Sales Performance" />
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src={product.img} alt="" />
                        <span className="name">
                            {product.name}
                        </span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">
                                Id :
                            </span>
                            <span className="productInfoValue">
                                {product.id}
                            </span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">
                                Sales :
                            </span>
                            <span className="productInfoValue">
                                {product.sales}
                            </span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">
                                Stock :
                            </span>
                            <span className="productInfoValue">
                                {product.stock}
                            </span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">
                                Price :
                            </span>
                            <span className="productInfoValue">
                                {product.price}
                            </span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">
                                Status :
                            </span>
                            <span className="productInfoValue">
                                {product.status}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <span className="updateTitle">
                    Edit
                </span>
                <form>
                    <div className="userUpdateLeft">
                        <div className="userUpdateItem">
                            <label htmlFor="productId">
                                Product ID
                            </label>
                            <input id="productId" type="text" value={product.id} />
                        </div>
                        <div className="userUpdateItem">
                            <label htmlFor="name">
                                Name
                            </label>
                            <input id="name" type="text" placeholder={product.name} />
                        </div>
                        <div className="userUpdateItem">
                            <label htmlFor="stock">
                                Stock
                            </label>
                            <input id="stock" type="text" placeholder={product.stock} />
                        </div>
                        <div className="userUpdateItem">
                            <label htmlFor="status">
                                Status
                            </label>
                            <input id="status" type="text" placeholder={product.status} />
                        </div>
                        <div className="userUpdateItem">
                            <label htmlFor="price">
                                Price
                            </label>
                            <input id="price" type="text" placeholder={product.price} />
                        </div>
                    </div>
                    <div className="userUpdateRight">
                        <div className="userUpdateUpload">
                            <img src={product.img} alt="" />

                            <input style={{ display: "none" }} type="file" id="uploadImg" />
                            <label htmlFor="uploadImg">
                                <Publish className="uploadIcon" />
                            </label>
                        </div>
                        <button className="updateBt">
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UpdateProduct
