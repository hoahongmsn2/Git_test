const ccxt = require('ccxt');
const moment = require('moment');
const delay = require('delay');

async function mua_dinh_ban_day() {

//    const lbank = new ccxt.lbank2({
//        apiKey: 'c09dc646-378b-46f3-90fa-905af11423ff',
//        secret: 'MIICdwIBADANBgkqhkiG9w0BAQEFAASCAmEwggJdAgEAAoGBAJF7DSM9h8xbUVTCssBY7IO6J7FJf1/3Pl+WZRXpih0JhutaZ5oAIlERb7KZMEkFS8Jj4qc0aixJXPGCrHkctkeM15gSLJTQmpq7wsHfTen5dm7dFTEKuAOE/A89CzW9kYWZMB9CYZ1N5bt1l1TjTD76vWQ/M56ISBxJQ4HkB3z9AgMBAAECgYBsE51D898huyllraq76JP0nGQGehKNiZEl1AXOzIuVXNGFoMjciIL19N0lMlbDuJJ6nFfyXacOtYW9yZU1+FWVGl1lQhQ4jmYUc9AZs0yhCo3sVe/qFJSiL4noQvYYt6BPfrq/7SWyCxESwTPru2sx6UeOEM6/oUACil0gKhwSwQJBAN7lQtKqJH0500Jq+fOmIk5o0e5tUyzUtDG6gPlmscRjnB4+xmby+LzlyJI1QfZmxvvjgploCtBGhoGrHh0X0U0CQQCnFmO9+sLif+MC2A3l7tCVvLPKMz4Ph+ui7QyISks6yhua8+DHbASfSQ7avuvgik7GYy20LVKHddOUxb+Xp4JxAkB0bpnbZZkt+NjMJwluJuhgwQx4WY9LKcj++QeKQAS4K7hPbEdDW8RnGDkPdtaAGevzhEKiU+DiLxTwAyz10Y05AkEAj+o4/ul98pk0br6pOeL4xgBC22ZHjhkEXNDQepODOJ/cJxroANyJHqlOohrQEBcQws+qDgb7jrFuDDZHT9h4AQJBAMhjGsxK2bzfCVFLfbYc5+yQfTbji0kQs1TsvgssClv1Hj+zinR2xxm35NTfxhs6Bsp2onYS89pmPXBJT+HNXdI=',
//        uid: 'tumx'
//    });

    const bitmart = new ccxt.bitmart({
        apiKey: 'f96dc726aa2b076a621d554d8d41730d73da5bff',
        secret: '3e29de53f0ce6de3b2ef42636e3b5b2997c0e229acadb34906533adfabd5be2d',
        uid: 'hihihaha96'
    });

    // lay cac lenh dang duoc dat
//    const price_lbank = await lbank.fetchOrderBook('cfxt_usdt', 20);
    const price_bitmart = await bitmart.fetchOrderBook('CFXT_USDT', 20);

    // lay so du
//    const balance_lbank = await lbank.fetchBalance();
    const balance_bitmart = await bitmart.fetchBalance();

    // lay time hien tai
    var timestamp = new Date().getTime();
    dt = new Date(timestamp).toLocaleString();
    console.log("                                                    ");
    console.log(dt);
    console.log("****************************************************");

    // lay so luong cfxt va usdt tren lbank
//    balance_CFXT_lbank = balance_lbank.CFXT.free;
//    balance_USDT_lbank = balance_lbank.USDT.free;
//    console.log("(LBANK)CFXT:" + balance_CFXT_lbank);
//    console.log("(LBANK)USDT:" + balance_USDT_lbank);
    console.log("----------------------------------------------------");

    // lay so luong cfxt va usdt tren bitmart
    balance_CFXT_bitmart= balance_bitmart.CFXT.free;
    balance_USDT_bitmart = balance_bitmart.USDT.free;
    console.log("(BITMART)CFXT:" + balance_CFXT_bitmart);
    console.log("(BITMART)USDT:" + balance_USDT_bitmart);

    console.log("****************************************************");
//    const min_sell_lbank_price = price_lbank.asks[0][0];
//    const max_buy_lbank_price = price_lbank.bids[0][0];
//    const min_sell_lbank_volume = price_lbank.asks[0][1];
//    const max_buy_lbank_volume = price_lbank.bids[0][1];

    const min_sell_bitmart_price = price_bitmart.asks[0][0];
    const max_buy_bitmart_price = price_bitmart.bids[0][0];
    const min_sell_bitmart_volume = price_bitmart.asks[0][1];
    const max_buy_bitmart_volume = price_bitmart.bids[0][1];

    var price_bitmart_cfxt = await bitmart.fetchTicker('CFXT_USDT');
//    var price_lbank_cfxt = await lbank.fetchTicker('cfxt_usdt');

    var current_bitmart_price = price_bitmart_cfxt.last;
//    var current_lbank_price   = price_lbank_cfxt.last;

//    console.log(current_bitmart_price);
//    console.log(current_lbank_price);

    var create_order_bitmart;
//    var create_order_lbank;

    // trang thai ban hoac mua tren 2 san, 0: bitmart_Sell va lbank_Buy, 1: bitmart_Buy va lbank_Sell
    var Status = 2;


//    create_order_lbank = await lbank.createOrder('cfxt_usdt', 'limit', 'sell', 10, current_lbank_price);

//    if(current_lbank_price < 0.00102)
//    {
//        create_order_lbank = await lbank.createOrder('cfxt_usdt', 'limit', 'buy', 50000, current_lbank_price);
//
//    }

    if(current_bitmart_price >= 0.00097)
    {
        create_order_bitmart = await bitmart.createOrder('CFXT_USDT', 'limit', 'sell', 50000, current_bitmart_price);

    }

//    if(current_bitmart_price > current_lbank_price)
//    {
//        if(current_bitmart_price >= current_lbank_price*1.01)
//        {
//            create_order_bitmart = await bitmart.createOrder('CFXT_USDT', 'limit', 'sell', 50000, current_bitmart_price);
//            create_order_lbank = await lbank.createOrder('cfxt_usdt', 'limit', 'buy', 50000, current_lbank_price);
//            Status = 0;
//        }
//    } else {
//        if(current_lbank_price >= current_bitmart_price*1.01)
//        {
//            create_order_bitmart = await bitmart.createOrder('CFXT_USDT', 'limit', 'buy', 50000, current_bitmart_price+0.000001);
//            create_order_lbank = await lbank.createOrder('cfxt_usdt', 'limit', 'sell', 50000, current_lbank_price);
//            Status = 1;
//        }
//    }

    await delay(3000);
//    if(Status != 2)
//    {
//        var my_order_lbank = await lbank.fetchOpenOrders('cfxt_usdt', undefined, undefined);
        var my_order_bitmart = await bitmart.fetchOpenOrders('CFXT_USDT', undefined, undefined);
//    
//    //    console.log(my_order_lbank);
//    //    console.log(my_order_bitmart);
//    
    try {
        //        // id cua lenh dat
//        var my_order_lbank_id = my_order_lbank[0].id;

//    //    console.log(my_order_lbank_id);
//    
        // id cua lenh dat
        var my_order_bitmart_id = my_order_bitmart[0].id;
    //    console.log(my_order_bitmart_id);\
    } catch {
            
    }
//        
//        var bitmart_Selled = 0;
//        var bitmart_Buyed = 0;
//        var lbank_Selled = 0;
//        var lbank_Buyed = 0;
//    
//        // trang thai ban hoac mua tren 2 san, Status = 0: bitmart_Sell va lbank_Buy, Status = 1: bitmart_Buy va lbank_Sell
//        if(Status == 0)
//        {
//                bitmart_Selled = my_order_bitmart.filled;
//                lbank_Buyed = my_order_lbank.filled;
//            }
//            else (Status == 1)
//            {
//                bitmart_Buyed = my_order_bitmart.filled;
//                lbank_Selled = my_order_lbank.filled;
//            }
//            
//            if(bitmart_Selled != 0 && bitmart_Selled != undefined)
//            {
//                console.log("bitmart_Selled: " + bitmart_Selled);
//            }
//        
//            if(lbank_Buyed != 0 && lbank_Buyed != undefined)
//            {
//                console.log("lbank_Buyed: " + lbank_Buyed);
//            }
//        
//            if(bitmart_Buyed != 0 && bitmart_Buyed != undefined)
//            {
//                console.log("bitmart_Buyed: " + bitmart_Buyed);
//            }
//        
//            if(lbank_Selled != 0 && lbank_Selled != undefined)
//            {
//                console.log("lbank_Selled: " + lbank_Selled);
//            }
            try{
//                var a = await lbank.cancelOrder(my_order_lbank_id, 'cfxt_usdt');
            var b = await bitmart.cancelOrder(my_order_bitmart_id,'CFXT_USDT');
            } catch {
                console.log("loi");
            }
        
//            console.log("a = " + a);
//            console.log("b = " + b);
//    }


//    await bitmart.createOrder('CFXT_USDT', 'limit', 'buy', '50000', '0.00136');

//    if(min_sell_bitmart_price <= 0.00226)
//    {
//        const create_order_bitmart = await bitmart.createOrder('CFXT_USDT', 'limit', 'buy', min_sell_bitmart_volume, min_sell_bitmart_price);
//        console.log("Sell Bitmart: " + min_sell_bitmart_volume + "*" + min_sell_bitmart_price + " = "+ min_sell_bitmart_volume * min_sell_bitmart_price + " USD");
//    }
//
//    const create_order_lbank = await lbank.createOrder('cfxt_usdt', 'limit', 'sell', 1, max_buy_lbank_price);
//    await delay(1000);
//    var pice1 = max_buy_lbank_price + 0.00001;
//    await lbank.createOrder('cfxt_usdt', 'limit', 'sell', 1, pice1);
}

async function main() {
    while(true)
    {
        await mua_dinh_ban_day();
        await delay(1000);
    }
}

main()