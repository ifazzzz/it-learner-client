import { Card } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';


const CoursePage = ({course}) => {
    
    const {name, img, headline, id} = course;

    return (
            //    course cards
                <div className="">
                <Card
                    imgSrc={img}>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {name}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                    {headline}
                    </p>
                    <Link className="text-slate-800 bg-gray-200 px-2 py-3 rounded-md text-center" to={`/courses/${id}`}>See Details</Link>
                </Card>
                </div>

    );
};

export default CoursePage;