const ccxt = require('ccxt');
const moment = require('moment');
const delay = require('delay');

async function mua_dinh_ban_day() {
    const lbank = new ccxt.lbank2({
        apiKey: 'b0ac18f5-5b72-420f-b7ae-7d43fa98aefd',
        secret: 'MIICdwIBADANBgkqhkiG9w0BAQEFAASCAmEwggJdAgEAAoGBAJOsG2Lh3Os1E3ewUL3tUh8tBjH1ye9MVlpBnee42LNY+z/FokQt01U8TWiVFQOlDwrRpBoRkf0qbkg7vf4BqQ50flhJLuyIl6whXFTU6WgZqGxAnZlFQuFeL0tXMtjxkmf9ypDUazDEsTISch0O3hAl/24f/rjyLYs4hEiagJhXAgMBAAECgYBm9oZ10KPXf79eIZp6gsFSqXL7XLP63NAMyFmQGutFSZKNaYB1ZzpF4PDcLa5kRy8QzRFNd9jBm1cfmEAlngS/1jsFXhnYZ9tJXaXt4+J5YcdtKdT4PyXRAGriCwX4JFRHwO58lAxOSbDm8gv4ATDQBDg/L10PDiZpXLtWl0wYiQJBANRZK9UA2SEDgJnvGu3vugQT5NIPAFIZLEO9qJnUCuWndjtfLtvTUZQ4yfnYphLPXRD/TjYKcU244XaJbsKrnn0CQQCyB1ww3cv0J69Davzh4XcRUs7a3eSTVBrz9M/9lDYWHJeQ2TEX0kwINe/GQDUn61pinqh3070txzpWTdv/FuZjAkEAsK8pe2fjQkbpwCtlGsk226G56NY2jBkJ7atnF+eI0aFPDQObt6jS3iOKWura9Be59iSX7PsvX14Pq1Oa5zto+QJBAIWsoxuKHs9oUOBFYDZXLilSzUFn5W5+c3KEevwDooz90QyRGJyzaiWsIirxITilLovoZ8T5tw29j18oPS0Py9MCQC41m0RqXK28g/Swn5MJ9pqmvu9trQ4djI0VgoOrU0Pk0fZZvd7PEMdNu5QNA8ZgS+Wm5Tz/V4eL+2KXUkhJAMA=',
        uid: 'tumx'
    });

    // lay time hien tai
    const timestamp = new Date().getTime();

    // lay cac lenh dang duoc dat
    const price_lbank = await lbank.fetchOrderBook('grbt_usdt', 20);

    const min_sell_lbank_price = price_lbank.asks[0][0];
    var max_buy_lbank_price = price_lbank.bids[0][0];
    const min_sell_lbank_volume = price_lbank.asks[0][1];
    const max_buy_lbank_volume = price_lbank.bids[0][1];

    if(min_sell_bitmart_price <= 0.00226)
    {
        const create_order_lbank = await lbank.createOrder('grbt_usdt', 'limit', 'sell', 1, max_buy_lbank_price);
        console.log("Sell Bitmart: " + min_sell_bitmart_volume + "*" + min_sell_bitmart_price + " = "+ min_sell_bitmart_volume * min_sell_bitmart_price + " USD");
    }

    const create_order_lbank = await lbank.createOrder('cfxt_usdt', 'limit', 'sell', 1, max_buy_lbank_price);
    await delay(1000);
    var pice1 = max_buy_lbank_price + 0.00001;
    await lbank.createOrder('cfxt_usdt', 'limit', 'sell', 1, pice1);
}

async function main() {
    while(true)
    {
        await mua_dinh_ban_day();0
//        await delay(5000);
    }
}

main()