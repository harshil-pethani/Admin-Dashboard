import "./messages.scss";

const Messages = ({ activeSidebar }) => {
    return (
        <div className={activeSidebar ? "messages pageContent" : "messages"}>
            <div className="pageTitleContainer">
                <h2 className="title">
                    Messages
                </h2>
            </div>
        </div>
    )
}

export default Messages
