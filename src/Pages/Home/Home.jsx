import React from 'react';
import "./Home.scss";
import FeaturedInfo from '../../Components/FeatureInfo/Featureinfo';
import Chart from '../../Components/Chart/Chart';
import { userData } from '../../Data';
import WidgetSmall from '../../Components/WidgetSmall/WidgetSmall';
import WidgetLarge from '../../Components/WidgetLarge/WidgetLarge';

const Home = () => {
    return (
        <div className="home">
            <FeaturedInfo />
            <Chart data={userData} title="User Analytics" grid dataKey="Active User" />
            <div className="homeWidgets">
                <WidgetSmall />
                <WidgetLarge />
            </div>
        </div>
    )
}

export default Home
