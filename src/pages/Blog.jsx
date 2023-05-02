import React from 'react';
import { useTitle } from '../custom-Hooks/useTitle';

const Blog = () => {
    useTitle('Blog')
    return (

        <div>
            <div className='h-20 bg-pink-600'></div>
            <div className='pt-16'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-10/12 m-full p-6 mx-auto divide-y rounded-md divide-gray-700 bg-gray-800 text-white shadow-lg border-2'>
                <div className='   my-5 flex flex-col '>
                <h1 className='  font-bold uppercase mb-5 '> Difference between SQL and NoSQL</h1>
                <p>RELATIONAL DATABASE MANAGEMENT SYSTEM -RDBMS.Non-relational or distributed database system.
These databases have fixed or static or predefined schema.They have dynamic schema
These databases are not suited for hierarchical data storage..These databases are best suited for hierarchical data storage.
These databases are best suited for complex queries.These databases are not so good for complex queries
Vertically Scalable.Horizontally scalable
Follows ACID property.Follows CAP </p>
                </div>
                <div>
                    <img src="https://img.freepik.com/free-photo/programming-background-collage_23-2149901769.jpg?w=740&t=st=1682954086~exp=1682954686~hmac=fdb7c3efc5399ecd64db0e58c712e569b482bbe3dfc67d6b3bd57765a273f61c" alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-10/12 m-full p-6 mx-auto divide-y rounded-md divide-gray-700 bg-gray-800 text-white shadow-lg border-2 mt-10' >
                <div className='   my-5 flex flex-col '>
                <h1 className='  font-bold uppercase mb-5'>What is JWT, and how does it work?</h1>
                <p>What is JWT (JSON Web Token)? JSON Web Token  is an open standard  for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP).</p>
                </div>
                <div>
                    <img src="https://img.freepik.com/free-photo/programming-background-collage_23-2149901768.jpg?size=626&ext=jpg&uid=R68670765&ga=GA1.2.31902201.1666701009&semt=robertav1_2_sidr" alt="" />
                </div>
            </div>
            <div  className='grid grid-cols-1 md:grid-cols-2 gap-4 w-10/12 m-full p-6 mx-auto divide-y rounded-md divide-gray-700 bg-gray-800 text-white shadow-lg border-2 mt-10'>
                <div className='   my-5 flex flex-col '>
                <h1 className='  font-bold uppercase mb-5'>What is the difference between javascript and NodeJS?</h1>
                <p> JavaScript is a lightweight, cross-platform, interpreted scripting programming language that is primarily used for client-side scripting. It's built into both Java and HTML. On the other hand, Node.js is a server-side scripting language based on the Google Chrome V8 engine. As a result, it's used to build network-centric applications. It is a distributed system that is used for data-intensive real-time applications.JavaScript is a simple programming language that could be run in any browser that supports the JavaScript Engine. On the other hand, Node.js is a running environment or interpreter for the JavaScript programming language. It needs libraries that may be easily accessed from JavaScript programming to make it more useful.</p>
                </div>
                <div>
                    <img src="https://img.freepik.com/free-photo/application-programming-interface-hologram_23-2149092254.jpg?size=626&ext=jpg&uid=R68670765&ga=GA1.2.31902201.1666701009&semt=robertav1_2_sidr" alt="" />
                </div>
            </div>
            <div  className='grid grid-cols-1 md:grid-cols-2 gap-4 w-10/12 m-full p-6 mx-auto divide-y rounded-md divide-gray-700 bg-gray-800 text-white shadow-lg border-2 mt-10'>
                <div className='   my-5 flex flex-col '>
                <h1 className='  font-bold uppercase mb-5'>How does NodeJS handle multiple requests at the same time?</h1>
                <p> Node.js uses the “Single Threaded Event Loop” architecture to handle multiple clients at the same time.In a multi-threaded request-response model, multiple clients send a request, and the server processes each one before sending the response back. However, multiple threads are used to process concurrent calls. These threads are defined in a thread pool, and each time a request comes in, an individual thread is assigned to handle it. NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
                </div>
                <div>
                    <img src="https://img.freepik.com/free-photo/colorful-website-hosting-concept_23-2149525687.jpg?size=626&ext=jpg&uid=R68670765&ga=GA1.2.31902201.1666701009&semt=robertav1_2_sidr" alt="" />
                </div>
            </div>
        </div>
        </div>
        
        
    );
};

export default Blog;