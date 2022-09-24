const ccxt = require('ccxt');
const moment = require('moment');
const delay = require('delay');

async function mua_dinh_ban_day() {
    const lbank = new ccxt.lbank2({
        apiKey: 'b0ac18f5-5b72-420f-b7ae-7d43fa98aefd',
        secret: 'MIICdwIBADANBgkqhkiG9w0BAQEFAASCAmEwggJdAgEAAoGBAJOsG2Lh3Os1E3ewUL3tUh8tBjH1ye9MVlpBnee42LNY+z/FokQt01U8TWiVFQOlDwrRpBoRkf0qbkg7vf4BqQ50flhJLuyIl6whXFTU6WgZqGxAnZlFQuFeL0tXMtjxkmf9ypDUazDEsTISch0O3hAl/24f/rjyLYs4hEiagJhXAgMBAAECgYBm9oZ10KPXf79eIZp6gsFSqXL7XLP63NAMyFmQGutFSZKNaYB1ZzpF4PDcLa5kRy8QzRFNd9jBm1cfmEAlngS/1jsFXhnYZ9tJXaXt4+J5YcdtKdT4PyXRAGriCwX4JFRHwO58lAxOSbDm8gv4ATDQBDg/L10PDiZpXLtWl0wYiQJBANRZK9UA2SEDgJnvGu3vugQT5NIPAFIZLEO9qJnUCuWndjtfLtvTUZQ4yfnYphLPXRD/TjYKcU244XaJbsKrnn0CQQCyB1ww3cv0J69Davzh4XcRUs7a3eSTVBrz9M/9lDYWHJeQ2TEX0kwINe/GQDUn61pinqh3070txzpWTdv/FuZjAkEAsK8pe2fjQkbpwCtlGsk226G56NY2jBkJ7atnF+eI0aFPDQObt6jS3iOKWura9Be59iSX7PsvX14Pq1Oa5zto+QJBAIWsoxuKHs9oUOBFYDZXLilSzUFn5W5+c3KEevwDooz90QyRGJyzaiWsIirxITilLovoZ8T5tw29j18oPS0Py9MCQC41m0RqXK28g/Swn5MJ9pqmvu9trQ4djI0VgoOrU0Pk0fZZvd7PEMdNu5QNA8ZgS+Wm5Tz/V4eL+2KXUkhJAMA=',
        uid: 'tumx'
    });
    const bitmart = new ccxt.bitmart({
        apiKey: '6258d946d4aa3ea4f28c83af6a7ce3c6c574df98',
        secret: 'bce703ac6b6f5a4aa4cd81d9f477c2c3f8bc13ec2d67e1dde47fa0fe74d3a198',
        uid: 'tumx'
    });

    // lay time hien tai
    const timestamp = new Date().getTime();

    // lay cac lenh dang duoc dat
    const price_lbank = await lbank.fetchOrderBook('cfxt_usdt', 20);
    const price_bitmart = await bitmart.fetchOrderBook('CFXT_USDT', 20);

    // lay so du
    const balance_lbank = await lbank.fetchBalance();
    const balance_bitmart = await bitmart.fetchBalance();

    // lay so luong cfxt va usdt tren lbank
    balance_CFXT_lbank = balance_lbank.CFXT.free;
    balance_USDT_lbank = balance_lbank.USDT.free;

    // lay so luong cfxt va usdt tren bitmart
    balance_CFXT_bitmart= balance_bitmart.CFXT.free;
    balance_USDT_bitmart = balance_bitmart.USDT.free;

    const min_sell_lbank_price = price_lbank.asks[0][0];
    const max_buy_lbank_price = price_lbank.bids[0][0];
    const min_sell_lbank_volume = price_lbank.asks[0][1];
    const max_buy_lbank_volume = price_lbank.bids[0][1];

    const min_sell_bitmart_price = price_bitmart.asks[0][0];
    const max_buy_bitmart_price = price_bitmart.bids[0][0];
    const min_sell_bitmart_volume = price_bitmart.asks[0][1];
    const max_buy_bitmart_volume = price_bitmart.bids[0][1];

    if((max_buy_lbank_price > (min_sell_bitmart_price * 1.01)) && 
       ((max_buy_lbank_volume * max_buy_lbank_price) > 5) && 
       ((min_sell_bitmart_volume * min_sell_bitmart_price) > 5))
    {
        if(max_buy_lbank_volume > min_sell_bitmart_volume)
        {
            amount_buy = min_sell_bitmart_volume;
        }
        else
        {
            amount_buy = max_buy_lbank_volume;
        }
        const create_order_bitmart = await bitmart.createOrder('CFXT_USDT', 'limit', 'buy', amount_buy, min_sell_bitmart_price);

        console.log("da mua thanh cong tren bitmart");

        const create_order_lbank = await lbank.createOrder('cfxt_usdt', 'limit', 'sell', amount_buy, max_buy_lbank_price);
        console.log("da ban thanh cong tren lbank");
    }

    if((max_buy_bitmart_price > (min_sell_lbank_price * 1.01)) && 
       ((max_buy_bitmart_volume * max_buy_bitmart_price) > 5) && 
       ((min_sell_lbank_volume * min_sell_lbank_price) > 5))
    {
        if(max_buy_bitmart_volume > min_sell_lbank_volume)
        {
            amount_buy = min_sell_lbank_volume;
        }
        else
        {
            amount_buy = max_buy_bitmart_volume;
        }
        // dat lenh mua tren lbank 
        const create_order_lbank = await lbank.createOrder('cfxt_usdt', 'limit', 'buy', amount_buy, min_sell_lbank_price);
        console.log("da mua thanh cong tren lbank");
        // dat lenh mua tren bitmart
        const create_order_bitmart = await bitmart.createOrder('CFXT_USDT', 'limit', 'sell', amount_buy, max_buy_bitmart_price);
        console.log("da ban thanh cong tren bitmart");
    }
}

