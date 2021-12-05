import "./transactions.scss";

const Transactions = ({ activeSidebar }) => {
    return (
        <div className={activeSidebar ? "transactions pageContent" : "transactions"}>
            <div className="pageTitleContainer">
                <h2 className="title">
                    Transactions
                </h2>
            </div>
        </div>
    )
}

export default Transactions
