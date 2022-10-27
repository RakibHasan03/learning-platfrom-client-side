import React from 'react';

const Faq = () => {
    return (
        <section className="bg-indigo-300 dark:text-gray-800 w-11/12 mx-auto mt-8 rounded-lg shadow-lg">
            <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-4xl">Frequently Asked Questions</h2>
                <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
                    <div>
                        <h3 className="font-semibold">Importance of E Learning </h3>
                        <p className="mt-1 dark:text-gray-800">Online learning helps students to create and communicate new ideas. You get the chance to uplift your skills and gain knowledge apart from school education. One of the prime importance of e-learning is that it helps students and teachers develop advanced skills.</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">Why Is Computer Programming Important?</h3>
                        <p className="mt-1 dark:text-gray-800">Computer programming is the lifeblood of modern life. Imagine for a moment what would happen if all computers suddenly disappeared tomorrow. No internet. No data. No connection. No convenience Computer programming is a fundamental skill for so many different applications. </p>
                    </div>
                    <div>
                        <h3 className="font-semibold">What is the Future of Coding?</h3>
                        <p className="mt-1 dark:text-gray-800">
                            The Future of Coding is both No-Code and Code Augmented with AI. The future of coding therefore is a democratization of coding and developers more and more augmented by A.I. It's also a natural selection of dozens of programming languages usually monetized by BigTech firms that have their own interests around them.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold">What is the most popular programming language in 2022?</h3>
                        <p className="mt-1 dark:text-gray-800"> According to the IEEE Spectrum, Python is the most popular programming language in 2022, followed by C and C++. Java, as well as Javascript. Python once again headlines the list of the IEEE's top programming languages for 2022, continuing a streak that began in 2017</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;