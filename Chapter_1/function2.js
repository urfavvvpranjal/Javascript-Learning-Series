function discountcal(discount){
    return function(price){
        console.log(price - price * (discount/100));
    }
}

let ten = discountcal(10);
let twenty = discountcal(20);

ten(1000);
twenty(2000);