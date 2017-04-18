// COINS:
// [p]enny
// [n]ickel
// [d]ime
// [q]uarter

var coins = {
  p: 1,
  n: 5,
  d: 10,
  q: 25
};

module.exports = {
  
  getAmount: function(coinType) {

      if (coins.hasOwnProperty(coinType)) {
        return coins[coinType];
      }
      
      throw new Error('Unrecognized coin ' + coinType);
    
    }
  
};


/*
PROBLEM

# Getting Rid of swit-ch Statements  
   
  swit-ch statements can be useful in simple cases, but they are often  
  considered "code smells" when used to branch into clauses of complex  
  logic. They also can be somewhat difficult to maintain compared to  
  alternative value-retriever constructs like dictionaries. All in all, it's  
  best to avoid swit-ch statements if at all possible.  
   
  In this exercise, you should refactor the getAmount() method in  
  changeHandler.js to completely remove the swit-ch method while retaining  
  its functionality. It doesn't matter what alternative you choose, but the  
  method should not use a swit-ch statement in any way.
*/

/*
SOLUTION
Here's the official solution in case you want to compare notes:

─────────────────────────────────────────────────────────────────────────────

    
    // COINS:
    // [p]enny
    // [n]ickel
    // [d]ime
    // [q]uarter
    
    var coins = {
      'p': 1,
      'n': 5,
      'd': 10,
      'q': 25
    };
    
    var coinsByAmount = ['q', 'd', 'n', 'p'];
    
    module.exports = {
      getAmount: function(coinType) {
        if(!coins.hasOwnProperty(coinType)){
          throw new Error('Unrecognized coin ' + coinType);
        }
        return coins[coinType];
      }
    };
*/