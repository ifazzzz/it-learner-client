import { Carousel } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Register from './Register';

const Home = () => {
    return (
        <>
    <section className="bg-gray-100 text-gray-800">
	 <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-5xl font-bold leading-none sm:text-6xl">Ac mattis
				<span className="text-slate-500">senectus</span>erat pharetra
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12">Dictum aliquam porta in condimentum ac integer
				<br className="hidden md:inline lg:hidden"/>turpis pulvinar, est scelerisque ligula sem
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<a  className="px-8 py-3 text-lg font-semibold rounded bg-slate-500 text-gray-50">Suspendisse</a>
				<a  className="px-8 py-3 text-lg font-semibold border rounded border-gray-800">Malesuada</a>
			</div>
		</div>

        <Register></Register>
        {/* <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-50 text-gray-800">
            <div className="mb-8 text-center">
                <h1 className="my-3 text-4xl font-bold">Sign in</h1>
                <p className="text-sm text-gray-600">Sign in to access your account</p>
            </div>
            <form novalidate="" action="" className="space-y-12 ng-untouched ng-pristine ng-valid">
                <div className="space-y-4">
                    <div>
                        <label for="email" className="block mb-2 text-sm">Email address</label>
                        <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800" />
                    </div>
                    <div>
                        <div className="flex justify-between mb-2">
                            <label for="password" className="text-sm">Password</label>
                            <a  className="text-xs hover:underline text-gray-600">Forgot password?</a>
                        </div>
                        <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800" />
                    </div>
                </div>
                <div className="space-y-2">
                    <div>
                        <button type="button" className="w-full px-8 py-3 font-semibold rounded-md bg-slate-500 text-gray-50">Sign in</button>
                    </div>
                    <p className="px-6 text-sm text-center text-gray-600">Don't have an account yet?
                        <a  className="hover:underline text-slate-500">Sign up</a>.
                    </p>
                </div>
            </form>
        </div> */}
     </div>
    </section>

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
                    <p className="mb-2 font-bold">Football Sports</p>
                    <p className="text-sm leading-5 text-gray-900">
                        Sed ut perspiciatis unde omnis iste. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit.
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
                    <p className="mb-2 font-bold">Bowling Sports</p>
                    <p className="text-sm leading-5 text-gray-900">
                        Disrupt inspire and think tank, social entrepreneur but
                        preliminary thinking think tank compelling.
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
                    <p className="mb-2 font-bold">Cycling Sports</p>
                    <p className="text-sm leading-5 text-gray-900">
                        A slice of heaven. O for awesome, this chocka full cuzzie is as
                        rip-off as a cracker.
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
                    <p className="mb-2 font-bold">Weight Lifting Sports</p>
                    <p className="text-sm leading-5 text-gray-900">
                        Meanwhile, in behind the bicycle shed, Hercules Morse, as big as
                        a horse.
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
                    <p className="mb-2 font-bold">Golf Sports</p>
                    <p className="text-sm leading-5 text-gray-900">
                        Disrupt inspire and think tank, social entrepreneur but
                        preliminary thinking think tank compelling.
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
                    <p className="mb-2 font-bold">Hockey Sports</p>
                    <p className="text-sm leading-5 text-gray-900">
                        A business big enough that it could be listed on the NASDAQ goes
                        belly up.
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
                    <p className="mb-2 font-bold">Shooting Sports</p>
                    <p className="text-sm leading-5 text-gray-900">
                        Lookout flogging bilge rat main sheet bilge water nipper fluke
                        to go on account heave down clap of thunder.
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
                    <p className="mb-2 font-bold">Martial Arts</p>
                    <p className="text-sm leading-5 text-gray-900">
                        Webtwo ipsum orkut reddit meebo skype vimeo jajah spock empressr
                        zimbra, mobly napster.
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