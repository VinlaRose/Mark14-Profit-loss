var initialPrice = document.querySelector('#initial-price');
var noOfStocks = document.querySelector('#no-of-stocks');
var currentPrice = document.querySelector('#current-price');
var checkBtn = document.querySelector('#check-button');
var showMsg = document.querySelector('#show-message');

checkBtn.addEventListener("click", profitLoss);

function profitLoss(e){
    
    var ip = Number(initialPrice.value);
    var n = Number(noOfStocks.value);
    var cp = Number(currentPrice.value);
    
    var profitamount = (cp-ip)*n;
    var profitPercentage = (((cp-ip)/ip)*100).toFixed(3);
    var lossamount = (ip-cp)*n;
    var lossPercentage = (((ip-cp)/ip)*100).toFixed(3);

    

    if(ip<cp){
        showMsg.innerHTML = `Hey, the profit is ${profitamount} and the profit percent is ${profitPercentage}%`;
    }
    else if(ip>cp){
        showMsg.innerHTML = `Hey, the loss is ${lossamount} and the loss percent is ${lossPercentage}%`;
    }
    else{
        showMsg.innerHTML = 'no profit no loss';
    }
    

}

