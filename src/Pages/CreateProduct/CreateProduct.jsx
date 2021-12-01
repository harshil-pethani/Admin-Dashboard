import './createProduct.scss';
import { CloudUpload } from '@material-ui/icons'

const CreateProduct = () => {
    return (
        <div className="createProduct">
            <h2 className="pageTitle">
                Create Product
            </h2>
            <form className="newUserForm" action="">
                <div className="formItem">
                    <label htmlFor="title">
                        Title
                    </label>
                    <input id="title" type="text" placeholder="Dark Wash Straight Jeans" />
                </div>
                <div className="formItem">
                    <label htmlFor="price">
                        Price
                    </label>
                    <input id="price" type="text" placeholder="120 ( In USD )" />
                </div>
                <div className="formItem">
                    <label>
                        Colors
                    </label>
                    <div className="colorBtns">
                        <div className="checkboxItem">
                            <input type="checkbox" id="blue" value="blue" />
                            <label htmlFor="blue">Blue</label>
                        </div>
                        <div className="checkboxItem">
                            <input type="checkbox" id="black" value="black" />
                            <label htmlFor="black">Black</label>
                        </div>
                        <div className="checkboxItem">
                            <input type="checkbox" id="gray" value="gray" />
                            <label htmlFor="gray">Gray</label>
                        </div>
                        <div className="checkboxItem">
                            <input type="checkbox" id="skyblue" value="skyblue" />
                            <label htmlFor="skyblue">Sky Blue</label>
                        </div>
                        <div className="checkboxItem">
                            <input type="checkbox" id="olive" value="olive" />
                            <label htmlFor="olive">Olive</label>
                        </div>
                    </div>
                </div>
                <div className="formItem">
                    <label>
                        Size
                    </label>
                    <div className="sizeBtns">
                        <div className="checkboxItem">
                            <input type="checkbox" id="s" value="s" />
                            <label htmlFor="s">S</label>
                        </div>
                        <div className="checkboxItem">
                            <input type="checkbox" id="m" value="m" />
                            <label htmlFor="m">M</label>
                        </div>
                        <div className="checkboxItem">
                            <input type="checkbox" id="l" value="l" />
                            <label htmlFor="l">L</label>
                        </div>
                        <div className="checkboxItem">
                            <input type="checkbox" id="xl" value="xl" />
                            <label htmlFor="xl">XL</label>
                        </div>
                        <div className="checkboxItem">
                            <input type="checkbox" id="xxl" value="xxl" />
                            <label htmlFor="xxl">XXL</label>
                        </div>
                    </div>
                </div>
                <div className="formItem">
                    <label>
                        Categories
                    </label>
                    <div className="categoryBtns">
                        <div className="checkboxItem">
                            <input type="checkbox" id="men" value="men" />
                            <label htmlFor="men">Men</label>
                        </div>
                        <div className="checkboxItem">
                            <input type="checkbox" id="formal" value="formal" />
                            <label htmlFor="formal">Formal</label>
                        </div>
                        <div className="checkboxItem">
                            <input type="checkbox" id="blazer" value="blazer" />
                            <label htmlFor="blazer">Blazer</label>

                        </div>
                        <div className="checkboxItem">
                            <input type="checkbox" id="shirt" value="shirt" />
                            <label htmlFor="shirt">Shirt</label>
                        </div>
                        <div className="checkboxItem">
                            <input type="checkbox" id="tshirt" value="tshirt" />
                            <label htmlFor="tshirt">T-shirt</label>
                        </div>
                        <div className="checkboxItem">
                            <input type="checkbox" id="casuals" value="casuals" />
                            <label htmlFor="casuals">Casuals</label>
                        </div>
                        <div className="checkboxItem">
                            <input type="checkbox" id="jeans" value="jeans" />
                            <label htmlFor="jeans">Jeans</label>
                        </div>
                    </div>
                </div>
                <div className="formItem">
                    <label htmlFor="description">
                        Description
                    </label>
                    <textarea style={{ resize: "vertical" }} id="description" rows="3" placeholder="Enter Product Description" />
                </div>
                <div className="formItem profile">
                    <label htmlFor="avatar">
                        Profile Pic
                    </label>
                    <input id="avatar" type="file" style={{ display: "none" }} />
                    <label className="iconLabel" htmlFor="avatar">
                        <CloudUpload className="icon" />
                    </label>
                </div>
                <div className="btnContainer">
                    <button type="submit" className="createBtn">
                        Create
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CreateProduct
