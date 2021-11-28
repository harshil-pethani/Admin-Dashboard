import React from 'react';
import "./Home.scss";
import FeaturedInfo from '../../Components/FeatureInfo/Featureinfo';
import Chart from '../../Components/Chart/Chart';
import { userData } from '../../Data';

const Home = () => {
    return (
        <div className="home">
            <FeaturedInfo />
            <Chart data={userData} title="User Analytics" grid dataKey="Active User" />
        </div>
    )
}

export default Home