async function test(){
    const lbank = new ccxt.lbank2({
        apiKey: 'b0ac18f5-5b72-420f-b7ae-7d43fa98aefd',
        secret: 'MIICdwIBADANBgkqhkiG9w0BAQEFAASCAmEwggJdAgEAAoGBAJOsG2Lh3Os1E3ewUL3tUh8tBjH1ye9MVlpBnee42LNY+z/FokQt01U8TWiVFQOlDwrRpBoRkf0qbkg7vf4BqQ50flhJLuyIl6whXFTU6WgZqGxAnZlFQuFeL0tXMtjxkmf9ypDUazDEsTISch0O3hAl/24f/rjyLYs4hEiagJhXAgMBAAECgYBm9oZ10KPXf79eIZp6gsFSqXL7XLP63NAMyFmQGutFSZKNaYB1ZzpF4PDcLa5kRy8QzRFNd9jBm1cfmEAlngS/1jsFXhnYZ9tJXaXt4+J5YcdtKdT4PyXRAGriCwX4JFRHwO58lAxOSbDm8gv4ATDQBDg/L10PDiZpXLtWl0wYiQJBANRZK9UA2SEDgJnvGu3vugQT5NIPAFIZLEO9qJnUCuWndjtfLtvTUZQ4yfnYphLPXRD/TjYKcU244XaJbsKrnn0CQQCyB1ww3cv0J69Davzh4XcRUs7a3eSTVBrz9M/9lDYWHJeQ2TEX0kwINe/GQDUn61pinqh3070txzpWTdv/FuZjAkEAsK8pe2fjQkbpwCtlGsk226G56NY2jBkJ7atnF+eI0aFPDQObt6jS3iOKWura9Be59iSX7PsvX14Pq1Oa5zto+QJBAIWsoxuKHs9oUOBFYDZXLilSzUFn5W5+c3KEevwDooz90QyRGJyzaiWsIirxITilLovoZ8T5tw29j18oPS0Py9MCQC41m0RqXK28g/Swn5MJ9pqmvu9trQ4djI0VgoOrU0Pk0fZZvd7PEMdNu5QNA8ZgS+Wm5Tz/V4eL+2KXUkhJAMA=',
        uid: 'tumx'
    });
    const bitmart = new ccxt.bitmart({
        apiKey: '6258d946d4aa3ea4f28c83af6a7ce3c6c574df98',
        secret: 'bce703ac6b6f5a4aa4cd81d9f477c2c3f8bc13ec2d67e1dde47fa0fe74d3a198',
        uid: 'tumx'
    });

    const my_order_lbank = await lbank.fetchOpenOrders('cfxt_usdt', undefined, undefined);
    // id cua lenh dat
    const my_order_lbank_id = my_order_lbank[0].id;
    console.log(my_order_lbank_id);  
    // them kiem tra lenh thanh cong chua
    const order_lbank = await lbank.fetchOrderSupplement(my_order_lbank_id, 'cfxt_usdt');
    console.log(order_lbank.info.status);
}

async function main() {
    while(true)
    {
        await mua_dinh_ban_day();
    }
//    test();
}

main()