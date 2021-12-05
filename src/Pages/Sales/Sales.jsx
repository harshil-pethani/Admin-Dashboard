import "./sales.scss";

const Sales = ({ activeSidebar }) => {
    return (
        <div className={activeSidebar ? "sales pageContent" : "sales"}>
            <div className="pageTitleContainer">
                <h2 className="title">
                    Sales
                </h2>
            </div>
        </div>
    )
}

export default Sales
