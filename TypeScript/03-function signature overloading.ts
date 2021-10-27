type paidAmount = {
    amountPaid: number
};
type reFundAmount = {
    refundAmount: number
}

// Function Signature overloading
function placeOrReturnOrder(type:'placeOrder',amount:paidAmount): void;
function placeOrReturnOrder(type:'Return',amount:reFundAmount): void;

function placeOrReturnOrder(type: 'placeOrder' | 'Return', amount: paidAmount | reFundAmount): void{
    console.log(type,amount);
}

placeOrReturnOrder('placeOrder',{amountPaid:2000})
placeOrReturnOrder('Return',{refundAmount:2000})
// Ideally Return type should be allowed to pass refundAmount and not amountPaid
// placeOrReturnOrder('Return',{amountPaid:2000}) // should not be allowed