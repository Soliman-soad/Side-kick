import React from 'react';

const Blog = () => {
    return (
        <div className='p-5  h-screen  '>
            <div className='   my-5'>
                <h1 className='  font-bold uppercase'> Difference between SQL and NoSQL</h1>
                <p>RELATIONAL DATABASE MANAGEMENT SYSTEM -RDBMS.Non-relational or distributed database system.
These databases have fixed or static or predefined schema.They have dynamic schema
These databases are not suited for hierarchical data storage..These databases are best suited for hierarchical data storage.
These databases are best suited for complex queries.These databases are not so good for complex queries
Vertically Scalable.Horizontally scalable
Follows ACID property.Follows CAP </p>
            </div>
            <div className='   my-5'>
                <h1 className='  font-bold uppercase'>What is JWT, and how does it work?</h1>
                <p>What is JWT (JSON Web Token)? JSON Web Token  is an open standard  for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP).</p>
            </div>
            <div className='   my-5'>
                <h1 className='  font-bold uppercase'>What is the difference between javascript and NodeJS?</h1>
                <p> JavaScript is a lightweight, cross-platform, interpreted scripting programming language that is primarily used for client-side scripting. It's built into both Java and HTML. On the other hand, Node.js is a server-side scripting language based on the Google Chrome V8 engine. As a result, it's used to build network-centric applications. It is a distributed system that is used for data-intensive real-time applications.JavaScript is a simple programming language that could be run in any browser that supports the JavaScript Engine. On the other hand, Node.js is a running environment or interpreter for the JavaScript programming language. It needs libraries that may be easily accessed from JavaScript programming to make it more useful.</p>
            </div>
            <div className='   my-5'>
                <h1 className='  font-bold uppercase'>How does NodeJS handle multiple requests at the same time?</h1>
                <p> Node.js uses the “Single Threaded Event Loop” architecture to handle multiple clients at the same time.In a multi-threaded request-response model, multiple clients send a request, and the server processes each one before sending the response back. However, multiple threads are used to process concurrent calls. These threads are defined in a thread pool, and each time a request comes in, an individual thread is assigned to handle it. NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
            </div>
        </div>
        
        
    );
};

export default Blog;