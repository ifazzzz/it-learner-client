import { Card } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { HiArrowSmRight } from "react-icons/hi";

const CoursePage = ({course}) => {
    
    const {name, img, headline, price, id} = course;

    return (
               
                <div className="">
                <Card
                    imgSrc={img}>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {name}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                    {headline}
                    </p>
                    <Link className="text-slate-800" to={`/courses/${id}`}>View More<HiArrowSmRight></HiArrowSmRight></Link>
                </Card>
                </div>

    );
};

export default CoursePage;