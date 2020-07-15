// jsdrops.com/arrow-functions

this.whoIsThis = 'TOP'; // Identify this scope

// 1) Defining
const fancyObj = {
  whoIsThis: 'FANCY', // Identify this object
  regularF: function () {
    console.log('regularF', this.whoIsThis)
  },
  arrowF: () => {
    console.log('arrowF', this.whoIsThis)
  },
};

// 2) Calling
console.log('TOP-LEVEL', this.whoIsThis); // It's "TOP" here

fancyObj.regularF(); // Output #1 (Fancy)
fancyObj.arrowF();   // Output #2 (Top)

fancyObj.regularF.call({whoIsThis: 'FAKE'}); // Output #3 (Fake)
fancyObj.arrowF.call({whoIsThis: 'FAKE'});   // Output #4 (Top)