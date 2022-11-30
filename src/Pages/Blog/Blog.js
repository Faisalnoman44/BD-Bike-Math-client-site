import React from 'react';

const Blog = () => {
    return (
        <div className='p-4'>
            <div className='mb-7 border border-primary p-4'>
                <h2 className="text-xl">Q1. What are the different ways to manage a state in a React application?</h2>
                <p className='text-lg'>There are four main types of state you need to properly manage in your React apps: <br />
                    1.Local state <br />
                    2.Global state <br />
                    3.Server state <br />
                    4.URL state</p> <br />
                <p className='text-lg'><span className='text-lg font-semibold'>Local (UI) state –</span> Local state is data we manage in one or another component.Local state is most often managed in React using the useState hook.For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs
                </p> <br />
                <p className='text-lg'><span className='text-lg font-semibold'>Global (UI) state –</span> Global state is data we manage across multiple components.Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.Sometimes state we think should be local might become global.</p> <br />
                <p className='text-lg'><span className='text-lg font-semibold'>Server state –</span> Data that comes from an external server that must be integrated with our UI state. Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state.Fortunately there are tools such as SWR and React Query that make managing server state much easier.</p> <br />
                <p className='text-lg'><span className='text-lg font-semibold'>URL state –</span> Data that exists on our URLs, including the pathname and query parameters.URL state is often missing as a category of state, but it is an important one.In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!There are undoubtedly more pieces of state that we could identify, but these are the major categories worth focusing on for most applications you build.</p>
            </div>
            <div className='mb-7 border border-primary p-4'>
                <h1 className="text-xl mb-3">Q2. How does prototypical inheritance work?</h1>
                <p className='text-lg'>In a class-based model, you have Classes, which are represented by the triple Parents, Variables, Methods. Where: <br />
                    Parents is the list of classes you’re extending. Classes may only extend other classes; <br />
                    Variables is the number of variable slots that instances will have. For example, a class Point2d(int x, int y) ( … ) has 2 instance variables;<br />
                    Methods is a table of “name → function” that describes which services each instance of the class will support; <br />
                    Instances (or Objects) in a class-based model are represented with the tuple Class, Values. Where: <br />
                    Class is a pointer to the class triple that defines how many variables this instance supports, and what methods you can call on it;<br />
                    Values is a list of the values for each variable the instance has. <br />

                </p>
            </div>
            <div className='mb-7 border border-primary p-4'>
                <h1 className="text-xl mb-3">Q3. What is a unit test? Why should we write unit tests?</h1>
                <p className='text-lg'>Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff.  The main objective of unit testing is to isolate written code to test and determine if it works as intended.Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages. Unit testing is a component of test-driven development (TDD), a pragmatic methodology that takes a meticulous approach to building a product by means of continual testing and revision. This testing method is also the first level of software testing, which is performed before other testing methods such as integration testing. Unit tests are typically isolated to ensure a unit does not rely on any external code or functions. Testing can be done manually but is often automated.</p> <br />
                <p className='text-lg'>To justify any effort in business, there must be a positive impact on the bottom line. Here are a few benefits to writing unit tests: <br />
                    Unit tests save time and money. Usually, we tend to test the happy path more than the unhappy path. If you release such an app without thorough testing, you would have to keep fixing issues raised by your potential users. The time to fix these issues could’ve been used to build new features or optimize the existing system. Bear in mind that fixing bugs without running tests could also introduce new bugs into the system. <br />
                    Well-written unit tests act as documentation for your code. Any developer can quickly look at your tests and know the purpose of your functions. <br />
                    It simplifies the debugging process.  <br />
                    Unit testing is an integral part of extreme programming. Extreme programming is basically a “test-everything-that-can-possibly-break” programming strategy. <br />
                    Unit tests make code reuse easier. If you want to reuse existing code in a new project, you can simply migrate both the code and tests to your new project, then run your tests to make sure you have the desired results. <br />
                    Unit testing improves code coverage. A debatable topic is to have 100% code coverage across your application. <br />
                    In the testing pyramid, unit tests are faster than integration and end-to-end. They are more assertive and return quick feedback.
                </p>
            </div>
            <div className='mb-7 border border-primary p-4'>
                <h2 className='text-xl mb-3'>Q4. React vs. Angular vs. Vue?</h2>
                <div className='text-lg'>
                    <p>
                        <span className='font-semibold'>Architecture</span> <br />
                        Speaking of architecture, Angular.js is a full-fledged MVC framework that provides you with all the possibilities for out-of-the-box programming: <br />
                        * Templates based on HTML;<br />
                        * Dependency injection; <br />
                        * Ajax requests; <br />
                        * Routing; <br />
                        * Encapsulation of CSS components; <br />
                        * Components testing utilities;<br />
                        * Opportunities to create forms, etc.<br />
                        React.js, on the other hand, is a library that just offers the view, leaving the developer to decide how to construct the Model and Controller. The following features are provided: <br />
                        *As an add-on to JavaScript, the JSX language, which is similar to XML, is used instead of templates;
                        * No introduction of dependencies;
                        * Ajax requests;
                    </p> <br />
                    <p>
                        <span className='font-semibold'>Data Binding</span> <br />
                        Angular.js uses the two-way binding. The state of the model is changed first, and then the modification of the interface element is reflected. The interface element changes as the model’s state changes, which is why two-way data binding is used. <br />
                        React.js has one-way binding. First, the state of the model is updated, and then it reflects the change of the interface element. If you change the interface element, the state of the model stays the same. <br />
                        As on Angular, the data binding on Vue.js is two-way. Vue.js synchronizes the entire model with the DOM mechanically. This implies that all Vue.js templates are fundamentally legal, parsable HTML with a few extra features. Remember this because Vue templates are fundamentally different from string-based templates.
                    </p> <br />
                    <p>
                        <span className='font-semibold'>Mobile solutions</span> <br />
                        When it comes to Angular, this is the Ionic framework, which makes use of Angular’s Cordova container. You download the app, which is a web application running within a web browser. <br />
                        React.js doesn’t have a similar framework. React Native is a platform for creating actual native mobile applications. <br />
                        React.js doesn’t have a similar framework. React Native is a platform for creating actual native mobile applications.
                    </p><br />
                    <p>
                        <span className='font-semibold'>Integration</span> <br />
                        Angular provides a basic framework for building web applications and does not require any additional libraries. It is relatively rigid and inflexible as a complete framework. <br />
                        React.js is usually not enough to build a web app. In most instances, using extra libraries is advised. As a result, it’s more adaptable and simple to integrate into current mobile apps. <br />
                        Vue.js allows distinct features of an app to be implemented without altering the architecture. When it comes to integrating with other libraries, Vue is a perfect solution. Vue.js may be used to create both single-page apps and more complex online interfaces for apps.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;