import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Fish from '../Fish/Fish';

const Menu = () => {
    const mealsData = useLoaderData([]);

    return (
        <div className=' mx-5 px-5  row row-cols-1 row-cols-md-3 g-4 my-5'>
            {
                mealsData.meals.map((meal, idx) => <Fish key={idx} meal={meal} />)
            }
        </div>
    );
};
// strYoutube
export default Menu;