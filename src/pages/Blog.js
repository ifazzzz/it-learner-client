import React from 'react';
import UseTitle from '../hooks/UseTitle';

const Blog = () => {
    UseTitle('Blog');
    return (
        <div>
            <section className="bg-gray-100 text-gray-800">
                <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                    
                    <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Learn More About Web Development</h2>
                    <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
                        <div>
                            <h3 className="font-semibold">what is `cors`?</h3>
                            <p className="mt-1 text-gray-600">CORS is a mechanism which aims to allow requests made on behalf of you and at the same time block some requests made by rogue JS and is triggered whenever you are making an HTTP request.This mechanism prevents attackers that plant scripts on various websites (eg. in ads displayed via Google Ads) to make an AJAX call to www.yourbank.com and in case you were logged in making a transaction using *your* credentials.If the server does not respond with specific headers to a “simple” GET or POST request — it will still be send, the data still received but the browser will not allow JavaScript to access the response.If your browser tries to make a “non simple” request (eg. an request that includes cookies, or which Content-type is other than application/x-ww-form-urlencoded, multipart/form-data or text-plain) an mechanism called preflight will be used and an OPTIONS request will be sent to the server.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold">Why are you using `firebase`? What other options do you have to implement authentication?</h3>
                            <p className="mt-1 text-gray-600">Most apps need to know the identity of a user. Knowing a user's identity allows an app to securely save user data in the cloud and provide the same personalized experience across all of the user's devices.Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.Firebase Authentication integrates tightly with other Firebase services, and it leverages industry standards like OAuth 2.0 and OpenID Connect, so it can be easily integrated with your custom backend.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold">How does the private route work?</h3>
                            <p className="mt-1 text-gray-600">The private route component is similar to the public route, the only change is that redirect URL and authenticate condition.If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).Private Routes vary based on the Apps, For example, Dashboard, User Profile, App Settings, Home etc. In simple words, These routes can be accessed only after login.The constraints for Public and Private routes are that Public routes should not be accessed after login and Private routes should not be accessible before login.In this article, we can see. How to create public and private routes using react-router for your react apps. Let's start</p>
                        </div>
                        <div>
                            <h3 className="font-semibold">What is Node? How does Node work?</h3>
                            <p className="mt-1 text-gray-600">Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.Working of Node.js: Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;