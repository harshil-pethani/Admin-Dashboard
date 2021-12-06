import React from 'react';
import "./Home.scss";
import FeaturedInfo from '../../Components/FeatureInfo/Featureinfo';
import Chart from '../../Components/Chart/Chart';
import { userAnalyticData } from '../../Data';
import WidgetSmall from '../../Components/WidgetSmall/WidgetSmall';
import WidgetLarge from '../../Components/WidgetLarge/WidgetLarge';

const Home = ({ activeSidebar }) => {
    return (
        <div className={activeSidebar ? "home pageContent" : "home"}>
            <FeaturedInfo />
            <Chart data={userAnalyticData} title="User Analytics" grid dataKey="Active User" />
            <div className="homeWidgets">
                <WidgetSmall />
                <WidgetLarge />
            </div>
        </div>
    )
}

export default Home
