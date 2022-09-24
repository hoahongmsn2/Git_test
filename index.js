const ccxt = require('ccxt');
const delay = require('delay');
const moment = require('moment');
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: 'marlee.auer39@ethereal.email',
      pass: '6YS9NJEm9B45XAN5Se'
    }
  });
  
  var mailOptions = {
    from: 'marlee.auer39@ethereal.email',
    to: 'rowan.wuckert26@ethereal.email',
    subject: 'Gia dang giam vao muc thoi!',
    text: 'Gia dang giam vao muc thoi!'
  };

async function trade() {
    const lbank = new ccxt.lbank2({
        apiKey: 'b0ac18f5-5b72-420f-b7ae-7d43fa98aefd',
        secret: 'MIICdwIBADANBgkqhkiG9w0BAQEFAASCAmEwggJdAgEAAoGBAJOsG2Lh3Os1E3ewUL3tUh8tBjH1ye9MVlpBnee42LNY+z/FokQt01U8TWiVFQOlDwrRpBoRkf0qbkg7vf4BqQ50flhJLuyIl6whXFTU6WgZqGxAnZlFQuFeL0tXMtjxkmf9ypDUazDEsTISch0O3hAl/24f/rjyLYs4hEiagJhXAgMBAAECgYBm9oZ10KPXf79eIZp6gsFSqXL7XLP63NAMyFmQGutFSZKNaYB1ZzpF4PDcLa5kRy8QzRFNd9jBm1cfmEAlngS/1jsFXhnYZ9tJXaXt4+J5YcdtKdT4PyXRAGriCwX4JFRHwO58lAxOSbDm8gv4ATDQBDg/L10PDiZpXLtWl0wYiQJBANRZK9UA2SEDgJnvGu3vugQT5NIPAFIZLEO9qJnUCuWndjtfLtvTUZQ4yfnYphLPXRD/TjYKcU244XaJbsKrnn0CQQCyB1ww3cv0J69Davzh4XcRUs7a3eSTVBrz9M/9lDYWHJeQ2TEX0kwINe/GQDUn61pinqh3070txzpWTdv/FuZjAkEAsK8pe2fjQkbpwCtlGsk226G56NY2jBkJ7atnF+eI0aFPDQObt6jS3iOKWura9Be59iSX7PsvX14Pq1Oa5zto+QJBAIWsoxuKHs9oUOBFYDZXLilSzUFn5W5+c3KEevwDooz90QyRGJyzaiWsIirxITilLovoZ8T5tw29j18oPS0Py9MCQC41m0RqXK28g/Swn5MJ9pqmvu9trQ4djI0VgoOrU0Pk0fZZvd7PEMdNu5QNA8ZgS+Wm5Tz/V4eL+2KXUkhJAMA=',
        uid: 'tumx'
    });

    const price_lbank = await lbank.fetchOrderBook('cfxt_usdt', 20);

    const min_sell_lbank_price = price_lbank.asks[0][0];

    const create_order_lbank = await lbank.createOrder('cfxt_usdt', 'limit', 'buy', 1, min_sell_lbank_price);
    await delay(2000);
    const create_order_lbank1 = await lbank.createOrder('cfxt_usdt', 'limit', 'buy', 1, (min_sell_lbank_price-0.00001));  
}



async function check_price() {
    const lbank = new ccxt.lbank2({
        apiKey: 'b0ac18f5-5b72-420f-b7ae-7d43fa98aefd',
        secret: 'MIICdwIBADANBgkqhkiG9w0BAQEFAASCAmEwggJdAgEAAoGBAJOsG2Lh3Os1E3ewUL3tUh8tBjH1ye9MVlpBnee42LNY+z/FokQt01U8TWiVFQOlDwrRpBoRkf0qbkg7vf4BqQ50flhJLuyIl6whXFTU6WgZqGxAnZlFQuFeL0tXMtjxkmf9ypDUazDEsTISch0O3hAl/24f/rjyLYs4hEiagJhXAgMBAAECgYBm9oZ10KPXf79eIZp6gsFSqXL7XLP63NAMyFmQGutFSZKNaYB1ZzpF4PDcLa5kRy8QzRFNd9jBm1cfmEAlngS/1jsFXhnYZ9tJXaXt4+J5YcdtKdT4PyXRAGriCwX4JFRHwO58lAxOSbDm8gv4ATDQBDg/L10PDiZpXLtWl0wYiQJBANRZK9UA2SEDgJnvGu3vugQT5NIPAFIZLEO9qJnUCuWndjtfLtvTUZQ4yfnYphLPXRD/TjYKcU244XaJbsKrnn0CQQCyB1ww3cv0J69Davzh4XcRUs7a3eSTVBrz9M/9lDYWHJeQ2TEX0kwINe/GQDUn61pinqh3070txzpWTdv/FuZjAkEAsK8pe2fjQkbpwCtlGsk226G56NY2jBkJ7atnF+eI0aFPDQObt6jS3iOKWura9Be59iSX7PsvX14Pq1Oa5zto+QJBAIWsoxuKHs9oUOBFYDZXLilSzUFn5W5+c3KEevwDooz90QyRGJyzaiWsIirxITilLovoZ8T5tw29j18oPS0Py9MCQC41m0RqXK28g/Swn5MJ9pqmvu9trQ4djI0VgoOrU0Pk0fZZvd7PEMdNu5QNA8ZgS+Wm5Tz/V4eL+2KXUkhJAMA=',
        uid: 'tumx'
    });
    var price = 0;
    var count = 0;
    var price_lbank = await lbank.fetchTicker('cfxt_usdt');
    var price_lbank_current = price_lbank.last;
    console.log(price_lbank_current);
    price = price_lbank_current;
    await delay(60000);
    price_lbank = await lbank.fetchTicker('cfxt_usdt');
    price_lbank_current = price_lbank.last;
    console.log(price_lbank_current);
    while(price == price_lbank_current)
    {
        count++;
        await delay(60000);
        price_lbank = await lbank.fetchTicker('cfxt_usdt');
        price_lbank_current = price_lbank.last;
        console.log(price_lbank_current);
        if(count == 5)
        {
            console.log("mua de");
            transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log(error);
                } else {
                  console.log('Email sent: ' + info.response);
                }
              });
        }
    }
    price = price_lbank_current;
}

async function main() {
    while(true)
    {
        await check_price();
        await delay(2000);
    }
}

main()