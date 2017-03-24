# Topseed

Topseed aims to be a showcase of best practices and approaches for designers and front end developers
who want to build stunning mobile-first web apps with some of the best technologies
available now. Some may call it a stack. Some may call it an architecture. 

Topseed may provide some answers to those 
who look for great designs.

What technologies make our cut? Those that let us be the most
productive and creative. And that we know to be maintainable. And that we expect 
to be future-safe.

Architecture is like a kindergarden: we put the shoes here, the jackets over there,
and now we know where to find things. We propose approaches that make it easy
to design and develop cutting edge web apps.

We welcome scrutiny and feedback from anyone who tries to follow our approaches. 
We also welcome code contributions from seasoned designers and developers

## Some best practices demonstrated:
- Single Page Application (SPA)
- Designer friendly
- SPA with SEO
- SPA and Accelerated Mobile pages (AMP)
- Server side data-binding and in-browser data binding
- Loosely coupled to architectures
- Web Components
- Mostly static (easy to maintain/develop and scale)


## Getting started with a 'hello world':

To run:
- install node.js with NPM from <http://nodejs.org>.
- A recent version is v7.6. You can check with $ node -v
- Download and unzip this project
- Open a command prompt in the project root and execute the following commands:  
$ cd web-app  
$ npm install (Note: this may take a moment to respond)  
$ node index    

Now open your favorite browser on localhost:8081 (or any other port proposed by the console). Click menu "Two" and notice that the header (menu bar) is not reloaded - we have an "Application" look and feel, like a single-page application (SPA).
Page "Two" is mobile/AMP by default. In production, we would use subdomains www. or m. to differentiate versions.

To edit, you can use any IDE, we like VS Code. Also we recommend that you use Sass for CSS with Pug (<http://youtu.be/wzAWI9h3q18>). Try Prepros.io on the project. When you edit /web-app/helloworld-webroot/home/story1.md and save, it converts the markdown file into html. Refresh the browser and see the change you made. That is for /web-app/helloworld-webroot/home/ and for /two/ It works as mobile (no client side .js) and SPA.

Explore https://zeit.co, our preferred way to deploy to the web. You deploy the web-app folder after deleting the node_modules folder.

For more: http://github.com/Topseed/Topseed-demos

For forum: http://gitter.im/Topseed-demos/Lobby

