import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        // Header contents
        <>
        <section className="bg-gray-100 text-gray-800">
            <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
                <h1 className="text-4xl font-bold leading-none sm:text-5xl">IF YOU’RE LOOKING TO MAKE 
                    <span className="text-slate-600">IT SKILLS INVESTMENT </span>THIS YEAR
                </h1>
                <p className="px-8 mt-8 mb-12 text-lg">Then this are the best courses for you lo leran in 2022. we analyzed the most popular Global Knowledge training courses, as well as the following data gathered from over 9,000 IT professionals </p>
                <div className="flex flex-wrap justify-center">
                    <Link to='/courses'><button className="px-8 py-3 m-2 text-lg font-semibold rounded bg-slate-600 hover:bg-slate-900 text-gray-50">Explore Courses</button></Link>
                    <Link to='/register'><button className="px-8 py-3 m-2 text-lg border rounded text-gray-900 border-gray-300">Register Now</button></Link>
                </div>
            </div>
        </section>
        {/* course overview */}
        <div className="bg-gray-100">
            <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="absolute inset-x-0 top-0 items-center justify-center hidden overflow-hidden md:flex md:inset-y-0">
                <svg
                    viewBox="0 0 88 88"
                    className="w-full max-w-screen-xl text-slate-100"
                >
                    <circle fill="currentColor" cx="44" cy="44" r="15.5" />
                    <circle
                    fillOpacity="0.2"
                    fill="currentColor"
                    cx="44"
                    cy="44"
                    r="44"
                    />
                    <circle
                    fillOpacity="0.2"
                    fill="currentColor"
                    cx="44"
                    cy="44"
                    r="37.5"
                    />
                    <circle
                    fillOpacity="0.3"
                    fill="currentColor"
                    cx="44"
                    cy="44"
                    r="29.5"
                    />
                    <circle
                    fillOpacity="0.3"
                    fill="currentColor"
                    cx="44"
                    cy="44"
                    r="22.5"
                    />
                </svg>
                </div>
                <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                    <div className="p-5">
                    <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-slate-200">
                        <svg
                        className="w-8 h-8 text-deep-purple-accent-400"
                        stroke="currentColor"
                        viewBox="0 0 52 52"
                        >
                        <polygon
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                        />
                        </svg>
                    </div>
                    <p className="mb-2 font-bold">Data Science</p>
                    <p className="text-sm leading-5 text-gray-900">
                    Data science refers to scientific methods, tools, processes, and algorithms to extract information and insights from structured and unstructured data.
                    </p>
                    </div>
                    <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                </div>
                <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                    <div className="p-5">
                    <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-slate-200">
                        <svg
                        className="w-8 h-8 text-deep-purple-accent-400"
                        stroke="currentColor"
                        viewBox="0 0 52 52"
                        >
                        <polygon
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                        />
                        </svg>
                    </div>
                    <p className="mb-2 font-bold">Cloud Computing</p>
                    <p className="text-sm leading-5 text-gray-900">
                    Cloud computing refers to storing and accessing computing services, such as databases, software, servers, networking, and analytics, over the internet.
                    </p>
                    </div>
                    <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                </div>
                <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                    <div className="p-5">
                    <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-slate-200">
                        <svg
                        className="w-8 h-8 text-deep-purple-accent-400"
                        stroke="currentColor"
                        viewBox="0 0 52 52"
                        >
                        <polygon
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                        />
                        </svg>
                    </div>
                    <p className="mb-2 font-bold">Artificial Intelligence</p>
                    <p className="text-sm leading-5 text-gray-900">
                    Artificial Intelligence refers to the intelligence demonstrated by machines. AI professionals focus on building machines that are programmed to think like humans.
                    </p>
                    </div>
                    <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                </div>
                <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                    <div className="p-5">
                    <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-slate-200">
                        <svg
                        className="w-8 h-8 text-deep-purple-accent-400"
                        stroke="currentColor"
                        viewBox="0 0 52 52"
                        >
                        <polygon
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                        />
                        </svg>
                    </div>
                    <p className="mb-2 font-bold">DevOps</p>
                    <p className="text-sm leading-5 text-gray-900">
                    DevOps is a set of practices and tools that combine software development and IT operations to shorten the systems development life cycle. In simple terms, it aims to make building, testing, and releasing software-faster and more reliable.
                    </p>
                    </div>
                    <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                </div>
                <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                    <div className="p-5">
                    <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-slate-200">
                        <svg
                        className="w-8 h-8 text-deep-purple-accent-400"
                        stroke="currentColor"
                        viewBox="0 0 52 52"
                        >
                        <polygon
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                        />
                        </svg>
                    </div>
                    <p className="mb-2 font-bold">Blockchain</p>
                    <p className="text-sm leading-5 text-gray-900">
                    Also referred to as Distributed Ledger Technology (DLT), Blockchain is a digital ledger of transactions duplicated and distributed thousands of times across a network of computer systems on the blockchain.
                    </p>
                    </div>
                    <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                </div>
                <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                    <div className="p-5">
                    <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-slate-200">
                        <svg
                        className="w-8 h-8 text-deep-purple-accent-400"
                        stroke="currentColor"
                        viewBox="0 0 52 52"
                        >
                        <polygon
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                        />
                        </svg>
                    </div>
                    <p className="mb-2 font-bold">RPA (Robotic Process Automation)</p>
                    <p className="text-sm leading-5 text-gray-900">
                    Robotic Process Automation refers to the application of technology governed by businesses to perform automating. Simply put, RPA is the process of creating a software robot to automate any repeatable business process.
                    </p>
                    </div>
                    <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                </div>
                <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                    <div className="p-5">
                    <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-slate-200">
                        <svg
                        className="w-8 h-8 text-deep-purple-accent-400"
                        stroke="currentColor"
                        viewBox="0 0 52 52"
                        >
                        <polygon
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                        />
                        </svg>
                    </div>
                    <p className="mb-2 font-bold">Augmented Reality (AR) and Virtual Reality (VR)</p>
                    <p className="text-sm leading-5 text-gray-900">
                    Augmented reality (AR) and Virtual Reality (VR) are the technologies that bridge the real and virtual worlds. These technologies enable users to view information and content visually.
                    </p>
                    </div>
                    <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                </div>
                <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                    <div className="p-5">
                    <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-slate-200">
                        <svg
                        className="w-8 h-8 text-deep-purple-accent-400"
                        stroke="currentColor"
                        viewBox="0 0 52 52"
                        >
                        <polygon
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                        />
                        </svg>
                    </div>
                    <p className="mb-2 font-bold">Cybersecurity</p>
                    <p className="text-sm leading-5 text-gray-900">
                    Cyber security is another one of the most in-demand tech skills. Cybersecurity deals with safeguarding computer systems and networks from cyber-attacks.
                    </p>
                    </div>
                    <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                </div>
                </div>
            </div>
        </div>
        </>
    )
};

export default Home;