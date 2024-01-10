db.pizzaOrders.find({
  quantity: { $gte: 5 },
  credit_card_type: "mastercard",
});
db.pizzaOrders.find({
  $and: [{ quantity: { $gte: 1 } }, { quantity: { $lte: 5 } }],
  size: "small",
});
db.pizzaOrders.find({
  quantity: { $gte: 10 },
  credit_card_type: null,
});
