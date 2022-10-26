import React from 'react';

const Blog = () => {
    return (
        <div>
            <section className="dark:bg-violet-500 dark:text-gray-100 w-11/12 mx-auto mt-8">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                    <h2 className="text-2xl font-semibold sm:text-4xl text-center mb-3">Question To Answer Section</h2>
                    
                    <div className="space-y-4">
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 text-xl">what is cors?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-white text-md">
                                CORS stands for Cross-Origin Resource Sharing . It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API.
                            </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 text-xl">Why are you using firebase? What other options do you have to implement authentication?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-white text-md">Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app.It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more. </p>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-white text-md"> other options do you have to implement authentication are: Auth0, MongoDB, Passport, Okta, and Firebase are the most popular alternatives and competitors to Firebase Authentication.</p>
                            
                           
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 text-xl">How does the private route work?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-white">The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.</p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 text-xl"> What is Node? How does Node work?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-white">Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return</p>
                        </details>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;