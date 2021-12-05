import "./mail.scss";

const Mail = ({ activeSidebar }) => {
    return (
        <div className={activeSidebar ? "mail pageContent" : "mail"}>
            <div className="pageTitleContainer">
                <h2 className="title">
                    Mail
                </h2>
            </div>
        </div>
    )
}

export default Mail
