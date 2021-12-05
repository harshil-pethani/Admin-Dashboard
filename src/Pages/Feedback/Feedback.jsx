import "./feedback.scss";

const Feedback = ({ activeSidebar }) => {
    return (
        <div className={activeSidebar ? "feedback pageContent" : "feedback"}>
            <div className="pageTitleContainer">
                <h2 className="title">
                    Feedback
                </h2>
            </div>
        </div>
    )
}

export default Feedback
