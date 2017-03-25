# topseed

Topseed aims to be a showcase of best practices and approaches for designers and front end developers
who want to build stunning mobile-first web apps with some of the best technologies available now.

What technologies make our cut? Those that let us be the most
productive and creative. And that we know to be maintainable. And that we expect 
to be future-safe.

We welcome scrutiny and feedback from anyone who tries to follow our approaches. 
We also welcome code contributions from seasoned designers and developers.

## Some best practices demonstrated:
- DOM centric to be more friendly with team that includes interactive designers that code
- Use page transitions for a Single Page Application (SPA) feel that works with SEO
- Can be static (serverless), deployed to CDN edge cache to scale (fetch() microservices)
- Accelerated Mobile Pages (AMP) that can boost SEO, in same or separate subdomain
- Native Mobile Apps (Phonegap/Cordova) 
- Server side data-binding and in-browser data binding
- Use component libraries (such as Riot.js, Polymer, HTML 5.1 Standard Web Components)
- Use Material Design, SASS, and BEM Standard
- Use Pug to improve reuse and reduce maintenance costs.

## Getting started with a 'hello world':

Download and unzip this project.

Alternative 1: Run (static):
- Open your Google Chrome web browser and install the "Web Server for Chrome" app from <https://chrome.google.com/webstore/search/Web%20Server?_category=apps >
- Launch the app, click the Choose Folder button and select the /helloworld-webroot folder under /topseed/web-app/helloworld-webroot. Also ensure Options has "Automatically show index.html" checked. 
- Ensure the Web Server is STARTED, then navigate to the proposed URL (eg. <http://127.0.0.1:8887>). 

Alternative 2: Run in Node.js:
- install node.js with NPM from <http://nodejs.org>. A recent version is v7.6. You can check with $ node -v
- Open a command prompt in the project root (topseed) and execute the following commands:  
$ cd web-app  
$ npm install (Note: this may take a moment to respond)  
$ node index    
- Navigate to <http://localhost:8081> (or any other port proposed by the console). 

Explore:

Click menu "Two" and notice that the header (menu bar) is not reloaded - we have an "Application" look and feel, like a single-page application (SPA). Also click the "burger" menu to see the sidebar menu slide out. On a small screen it will overlap. Page "Two" has an AMP version. In production, we would use subdomains www. or m. to differentiate versions.

You can use any IDE for edits. We like  [VS Code](<https://code.visualstudio.com/download>). We recommend using and SASS for CSS and Pug/Jade. Watch a great Pug intro video [here](<http://youtu.be/wzAWI9h3q18>).

Download, install and run Prepros (Unlimited Trial) from <https://prepros.io/downloads>. Use the bottom left "+" button to add the /helloworld-webroot folder under /topseed/web-app/helloworld-webroot as a new project. In Project/Settings/Compiler Settings/Markdown, uncheck "Wrap with Html". 

When you edit /web-app/helloworld-webroot/home/story1.md and save, Prepros will convert the markdown file into html. Refresh the browser and see the change you made.

Explore <https://zeit.co>, our preferred way to deploy to the web. You deploy the web-app folder after deleting the node_modules folder.

For more: <http://github.com/topseed/topseed-demos>

For forum: <http://gitter.im/topseed-demos/Lobby>

