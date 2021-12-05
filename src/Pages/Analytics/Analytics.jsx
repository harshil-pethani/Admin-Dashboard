import "./analytics.scss";

const Analytics = ({ activeSidebar }) => {
    return (
        <div className={activeSidebar ? "analytics pageContent" : "analytics"}>
            <div className="pageTitleContainer">
                <h2 className="title">
                    Analytics
                </h2>
            </div>
        </div>
    )
}

export default Analytics
