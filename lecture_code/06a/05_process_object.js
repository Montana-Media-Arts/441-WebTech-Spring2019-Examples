/*
One important object that is available to us globally is the process object. It can be accessed from anywhere, and it contains functionality that allows us to interact with information about the current process instance. We can use the process object to get environment information, read environment variables, communicate with the terminal, or parent processes, through standard input and standard output. We can even exit the current process. This object essentially gives us a way to work with the current process instance. One of the the things that we can do with the process object is to collect all the information from the terminal, or command prompt, when the application starts.

One function available from the process object is .argv, which stands for argument variables and returns information from the terminal that is placed after the node call and file name. This information will be returned as an array of string objects. The first position will be an instance of node, and the second will be the path for the current file. The 3rd item on will be data passed in the terminal.
NOTE: multi word inputs intended as a single piece of data should be encapsilated in double-quotations.

i.e. $ node 05_process der "something else"

should return something like:
[ '/usr/local/bin/node',
  '/Users/musick/um_git/441-WebTech/in_class/06a/05_process.js',
  'der',
  'something else' ]


 */

console.log(process.argv);
