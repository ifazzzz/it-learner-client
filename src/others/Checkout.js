import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { BsFillArrowRightCircleFill, BsFillGrid3X3GapFill, BsFillTagsFill } from "react-icons/bs";
import { CourseContext } from '../pages/CourseDetails';

const Checkout = () => {
    const access = useLoaderData()
    console.log(access);
    const {name, price, duration, headline} = access;
    return (
        <div className="my-20">
            <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-300 bg-gray-50 text-gray-800">
            <div className="flex justify-between p-4">
                <div className="flex space-x-4">
                    <div>
                        <BsFillGrid3X3GapFill></BsFillGrid3X3GapFill>
                    </div>
                    <div>
                        <h4 className="font-bold">{name}</h4>
                        <span className="text-xs text-gray-600">Course Duration : {duration}</span>
                    </div>
                </div>
                <div className="flex items-center space-x-2 text-yellow-500">
                    <BsFillTagsFill/>
                    <span className="text-xl font-bold">{price}</span>
                </div>
            </div>
            <div className="p-4 space-y-2 text-sm text-gray-600">
                <p>{headline}</p>
                <button className="text-xl"><BsFillArrowRightCircleFill></BsFillArrowRightCircleFill></button>
            </div>
        </div>
        </div>
    );
};

export default Checkout;