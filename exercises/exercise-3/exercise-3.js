let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

let getTabNum = (itemName) => itemName+"\t".repeat(5 - Math.floor(itemName.length / 4));

let receipt = "QTY\t\tITEM\t\t\t\tTOTAL\n";
let totalPrice = 0;
order.forEach(({itemName, quantity, unitPrice}) => {
  receipt += `${quantity}\t\t${getTabNum(itemName)}${(unitPrice*quantity).toFixed(2)}\n`;
  totalPrice += unitPrice*quantity;
});

receipt += `\nTotal: ${totalPrice.toFixed(2)}`;

console.log(receipt);