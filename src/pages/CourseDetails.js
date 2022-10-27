import React from 'react';
import { createContext } from 'react';
import { HiArrowDown } from 'react-icons/hi';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";
import Checkout from '../others/Checkout';



const ref = React.createRef();

const CourseDetails = () => {
    const details = useLoaderData()
    const {description, name, price, img, id} = details;
    console.log(details);
    return (
		
        <>
		<div className="my-12">
            <div ref={ref} className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-300 bg-gray-50 text-gray-800">
				<div className="flex justify-between p-4">
					<div className="flex space-x-4">
						<div>
							<img src={img} alt="" className="object-cover w-12 h-12 rounded-full bg-gray-500" />
						</div>
						<div>
							<h4 className="font-bold">{name}</h4>
							<span className="text-xs text-gray-600">price : {price}</span>
						</div>
					</div>
					<div className="flex items-center space-x-2 text-slate-800">
					<Pdf targetRef={ref} filename="code-example.pdf">
						{({ toPdf }) => <button onClick={toPdf}>
						<HiArrowDown></HiArrowDown>
						</button>}
					</Pdf>							
						<span className="text-xl font-bold">PDF</span>
					</div>
				</div>
				<div className="p-4 space-y-2 text-sm text-gray-600">
					<p>{description}</p>
				</div>
				<button><Link to={`/premium/${id}`}>get Premium Access</Link></button>
			</div>  
        </div>
		
		</>
		
    );
};

export default CourseDetails;