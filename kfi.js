var ccxt = require('ccxt');
var moment = require('moment');
var delay = require('delay');

async function mua_dinh_ban_day() {

// monow1234@gmail.com
    var lbank = new ccxt.lbank2({
        apiKey: 'ae2aa91f-fe56-4869-b706-38f8ea41cdb3',
        secret: 'MIICdQIBADANBgkqhkiG9w0BAQEFAASCAl8wggJbAgEAAoGBAJYqrtCeG7vbqCmwvVqStnDW93N5tb2QUubqxfR4G773XG9Wn2Growcrz8oqar1LSglA+WTXCsaRxSM+pjCJp9WLvRNfDb86fqXgqqtZZYp3rnwrFno197FFmc40C+LRgraFHW4aY98Tc9XYegc3iNfwgu+CQpu4NR+NMJJqUz9XAgMBAAECgYB4pvKuS1qdJW+Hj6mUDCzpnM5UyYVsOXlib199fMNOPBDYpBCKuQzTxi+9jzcTwFpL9RhsHRtbT+PE3aFJflCJ0vF/Cu32cs9QOZk2aJScvNfklr4dbMg2/r5wmhmiFjvCDwMOP837kowZB6MxymUdnYGBq1+6vNTgWlCD84oygQJBAOrrmuaRFYPhctQLYyTWE/pU7EnpJbJ0nxK2PqgcdQjz62LUMCSjiT0lvyFaMw5cqSykm4ofkSh0K3h2pXK7miMCQQCjpDA5GrilFXHbzaTDovY11xrQwCxmZFOVpzNTkSserfI1eY/HaHUa9FfOPuXof0yLjeY5yHdnTk7JHLmHljc9AkA17fJ4fdQHm4jl3ttayH57mGVKLmjGB/nArO/DXg0MChr+bCHFN3m4/OJcwL05zdHUetFuKwMC23BjTjF7HlArAkBs2KFa2nNHG2SIl9ioaJTsaw/jGnBuCv2t5XE2fLD5zyn0d88zDEAYlb5x6VRzuXjoupIQjU8e3+93xiuCDGDhAkBAMbLFyw1H0uV3MEcEoaZb5ahJJtHrsq0gqOVbesBYxzMHR3M7T3yVONBYPpZn81zMRf+oKktKm00/oX8KU4kl',
        uid: 'haha24'
    });

//    var bitmart = new ccxt.bitmart({
//        apiKey: 'f96dc726aa2b076a621d554d8d41730d73da5bff',
//        secret: '3e29de53f0ce6de3b2ef42636e3b5b2997c0e229acadb34906533adfabd5be2d',
//        uid: 'hihihaha96'
//    });

    // lay time hien tai
//    var timestamp = new Date().getTime();
//    dt = new Date(timestamp).toLocaleString();

    // lay cac lenh dang duoc dat
//    var price_lbank = await lbank.fetchOrderBook('kfi_usdt', 20);
//    var price_bitmart = await bitmart.fetchOrderBook('CFXT_USDT', 20);

    // lay so du
//    var balance_lbank = await lbank.fetchBalance();
//    var balance_bitmart = await bitmart.fetchBalance();

    // lay so luong cfxt va usdt tren lbank
//    balance_CFXT_lbank = balance_lbank.CFXT.free;
//    balance_USDT_lbank = balance_lbank.USDT.free;

    // lay so luong cfxt va usdt tren bitmart
//    var balance_CFXT_bitmart= balance_bitmart.CFXT.free;
//    var balance_USDT_bitmart = balance_bitmart.USDT.free;

//    var min_sell_lbank_price = price_lbank.asks[0][0];
//    var max_buy_lbank_price = price_lbank.bids[0][0];
//    var min_sell_lbank_volume = price_lbank.asks[0][1];
//    var max_buy_lbank_volume = price_lbank.bids[0][1];

//    var min_sell_bitmart_price = price_bitmart.asks[0][0];
//    var max_buy_bitmart_price = price_bitmart.bids[0][0];
//    var min_sell_bitmart_volume = price_bitmart.asks[0][1];
//    var max_buy_bitmart_volume = price_bitmart.bids[0][1];

//    var price_bitmart_cfxt = await bitmart.fetchTicker('CFXT_USDT');

//    create_order_lbank = await lbank.createOrder('cfxt_usdt', 'limit', 'buy', 1, min_sell_lbank_price);
//    create_order_lbank = await lbank.createOrder('cfxt_usdt', 'limit', 'sell', 1, max_buy_lbank_price);

//    var a = Math.floor(Math.random() * 100);
//    if((a%2) == 1) {
//        create_order_lbank = await lbank.createOrder('cfxt_usdt', 'limit', 'buy', 1, min_sell_lbank_price);
////        create_order_lbank = await lbank.createOrder('cfxt_usdt', 'limit', 'sell', 1, max_buy_lbank_price-0.000001);
//    }
//
//    if((a%2) == 0) {
//        create_order_lbank = await lbank.createOrder('cfxt_usdt', 'limit', 'sell', 1, max_buy_lbank_price);
////        create_order_lbank = await lbank.createOrder('cfxt_usdt', 'limit', 'sell', 1, max_buy_lbank_price-0.000001);
//    }

    var create_order_lbank = await lbank.createOrder('cfxt_usdt', 'limit', 'buy', 10, 0.00102);

    await delay(3000);

    var my_order_lbank = await lbank.fetchOpenOrders('cfxt_usdt', undefined, undefined);
    try{
        var my_order_lbank_id = my_order_lbank[0].id;
        var a = await lbank.cancelOrder(my_order_lbank_id, 'cfxt_usdt');
    } catch {
        console.log("Da mua thanh cong");
    }

//    if(balance_CFXT_bitmart <= 3000)
//    {
//        console.log("Het CFXT roi, mua CFXT di!!!");
//    } else {
//        if(max_buy_bitmart_price >= 0.00182 && max_buy_bitmart_volume >= 3000){
//            create_order_bitmart = await bitmart.createOrder('CFXT_USDT', 'limit', 'sell', 30000, price_bitmart_cfxt);
//            console.log("Sell Bitmart(" + dt + "): " + max_buy_bitmart_volume + "*" + max_buy_bitmart_price + " = " + max_buy_bitmart_volume*max_buy_bitmart_price + " USD");
//    //        create_order_lbank = await lbank.createOrder('cfxt_usdt', 'limit', 'buy', 1, min_sell_lbank_price);
//        }
//    }

//    if(balance_USDT_bitmart <= 5)
//    {
//        console.log("Het USDT roi, ban CFXT di!!!"); 
//    } else {
//        if(min_sell_bitmart_price <= 0.0019 && min_sell_bitmart_volume >=3000 && balance_USDT_bitmart >5){
//            create_order_bitmart = await bitmart.createOrder('CFXT_USDT', 'limit', 'buy', min_sell_bitmart_volume, min_sell_bitmart_price);
//            console.log("Buy Bitmart(" + dt + "): " + min_sell_bitmart_volume + "*" + min_sell_bitmart_price + " = "+ min_sell_bitmart_volume * min_sell_bitmart_price + " USD");
//    //        create_order_lbank = await lbank.createOrder('cfxt_usdt', 'limit', 'sell', 1, max_buy_lbank_price);
//        }
//    }
}

