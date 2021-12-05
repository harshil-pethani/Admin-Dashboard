import "./reports.scss";

const Reports = ({ activeSidebar }) => {
    return (
        <div className={activeSidebar ? "reports pageContent" : "reports"}>
            <div className="pageTitleContainer">
                <h2 className="title">
                    Reports
                </h2>
            </div>
        </div>
    )
}

export default Reports
