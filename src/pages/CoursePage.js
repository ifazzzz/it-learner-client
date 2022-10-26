import { Card } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const CoursePage = ({course}) => {
    
    const {name, img, headline, price} = course;

    return (
 
                
                <div className="max-w-sm">
                <Card
                    imgSrc={img}>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {name}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                    {headline}
                    </p>
                </Card>
                </div>

    );
};

export default CoursePage;