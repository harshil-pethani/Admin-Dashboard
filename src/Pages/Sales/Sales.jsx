import "./sales.scss";
import { userAnalyticData, orderAnalyticData, incomeAnalyticData } from '../../Data';
import Chart from '../../Components/Chart/Chart';

const Sales = ({ activeSidebar }) => {
    return (
        <div className={activeSidebar ? "sales pageContent" : "sales"}>
            <div className="pageTitleContainer">
                <h2 className="title">
                    Sales
                </h2>
            </div>
            <Chart data={orderAnalyticData} title="Orders In Perticuler Months" grid dataKey="Number Of Orders" />

        </div>
    )
}

export default Sales
