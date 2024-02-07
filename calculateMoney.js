function calculateMoney(ticketSale){
    const fixedCost = 500 + (8 * 50);
    const income = 120 * ticketSale;
    let remain;

    if(ticketSale <= 0){
        return 'please insert a valid value'
    }else{
        remain = income - fixedCost;
    }

    return remain;
}

const alpha = calculateMoney(0);

console.log(alpha);