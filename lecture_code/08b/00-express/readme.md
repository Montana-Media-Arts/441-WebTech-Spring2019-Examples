
# 1

One of the most common frameworks for node is Express

- Search on https://www.npmjs.com for Express

Express eases the development of servers, and offers us greater flexibility in creating servers that can handle more than static websites.

Express is also the 'E' in the 'MEAN' stack, which is a common set of tools for web development.


# 2

One of the first things we will need to do, is create a package.json file. This file is a manifest where node can store information about the packages for our project, as well as information about the project itself.

To do this we can navigate to the location of our project in terminal and type
`npm init`

name: lets name our project
entry point: app.js
author: you
licsence: MIT



# 3

Notice we now have a package.json file

Next, we need to install our packages.

To do so:
`$ npm install express --save`

NOTE: The --save flag adds a reference to the package in our manifest, which means we can share our package or work more easily with other developers.


Lets also install cors (search in npm)

$ npm install cors --save

$ npm install body-parser --save

Now, notice, these are all referenced in the package.json.
These are also all now in the node_modules directory.



# 4

Now as a test, lets delete the node_modules folder. This is how we would pass the package around.

The package.json file has info about the packages another developer needs to get in order to work with or use our package/project.

To install these, run `npm install`
This will look at the package.json file, and load everything at once for us.


# 5

There are instances when we may also need to delete a package.
To do this, you would call

$ npm remove package-name --save

We call the save flag again to remove the package from the package.json.

npm install underscore --save
npm remove underscore --save
