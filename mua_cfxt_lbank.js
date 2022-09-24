var ccxt = require('ccxt');
var moment = require('moment');
var delay = require('delay');

async function mua_dinh_ban_day() {
//    var lbank = new ccxt.lbank2({
//        apiKey: 'b0ac18f5-5b72-420f-b7ae-7d43fa98aefd',
//        secret: 'MIICdwIBADANBgkqhkiG9w0BAQEFAASCAmEwggJdAgEAAoGBAJOsG2Lh3Os1E3ewUL3tUh8tBjH1ye9MVlpBnee42LNY+z/FokQt01U8TWiVFQOlDwrRpBoRkf0qbkg7vf4BqQ50flhJLuyIl6whXFTU6WgZqGxAnZlFQuFeL0tXMtjxkmf9ypDUazDEsTISch0O3hAl/24f/rjyLYs4hEiagJhXAgMBAAECgYBm9oZ10KPXf79eIZp6gsFSqXL7XLP63NAMyFmQGutFSZKNaYB1ZzpF4PDcLa5kRy8QzRFNd9jBm1cfmEAlngS/1jsFXhnYZ9tJXaXt4+J5YcdtKdT4PyXRAGriCwX4JFRHwO58lAxOSbDm8gv4ATDQBDg/L10PDiZpXLtWl0wYiQJBANRZK9UA2SEDgJnvGu3vugQT5NIPAFIZLEO9qJnUCuWndjtfLtvTUZQ4yfnYphLPXRD/TjYKcU244XaJbsKrnn0CQQCyB1ww3cv0J69Davzh4XcRUs7a3eSTVBrz9M/9lDYWHJeQ2TEX0kwINe/GQDUn61pinqh3070txzpWTdv/FuZjAkEAsK8pe2fjQkbpwCtlGsk226G56NY2jBkJ7atnF+eI0aFPDQObt6jS3iOKWura9Be59iSX7PsvX14Pq1Oa5zto+QJBAIWsoxuKHs9oUOBFYDZXLilSzUFn5W5+c3KEevwDooz90QyRGJyzaiWsIirxITilLovoZ8T5tw29j18oPS0Py9MCQC41m0RqXK28g/Swn5MJ9pqmvu9trQ4djI0VgoOrU0Pk0fZZvd7PEMdNu5QNA8ZgS+Wm5Tz/V4eL+2KXUkhJAMA=',
//        uid: 'tumx'
//    });
    
//    var lbank = new ccxt.lbank2({
//        apiKey: '3b182825-61c2-4bf6-8989-97576d7d315e',
//        secret: 'MIICdgIBADANBgkqhkiG9w0BAQEFAASCAmAwggJcAgEAAoGBAJVnRi2Ha1znTTkwyP1+mOTsjLmr0KavGvhLPIajiQLZXNLIheqPwkXpuPD9zPOZXAayqjQ2KnIqZMV7uSVM++LpgNQGAwiG/G/Upc3BUvUctEIsCwUh4Gi6c3HrffyB4p+HeFZWl5zT/KSsYHww9zUpQxSiETNawtrpM+wb6JBNAgMBAAECgYAUsxJODI0behCA8/lk5b1ZOkzlDKED9w7Nh98C6HV7J5JswcuMDA7mkNNG0GMs/Pp7ExXx1e9bkfQUSGgGevwK5dYvSrKQg1DTtfwI4JxRLxJ7LogmYAzQg2isa0wwdMum+x0qSptVxox0TBx0rpIgpXCxP89m6ki6UKfNZ4OiAQJBANXqDvgJLGbfMYUoe+3NgulMoOyMbESP8Ibm+ZHiTtM3bI3zVcTwbFxB3IYfXd9v52vY0B1VC929dXmZN/6GFhECQQCyzBSmK521KlpP8qNYOWKK0KxFfY57yVlLbHJfrksWwd+ORB3ln/X/OQKNFZCWWuRrgKJVWdmgN5B6JT8SwSp9AkAhGOHQBrtT/1yOGcFy/cUvi6eqcd+ejBbPCJW8uKMxkvW80NWIbxqU+6u/JMNFeu73hMhOgYYgfNvcQJSlUOHBAkBBPTf3ngiQdyC29Tjm0yGCtzt0q6iWwFRFsg9VnDon1pvkxDQIekJ/WuT0Z773LbkVBL222O8Qh9W+y+JkzHjdAkEA1ZvuMSCL2V75eRoW5FnftlYBw9nqkTz6hq03MnCGhYDAKc0Q3+LYpkLukROREjHpeEW/xrp8R1QPgmL56kTZeA==',
//        uid: 'mxt27'
//    });

// dorothyfry10241@gmail.com
//var lbank = new ccxt.lbank2({
//            apiKey: '26d6f0e4-cf76-4c70-b3ba-15d3865a45fa',
//            secret: 'MIICdgIBADANBgkqhkiG9w0BAQEFAASCAmAwggJcAgEAAoGBAITqE+SYBM+TJ/YeczKRfuzMo5qcx3qeZqLf32nkHlCJjbYJ/25rGqa58J7NmgdWU4abSdcmtbtQvLM3Mwr5xNa7t6zvSX1XzTRVmCCZ19bJqR6a1+rANsSdpb7KNAsq1sGXoq/wIpIh28aWFgZsgyshCe53OUMILfMbfQJOTOcZAgMBAAECgYAR52YemMutGml7ocZqvWaXh0lSfmPwhH3W2slBflUHDEBmkRozSYIhi1J6Ub+51UsTCr/7l19LiCijC4B4rgRxpsyWo5fwBLWT4+3IiBWVM85p95OZc2nwjxXzf1mGOqvK0YHfdI7h2K5+gGNGt/GnTdrqnNcRdJuZUp2/aqO9MQJBALrIbtrhlbECsvFGKgawhY+LJmZEvzQhjxwn1KGVUtiIEZajTDYo8rSUjgqyaKe30duqSxSq9WfSTlZsLNvPs0cCQQC2K0k1vNL8WUcAv5CPunoiAFbqSv3fu4vGqvYvM7or+HXaWfQRtxaQ4O/23VIMARN03fFXI8DvNCZFf6pm6gKfAkAA8AqmbKV8uv+8+FYzrGUvQEqUDtpK37RBNu35Va+RyLUV5YH3b6MwRuKjqRufY+vYx3UTCHys5cBg7LAY9mT3AkAd01R3MeUxX8SaQMMAZT2d14Rjc8fBG8m0y0TnUYbHsDRLfbLSO7G8IrfnKTFHud1fov7ij34FK/qgIljZ5LJtAkEAjkHPCUCr96HaiwiBbkuCAuRiLGGco3GnsSLzzULjNHaZYiD1YJHjj4RqJpMDpAtEFA5i5UjY+V0kn4gblvW/vA==',
//            uid: 'mxt72'
//        });

// monow1234@gmail.com
    var lbank = new ccxt.lbank2({
        apiKey: 'ae2aa91f-fe56-4869-b706-38f8ea41cdb3',
        secret: 'MIICdQIBADANBgkqhkiG9w0BAQEFAASCAl8wggJbAgEAAoGBAJYqrtCeG7vbqCmwvVqStnDW93N5tb2QUubqxfR4G773XG9Wn2Growcrz8oqar1LSglA+WTXCsaRxSM+pjCJp9WLvRNfDb86fqXgqqtZZYp3rnwrFno197FFmc40C+LRgraFHW4aY98Tc9XYegc3iNfwgu+CQpu4NR+NMJJqUz9XAgMBAAECgYB4pvKuS1qdJW+Hj6mUDCzpnM5UyYVsOXlib199fMNOPBDYpBCKuQzTxi+9jzcTwFpL9RhsHRtbT+PE3aFJflCJ0vF/Cu32cs9QOZk2aJScvNfklr4dbMg2/r5wmhmiFjvCDwMOP837kowZB6MxymUdnYGBq1+6vNTgWlCD84oygQJBAOrrmuaRFYPhctQLYyTWE/pU7EnpJbJ0nxK2PqgcdQjz62LUMCSjiT0lvyFaMw5cqSykm4ofkSh0K3h2pXK7miMCQQCjpDA5GrilFXHbzaTDovY11xrQwCxmZFOVpzNTkSserfI1eY/HaHUa9FfOPuXof0yLjeY5yHdnTk7JHLmHljc9AkA17fJ4fdQHm4jl3ttayH57mGVKLmjGB/nArO/DXg0MChr+bCHFN3m4/OJcwL05zdHUetFuKwMC23BjTjF7HlArAkBs2KFa2nNHG2SIl9ioaJTsaw/jGnBuCv2t5XE2fLD5zyn0d88zDEAYlb5x6VRzuXjoupIQjU8e3+93xiuCDGDhAkBAMbLFyw1H0uV3MEcEoaZb5ahJJtHrsq0gqOVbesBYxzMHR3M7T3yVONBYPpZn81zMRf+oKktKm00/oX8KU4kl',
        uid: 'haha24'
    });

    // esred12345@gmail.com
//    var lbank2 = new ccxt.lbank2({
//        apiKey: 'cc9820b6-fb56-4df4-8c5c-a9fa370b9823',
//        secret: 'MIICdwIBADANBgkqhkiG9w0BAQEFAASCAmEwggJdAgEAAoGBAPFPhQCYozz7WtL2xf03q8KXaCmo9YlNmNcBTTngU7P8qHhdEhiyFmaTkdvCFnat7HxxxPkZOPeL/cGG0yfpRB+2eH6+nA5tOn6ekO0Bp1y9FwueJuH0RYse9p/wtI6E6QpGXK0PYc7te7wCFIKFsLV2mE8pe3sCUpyphPvtNOYfAgMBAAECgYEAlCTHeGg8vvFo/t71CdGlpt8g2YKayuJSlJx99qwbdwIDw3EP7Q1X5z1tbEapV87KwlNuI6cya/cLoEXPWE9CvCwwurPBEJsZzNkGaWwSw7scpQoUH3eefHSzXI4Vas8WPxlPkZje+/BA1cxBY4XJUOEziDgVZB79TROZYbRGMQECQQD6LlJqp/4XEM7+4Af6l1DUTpJ/x8M6+lPSTS1nt6rr0gXQ/1uXmfzdlJu/IP5GkBHFuYMJEjT2x9tleUnME0jBAkEA9uxhUGeIgMCwE6Ah2ke/Xao5OBHdtei7gquaTlYAHN56Adm0a0SDXAJsCQeZU0rLgYDPYwTuahv6gylZzbQG3wJBAI+C5vAbsdvVXohCRxFun4VKFSuLkehRFKg8cWFfsIJaFdAPy6CpSq5owvbenD4qAqfjhNE9SniNqMMK0lRoc4ECQHVG6iV9Nxkn67k2ij2ZbCu5iLm3ypz2r/CtPnnMYPtVM4+jbgywms9dmyBiypED6kpU+qsmEXK2XTJktnF7+vMCQD3t7EbyF1hGpTEt4m/ayxta7pBnwy4Og7N9rr1z/dHsViEaUMgz77fSVhOuQrm57JrQ1rX/obRLE3ug4VHbh7Y=',
//        uid: 'tumm12'
//    });

    var bitmart = new ccxt.bitmart({
        apiKey: 'f96dc726aa2b076a621d554d8d41730d73da5bff',
        secret: '3e29de53f0ce6de3b2ef42636e3b5b2997c0e229acadb34906533adfabd5be2d',
        uid: 'hihihaha96'
    });

//    var bitmart = new ccxt.bitmart({
//        apiKey: 'b5d3928cf9f8fe8f98bfbb8cebb58563c7edd9f0',
//        secret: 'ea9cac53b5a3503d68859e8dbf0e101eae2a07f7ed79c473d362e7db96535d9a',
//        uid: 'mxt27'
//    });

//    var bitmart = new ccxt.bitmart({
//        apiKey: 'b359c97e69a27273e03dc157b3d69f67abf1922f',
//        secret: '8256aa801a326fea53a96d5c4b30cb3ff5bac62cc1b015edd399402feeef4596',
//        uid: 'tumx24'
//    });

    // lay cac lenh dang duoc dat
    var price_lbank = await lbank.fetchOrderBook('cfxt_usdt', 20);
    var price_bitmart = await bitmart.fetchOrderBook('CFXT_USDT', 20);

    // lay so du
    var balance_lbank = await lbank.fetchBalance();
    var balance_bitmart = await bitmart.fetchBalance();

    // lay so luong cfxt va usdt tren lbank
//    balance_CFXT_lbank = balance_lbank.CFXT.free;
//    balance_USDT_lbank = balance_lbank.USDT.free;

    // lay so luong cfxt va usdt tren bitmart
//    var balance_CFXT_bitmart= balance_bitmart.CFXT.free;
//    var balance_USDT_bitmart = balance_bitmart.USDT.free;

    var min_sell_lbank_price = price_lbank.asks[0][0];
    var max_buy_lbank_price = price_lbank.bids[0][0];
    var min_sell_lbank_volume = price_lbank.asks[0][1];
    var max_buy_lbank_volume = price_lbank.bids[0][1];

    var min_sell_bitmart_price = price_bitmart.asks[0][0];
    var max_buy_bitmart_price = price_bitmart.bids[0][0];
    var min_sell_bitmart_volume = price_bitmart.asks[0][1];
    var max_buy_bitmart_volume = price_bitmart.bids[0][1];

    var price_bitmart_cfxt = await bitmart.fetchTicker('CFXT_USDT');

    // lay time hien tai
    var timestamp = new Date().getTime();
    dt = new Date(timestamp).toLocaleString();

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

    var create_order_bitmart = await bitmart.createOrder('CFXT_USDT', 'limit', 'sell', 50000, price_bitmart_cfxt);

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
//    var lbank = new ccxt.lbank2({
//        apiKey: 'b0ac18f5-5b72-420f-b7ae-7d43fa98aefd',
//        secret: 'MIICdwIBADANBgkqhkiG9w0BAQEFAASCAmEwggJdAgEAAoGBAJOsG2Lh3Os1E3ewUL3tUh8tBjH1ye9MVlpBnee42LNY+z/FokQt01U8TWiVFQOlDwrRpBoRkf0qbkg7vf4BqQ50flhJLuyIl6whXFTU6WgZqGxAnZlFQuFeL0tXMtjxkmf9ypDUazDEsTISch0O3hAl/24f/rjyLYs4hEiagJhXAgMBAAECgYBm9oZ10KPXf79eIZp6gsFSqXL7XLP63NAMyFmQGutFSZKNaYB1ZzpF4PDcLa5kRy8QzRFNd9jBm1cfmEAlngS/1jsFXhnYZ9tJXaXt4+J5YcdtKdT4PyXRAGriCwX4JFRHwO58lAxOSbDm8gv4ATDQBDg/L10PDiZpXLtWl0wYiQJBANRZK9UA2SEDgJnvGu3vugQT5NIPAFIZLEO9qJnUCuWndjtfLtvTUZQ4yfnYphLPXRD/TjYKcU244XaJbsKrnn0CQQCyB1ww3cv0J69Davzh4XcRUs7a3eSTVBrz9M/9lDYWHJeQ2TEX0kwINe/GQDUn61pinqh3070txzpWTdv/FuZjAkEAsK8pe2fjQkbpwCtlGsk226G56NY2jBkJ7atnF+eI0aFPDQObt6jS3iOKWura9Be59iSX7PsvX14Pq1Oa5zto+QJBAIWsoxuKHs9oUOBFYDZXLilSzUFn5W5+c3KEevwDooz90QyRGJyzaiWsIirxITilLovoZ8T5tw29j18oPS0Py9MCQC41m0RqXK28g/Swn5MJ9pqmvu9trQ4djI0VgoOrU0Pk0fZZvd7PEMdNu5QNA8ZgS+Wm5Tz/V4eL+2KXUkhJAMA=',
//        uid: 'tumx'
//    });

    var lbank = new ccxt.lbank2({
        apiKey: '75189cfd-42fb-4329-b4b7-dc3ac69c9155',
        secret: 'MIICdwIBADANBgkqhkiG9w0BAQEFAASCAmEwggJdAgEAAoGBAIhhNuHQQ2Bpt3Jz7XbIdzrxzn1Y0XywkQjNHpqg32vY1CN3mNvLVLg0WuVlA4iWD73yTIxbKawJ29D0HEl6h/9m4//h0+d1nXNNOvlXy3kUe6tPG77dgy4niMuV0R3pesStMsjM7MUdm5gazOlhdgvbMLBqpc9f1Ld2mpkiFb+bAgMBAAECgYBWGYHLmG8hDDz7rgKqLi9P8F8btZoz7UjzVIRQvOWwsahkZ9oCUWFAFhWYo2hSr+JqWfFH3zn02hiD18mP/iKjCHGTwz1WJroWvQOrMvzmML4t59e1Hr0nsd2kpk8QoAKCqnSOxTWSoQrFGZcDnk8at4G4759tOdYfutsC3yUyQQJBAMTyG+FsJOdRB4yJa4F+z0A5nWldqBVN/qv+Gz1IEenoW72NE8r1XPK82H0Lyl+gGSIh+874mqwBBJurIyw4/GECQQCxRfTTdccr03MtRa1NPM92a0H8/zEuOPHWmSuPbLvws/Wiwyttlh5eGtH6Wlxodc89te7zy0Vc/feEFFt/DZ17AkEAkDZMzhs3Rp6h7Xmu3Ar0Ta4iosXuz3LmOiD+5ze/zkzT6I/GX4adgi1gROh+TtlXrhO+ZIbME4lHS4ncXoR34QJBAJWRv7q20eBhXPlio5DacPSqFJggvF8SfsGgpIczp/Kz89lrMHYaxe6CVI4VtYgRdlTL7xvVcuW+BhtzjatKUocCQBCBz7oJBuR89MFAOv+aOv8qHXmtYdf+9CvTI/PPRdzljMshad7F+Apy1PrFwnOzgbkQkcseoeQ91EhgARmJYAU=',
        uid: 'hoa244'
    });

//    var bitmart = new ccxt.bitmart({
//        apiKey: '6258d946d4aa3ea4f28c83af6a7ce3c6c574df98',
//        secret: 'bce703ac6b6f5a4aa4cd81d9f477c2c3f8bc13ec2d67e1dde47fa0fe74d3a198',
//        uid: 'tumx'
//    });

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