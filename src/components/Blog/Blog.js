import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='my-5 mx-12 rounded-lg grid grid-cols-1 lg:grid-cols-2 gap-5'>
                <div className='about-us bg-warning text-black mb-2 rounded-lg p-5'>
                    <h2 className="text-2xl">#What are the different ways to manage a state in a React application?</h2>
                    <p><strong>Ans: </strong>When we talk about state in our applications, it's important to be clear about what types of state actually matter.</p>
                    <br />
                    <p>*There are four main types of state you need to properly manage in your React apps:</p>
                    <ol>
                        <li>1.Local state</li>
                        <li>2.Global state</li>
                        <li>3.Server state</li>
                        <li>4.URL state</li>
                    </ol>
                </div>
                <div className="about-us bg-warning text-black mb-2 rounded-lg p-5">
                    <h2 className="text-2xl"># How does prototypical inheritance work?</h2>
                    <p><strong>Ans: </strong>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the Prototype of an object, we use Object.</p>
                </div>
                <div className='about-us bg-warning text-black mb-2 rounded-lg p-5'>
                    <h2 className="text-2xl"># What is a unit test? </h2>
                    <p><strong>Ans:</strong> In computer programming, unit testing is a software testing method by which individual units of source code—sets of one or more computer program modules together with associated control data, usage procedures, and operating procedures—are tested to determine whether they are fit for use.</p>
                    <h2 className="text-2xl">#Why should we write unit tests?</h2>
                    <p><strong>Ans:</strong>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages</p>
                </div>
                <div className="about-us bg-warning text-black mb-2 rounded-lg p-5">
                    <h1 className='text-3xl'>The difference React vs. Angular vs. Vue</h1>
                    <h2 className="text-2xl">#React</h2>
                    <p><strong>Ans:</strong> One of the biggest of them is that React.js uses a virtual DOM that only compares the previous HTML code differences and only loads the different parts. This significantly impacts the loading times. In a positive way, of course</p>
                    <br />
                    <p>With React.js, you handle the markup and the logic in the same file, which means you can output variables in a view component (JSX). React offers a type of mobile solution for applications called React-Native.</p>
                    <h2 className="text-2xl"># Vue</h2>
                    <p><strong>Ans:</strong> Vue.js is a JavaScript-based progressive framework for creating single-page applications. It was created with scalability and incrementality in mind, as well as ease of integration with other view layer frameworks.</p>
                    <br />
                    <p>Vue.js combines the useful principles of the Angular and React frameworks and presents them in a minimalistic modern style. Web developers use Vue.js to create frontend user interfaces for web-based and hybrid mobile applications.</p>
                    <h2 className="text-2xl">#Angular</h2>
                    <p><strong>Ans:</strong> Angular.js is an MVC framework. A major disadvantage of Angular is that it uses a regular DOM, and thus, the entire tree structure of the HTML tags is updated, which massively impacts the loading time. Angular.js has its Ionic framework for mobile applications.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;