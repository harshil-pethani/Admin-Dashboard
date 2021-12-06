import "./Large.scss";
import { transactionsRows } from '../../Data';

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
                {
                    transactionsRows.map((element) => (
                        <tr className="tableRow">
                            <td className="userInfo">
                                <img src={element.avatar} alt="" />
                                <span className="username">
                                    {element.fullname}
                                </span>
                            </td>
                            <td>
                                {element.orderDate}
                            </td>
                            <td>
                                ${element.orderAmount}
                            </td>
                            <td className="status">
                                <Button type={element.orderStatus} />
                            </td>
                        </tr>
                    ))
                }
            </table>
        </div>
    )
}

export default WidgetLarge
