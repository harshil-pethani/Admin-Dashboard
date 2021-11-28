import "./Large.scss";

const WidgetLarge = () => {
    const Button = ({ type }) => {
        return <button className={"lgBtn " + type}>{type}</button>
    };
    return (
        <div className="widgetLarge">
            <h3 className="title">
                Latest Transactions
            </h3>

            <table className="widgetLgTable">
                <tr className="tableRow">
                    <th className="tableHeader">
                        Customer
                    </th>
                    <th className="tableHeader">
                        Date
                    </th>
                    <th className="tableHeader">
                        Amount
                    </th>
                    <th className="tableHeader">
                        Status
                    </th>
                </tr>
                <tr className="tableRow">
                    <td className="userInfo">
                        <img src="https://i.pinimg.com/474x/36/d0/86/36d086ed4cbbbc2548bc39953d8d575a--medium-instagram.jpg" alt="" />
                        <span className="username">
                            Jannat Zubair Rehmani
                        </span>
                    </td>
                    <td>
                        2 Jun 2021
                    </td>
                    <td>
                        $122
                    </td>
                    <td className="status">
                        <Button type="Approved" />
                    </td>
                </tr>
                <tr className="tableRow">
                    <td className="userInfo">
                        <img src="https://i.pinimg.com/474x/36/d0/86/36d086ed4cbbbc2548bc39953d8d575a--medium-instagram.jpg" alt="" />
                        <span className="username">
                            Jannat Zubair Rehmani
                        </span>
                    </td>
                    <td>
                        2 Jun 2021
                    </td>
                    <td>
                        $122
                    </td>
                    <td className="status">
                        <Button type="Processing" />
                    </td>
                </tr>
                <tr className="tableRow">
                    <td className="userInfo">
                        <img src="https://i.pinimg.com/474x/36/d0/86/36d086ed4cbbbc2548bc39953d8d575a--medium-instagram.jpg" alt="" />
                        <span className="username">
                            Jannat Zubair Rehmani
                        </span>
                    </td>
                    <td>
                        2 Jun 2021
                    </td>
                    <td>
                        $122
                    </td>
                    <td className="status">
                        <Button type="Pending" />
                    </td>
                </tr>
                <tr className="tableRow">
                    <td className="userInfo">
                        <img src="https://i.pinimg.com/474x/36/d0/86/36d086ed4cbbbc2548bc39953d8d575a--medium-instagram.jpg" alt="" />
                        <span className="username">
                            Jannat Zubair Rehmani
                        </span>
                    </td>
                    <td>
                        2 Jun 2021
                    </td>
                    <td>
                        $122
                    </td>
                    <td className="status">
                        <Button type="Declined" />
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default WidgetLarge
