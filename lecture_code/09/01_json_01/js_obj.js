let obj = {
    "someName" : "someValue",
    "firstName" : "Michael",
    "aPerson" : {
        "firstName" : "Mr.",
        "lastName" : "Peanutbutter"
    },
    "anArray" : [
        "zero",
        "one",
        "two"
    ]
};

// retrieve the value associated with "someName"
console.log( obj.someName );

// retrieve the lastName from the nested object stored in "aPerson"
console.log( obj.aPerson.lastName );

// retrieve the last element in the array in the object
console.log( obj.anArray[2] );
