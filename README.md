# topseed

Topseed aims to be a showcase of best practices and approaches for designers, digital creatives and front end developers
who want to build stunning mobile-first web apps with some of the best technologies available now.

What technologies make our cut? Those that let us be the most
productive and creative. And that we know to be maintainable. And that we expect 
to be future-safe.

We welcome scrutiny and feedback from anyone who tries to follow our approaches. 
We also welcome code contributions from seasoned designers and developers.

## Some best practices:
- Static site based (ex: WinterSmith.io) and serverless.
- DOM centric to be more friendly with team that includes interactive designers that code
- Use page transitions for a Single Page Application (SPA) feel that works with SEO
- Can be static (serverless), deployed to CDN edge cache to scale (fetch() microservices)
- Accelerated Mobile Pages (AMP)
- Native Mobile Apps (Phonegap/Cordova) 
- Server side data-binding and in-browser data binding
- Use component libraries
- Use Material Design, SASS, and BEM Standard
- Use Pug to improve reuse and reduce maintenance costs.

## Getting started with a 'hello world':

Download and unzip this project.

Alternative 1: Run (static):
- Open your Google Chrome web browser and install the "Web Server for Chrome" app from <https://chrome.google.com/webstore/search/Web%20Server?_category=apps >
- Launch the app, click the Choose Folder button and select the /helloworld-webroot folder under /topseed/web-app/helloworld-webroot. Also ensure Options has "Automatically show index.html" checked. 
- Ensure the Web Server is STARTED, then navigate to the proposed URL (eg. <http://127.0.0.1:8887>). 

Alternative 2: Run in node.js:
- install node.js with NPM from <http://nodejs.org>. A recent version is v7.6. You can check with $ node -v
- Open a command prompt in the project root (topseed) and execute the following commands:  
$ cd web-app  
$ npm install (Note: this may take a moment to respond)  
$ node index    
- Navigate to <http://localhost:8081> (or any other port proposed by the console). 

Explore:

Click menu "Two" and notice that the header (menu bar) is not reloaded - we have an "Application" look and feel, like a single-page application (SPA). Also click the ☰ menu to see the sidebar menu slide out. On a small screen it will overlap. Page "Two" has an AMP version. In production, we would use subdomains www. or m. to differentiate versions.

We recommend using and SASS for CSS and Pug/Jade. Watch a great Pug intro video [here](<http://youtu.be/wzAWI9h3q18>).

Download, install and run Prepros (Unlimited Trial) from <https://prepros.io/downloads>. Use the bottom left "+" button to add the /helloworld-webroot folder under /topseed/web-app/helloworld-webroot as a new project. In Project/Settings/Compiler Settings/Markdown, uncheck "Wrap with Html". 

When you edit /web-app/helloworld-webroot/home/story1.md and save, Prepros will convert the markdown file into html. Refresh the browser and see the change you made.

Check <https://github.com/topseed/topseed-turbo>, a fork of SmoothState.js, one of our favorite libs.
Explore <https://zeit.co>, one way to deploy to the web. You deploy the web-app folder after deleting the node_modules folder.

Some other buzzwords that resonated with us:
- Serverless
- SEO/view as bot
- Sustinable / maintainable
- Rapid prototyping
- Agile
- Digital Craftmanship

For more: <http://github.com/topseed/topseed>

For forum: <http://gitter.im/topseed/Lobby>

