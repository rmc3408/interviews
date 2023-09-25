/***** TASK 1 *****/

/**
 * @TODO
 * The following class represents a simplified version of one we
 * use frequently in different parts of our codebase. We use it
 * to encapsulate price data so we don't have to pass the raw
 * data around whenever we need it. Instead of saving the total
 * price, we save the small parts of it so that we can refer to
 * that information if we have to (total price = premium + fee).
 */
class Price {

  /**
   * Once you create a Price object, the contrustor will accept
   * 1 object with 2 keys. Save the fee and premiun to object itself.
   **/
  constructor({ fee, premium }) {
    this.fee = fee;
    this.premium = premium;
  }

  /**
   * Function will ADD values of each object or many object as arguments 
   * have express by spread operator. And the function will iterate each
   * appropriate key object from the parameter and SUM all objects values
   * to a final variable which you assign to existing object (this) and 
   * Returns a string with final Amount of Fee and Premium. 
   * @param  {...any} prices 
   * @returns {string} 
   */
  add(...prices) {
    let sumFee = this.fee;
    let sumPremium = this.premium;

    // const sim = prices.reduce((total, cur) => {
    //   return total + cur.fee;
    // }, this.fee);

    for (let p of prices) {
      sumFee += p.fee;
      sumPremium += p.premium;
    }
    //return sim;
    return `Premium ${sumPremium} and Fee is ${sumFee}`;
  }
}

/**
 * @TODO
 * Right now this function doesn't work because the Price class
 * is not implemented. Your task is to update the class so that
 * the following code produces the correct result as held by the
 * `result` constant.
 *
 * Note that the `.add()` function can take any number of
 * arguments, not just 2 as used here.
 */
function task1() {
  const priceA = new Price({
    premium: 100,
    fee: 10,
  });
  const priceB = new Price({
    premium: 120,
    fee: 15,
  });
  const priceC = new Price({
    premium: 80,
    fee: 20,
  });

  const result = priceA.add(priceB, priceC);

  // result should have a premium of 300 and a fee of 45
  return result;
}

console.log(task1());



/***** TASK 2 *****/

/**
 * @TODO
 * Requirements have now changed and we now need to allow prices
 * to be composed of sub prices.
 */
class NestedPrice extends Price {
  /**
   * Once you create a NestedPrice object, the contrustor will accept
   * the ARRAY and interate in each object, getting their values. And
   * Save the fee and premiun to object itself.
   **/
  constructor(prices) {
    let sumFee = 0;
    let sumPremium = 0;

    for (let nonNested of prices) {
      sumFee += Object.values(nonNested)[0] 
      sumPremium += Object.values(nonNested)[1]
      //console.log(nonNested)
    }
    
    /**
     * After calculate each final value inside NestedPrice, call all the parent's constructor
     * method and gets access to the parent's properties and resign the new value with sumFee and sumPremium.
     **/
    super({ sumFee, sumPremium});
    this.fee = sumFee;
    this.premium = sumPremium;
    
  }
}

/**
 * Your task is to implement `NestedClass` so that the
 * following code also produces the correct results without
 * affecting `Price` (i.e.: both classes need to work on their
 * own).
 */
function task2() {
  const priceA = new NestedPrice([
    new Price({ fee: 5, premium: 50 }),
    new Price({ fee: 10, premium: 130 }),
  ]);
  const priceB = new NestedPrice([
    new Price({ fee: 10, premium: 70 }),
    new Price({ fee: 0, premium: 30 }),
    new NestedPrice([
      new Price({ fee: 0, premium: 10 }),
      new Price({ fee: 5, premium: 25 }),
    ]),
  ]);

  const result = priceA.add(priceB);

  // result should have a premium of 315 and a fee of 30
  return result;
}

console.log(task2())
