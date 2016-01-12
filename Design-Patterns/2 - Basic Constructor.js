var testModule = (function() {
  var private_counter, privateFunction;
  
  private_counter = 0;
  
  privateFunction = function () {
    console.log('foo');
  };
  
  return {
    publicVar: 'foo',
    publicFunction: function () {
      console.log('This is a public function');
    },
    incrementCounter: function() {
      private_counter++;
    },
    getCounter: function () {
      return private_counter;
    },
    resetCounter: function () {
      private_counter = 0;
    }
  };
})();


//Increment the counter
testModule.incrementCounter();
testModule.incrementCounter();
testModule.incrementCounter();
testModule.incrementCounter();

// Output the counter
console.log(testModule.getCounter());

// Reset Counter
testModule.resetCounter();

console.log(testModule.getCounter());

console.log(testModule.publicVar);