async function test(){

    var lbank = new ccxt.lbank2({
        apiKey: '75189cfd-42fb-4329-b4b7-dc3ac69c9155',
        secret: 'MIICdwIBADANBgkqhkiG9w0BAQEFAASCAmEwggJdAgEAAoGBAIhhNuHQQ2Bpt3Jz7XbIdzrxzn1Y0XywkQjNHpqg32vY1CN3mNvLVLg0WuVlA4iWD73yTIxbKawJ29D0HEl6h/9m4//h0+d1nXNNOvlXy3kUe6tPG77dgy4niMuV0R3pesStMsjM7MUdm5gazOlhdgvbMLBqpc9f1Ld2mpkiFb+bAgMBAAECgYBWGYHLmG8hDDz7rgKqLi9P8F8btZoz7UjzVIRQvOWwsahkZ9oCUWFAFhWYo2hSr+JqWfFH3zn02hiD18mP/iKjCHGTwz1WJroWvQOrMvzmML4t59e1Hr0nsd2kpk8QoAKCqnSOxTWSoQrFGZcDnk8at4G4759tOdYfutsC3yUyQQJBAMTyG+FsJOdRB4yJa4F+z0A5nWldqBVN/qv+Gz1IEenoW72NE8r1XPK82H0Lyl+gGSIh+874mqwBBJurIyw4/GECQQCxRfTTdccr03MtRa1NPM92a0H8/zEuOPHWmSuPbLvws/Wiwyttlh5eGtH6Wlxodc89te7zy0Vc/feEFFt/DZ17AkEAkDZMzhs3Rp6h7Xmu3Ar0Ta4iosXuz3LmOiD+5ze/zkzT6I/GX4adgi1gROh+TtlXrhO+ZIbME4lHS4ncXoR34QJBAJWRv7q20eBhXPlio5DacPSqFJggvF8SfsGgpIczp/Kz89lrMHYaxe6CVI4VtYgRdlTL7xvVcuW+BhtzjatKUocCQBCBz7oJBuR89MFAOv+aOv8qHXmtYdf+9CvTI/PPRdzljMshad7F+Apy1PrFwnOzgbkQkcseoeQ91EhgARmJYAU=',
        uid: 'hoa244'
    });

    var bitmart = new ccxt.bitmart({
        apiKey: '80ef2776c1ce9ba1af2327496be3c78cd2fbf7ff',
        secret: '33704665da84919531afc08c27a75d3925e3836f7637910fb967cd89b504c6e5',
        uid: 'HOA244'
    });

    var my_order_lbank = await lbank.fetchOpenOrders('cfxt_usdt', undefined, undefined);
    // id cua lenh dat
    var my_order_lbank_id = my_order_lbank[0].id;
    console.log(my_order_lbank_id);  
    // them kiem tra lenh thanh cong chua
    var order_lbank = await lbank.fetchOrderSupplement(my_order_lbank_id, 'cfxt_usdt');
    console.log(order_lbank.info.status);
}

async function main() {
    while(true)
    {
        await mua_dinh_ban_day();
        await delay(5000);
    }
}

main()