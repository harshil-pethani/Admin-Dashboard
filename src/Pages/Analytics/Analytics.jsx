import "./analytics.scss";
import Chart from '../../Components/Chart/Chart';
import { userAnalyticData, orderAnalyticData, incomeAnalyticData } from '../../Data';

const Analytics = ({ activeSidebar }) => {
    return (
        <div className={activeSidebar ? "analytics pageContent" : "analytics"}>
            <div className="pageTitleContainer">
                <h2 className="title">
                    Analytics
                </h2>
            </div>
            <Chart data={userAnalyticData} title="User Analytics" grid dataKey="Active User" />
            <Chart data={orderAnalyticData} title="Order Analytics" grid dataKey="Number Of Orders" />
            <Chart data={incomeAnalyticData} title="Income Analytics" grid dataKey="Income" />
        </div>
    )
}

export default Analytics
