let coins = {"H": 50, "Q": 25, "D": 10, "N": 5, "P": 1};
// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
  let money = currency;
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
  let exchange = {};
  if (money > 10000) {
    return {error: "You are rich, my friend! We don't have so much coins for exchange"};
  }
  for (let key in coins) {
    let coinValue = coins[key];
    if (money >= coinValue) {
      exchange[key] = Math.floor(money/coinValue);
      money = money%coinValue;
    }
  }
    return exchange;
}
