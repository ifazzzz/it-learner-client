import React from 'react';

const FAQ = () => {
    return (
        <div>
            <section className="bg-gray-100 text-gray-800">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                    <h2 className="text-2xl font-semibold sm:text-4xl">Frequently Asked Questions</h2>
                    
                    <div className="space-y-4">
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-cyan-600">what is data science?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">Data science refers to scientific methods, tools, processes, and algorithms to extract information and insights from structured and unstructured data.</p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-cyan-600">what is blockchain?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">Also referred to as Distributed Ledger Technology (DLT), Blockchain is a digital ledger of transactions duplicated and distributed thousands of times across a network of computer systems on the blockchain.  </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-cyan-600">what is devops?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">DevOps is a set of practices and tools that combine software development and IT operations to shorten the systems development life cycle. In simple terms, it aims to make building, testing, and releasing software-faster and more reliable. </p>
                        </details>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FAQ;