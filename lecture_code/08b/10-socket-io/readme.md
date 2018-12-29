# Socket.io


### 1

If you create websockets with native JavaScript in the browser, they'll work in most modern browsers. But the support for them in older browsers isn't quite there yet. Here I'm looking up the websockets spec. on caniuse.com. So, one of the things that we can do, is, we can incorporate a module called Socket.IO. Socket.IO is a module that will help us build websockets, that has its own client and its own server JavaScript. What Socket.IO does, is it fails back to long polling when websockets aren't supported.
So, if websockets aren't supported in a browser, Socket.IO will still most likely work. And, if websockets aren't supported at your hosting company, you can actually build a websocket application that uses entirely long polling, so that you can have a socket application work where websockets are not supported.


### 2

save socket.io
`$ npm install`


### 3
Look at sio-server.js



### 4

- To work on the client, we also need the socket.io-client files.
- Notice these are in the js folder
- You would need to download this file and include it with your public files




### 5

Navigate to main.js
