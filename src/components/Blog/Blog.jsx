import React from 'react';

const Blog = () => {
   return (
     <section className="px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2">
       <div >
         <h2 className="text-center font-mono text-4xl font-semibold">
           My Blogs
         </h2>
         <div>
           <p className="mt-10 mb-3 font-semibold text-2xl text-gray-900">
             Difference between Authorization and Authentication.
           </p>
           <p className="text-gray-800 grid">
             <span className="font-mono font-semibold text-xl">
               Authentication:
             </span>
             Authentication is the process of verifying your identity by
             confirming your credentials, such as your User Name/User ID and
             password. Simply said, authentication is the process of confirming
             who you are, whereas authorization is the act of allowing cloudHQ
             permission to access your cloud accounts on your behalf (copy
             files, restore emails, etc.). For this, we employ the OpenID
             Connect protocol. By clicking the My Account option in the top
             right corner, you may manage your authentication.
           </p>
           <p className="text-gray-800 grid">
             <span className="font-mono font-semibold text-xl">
               Authorization:
             </span>
             Authorization, on the other hand, happens once cloudHQ has
             successfully confirmed your identity. Then you can grant cloudHQ
             access to your resources, such as files and emails. The OAuth2
             protocol is used to handle this. Simply put, authorisation allows
             our system to access your data stored in the cloud. As a result,
             you must grant admin@ access to Box and Google Drive. Under the
             Cloud Accounts page, you can authorize users.
           </p>
           <p className="mt-10 mb-3 text-2xl font-semibold text-gray-900">
             Why am I using firebase? What other options do I have to implement
             authentication?
           </p>
           <p className="text-gray-700">
             Indeed, using Firebase as a backend for dynamic apps is a less
             technical and time-consuming alternative to building full-fledged
             backend code. You might also want to use this tool if you intend to
             host and administer your app in the cloud in the future. Because
             Firebase is serverless, it eliminates the need to bother about
             cloud server configuration details. Connecting and using built-in
             third-party authentication providers, such as Google, Facebook, and
             Twitter, is a breeze with Firebase. All of them can save you a big
             amount of money on development because you won't have to start from
             scratch. Although there are pay-as-you-go options, if your app is
             still in its early stages, you can start with a free plan and only
             use the most basic functions. If you need to quickly deploy a
             working product to the cloud, Firebase is a viable option. Plus, as
             previously noted, if you require a backend but don't have a
             background in backend programming, you might want to give it a
             shot. There are some good alternatives of firebase too. They are:
             <ol className="list-disc ml-5">
               <li>Back4App</li>
               <li>Parse</li>
               <li>AWS Amplify</li>
               <li>BackendLess</li>
               <li>Kuzzle</li>
               <li>RxDB</li>
               <li>SashiDo</li>
             </ol>
           </p>
           <p className="mt-10 mb-3 text-2xl font-semibold text-gray-900">
             What other services does firebase provide other than
             authentication?
           </p>
           <p className="text-gray-700">
             Firebase was created by Firebase Inc. and eventually purchased by
             Google. It offers a variety of services to assist you in developing
             high-quality mobile and web applications to help you build your
             business. It works with clients on the Web, iOS, Android, and OS X.
             Backend programming, authentication, API development, database
             (real-time cloud-hosted NoSQL database and cloud firestore), file
             storage, and other issues are all taken care of by Firebase. All of
             the services provided by Firebase are extremely efficient and
             quick. Firebase is a complete package that may help you construct
             mobile or web applications faster and more efficiently with fewer
             resources. Let's take a look at some of the services and how
             they're used. There are many services which Firebase provides, Most
             useful of them are:
             <ol className="list-disc ml-5">
               <li>Cloud Firestore</li>
               <li>Cloud Functions</li>
               <li>Hosting</li>
               <li>Cloud Storage</li>
               <li>Google Analytics</li>
               <li>Cloud Messaging</li>
               <li>Dynamic Links</li>
               <li>Remote Config</li>
             </ol>
           </p>
         </div>
       </div>
     </section>
   );
};

export default Blog;