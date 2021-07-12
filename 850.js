/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */
 const body = `aid=1589&coupons_activity_id=50002880&coupon_mid=c6080b7950cb14701ce064966d86293b&coupons_code=50000300`;
 const cookie = `optjdata2019jssdkcross=%7B%22vk%22%3A%22178f991ae7584f-01013d30f9d91e-3f356b-1638720-178f991ae7679e%22%2C%22device_id%22%3A%22178f991ae7584f-01013d30f9d91e-3f356b-1638720-178f991ae7679e%22%2C%22props%22%3A%7B%7D%7D; ut=direct; cookies-tips=should_close; memberinfo=%7B%22id%22%3A%22692377515%22%2C%22name%22%3A%22%E7%94%A8%E6%88%B70177%22%2C%22oid%22%3A%22NkpERkoybGdSNkZaNloreTRhd0ZzZz09%22%7D; sa_distinct_id=NkpERkoybGdSNkZaNloreTRhd0ZzZz09; Op_lvt_f18367c55fd7569d9000cd9986846577=1623410883; us=shouye; um=gezi; uc=direct; utm_source=opposhop; utm_medium=shouye; utm_campaign=direct; utm_term=direct; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%22NkpERkoybGdSNkZaNloreTRhd0ZzZz09%22%2C%22%24device_id%22%3A%22178f991af0c36a-0788e9883ab48-3f356b-1638720-178f991af0d5e6%22%2C%22props%22%3A%7B%22%24latest_referrer%22%3A%22%22%2C%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_utm_source%22%3A%22opposhop%22%2C%22%24latest_utm_medium%22%3A%22shouye%22%2C%22%24latest_utm_campaign%22%3A%22hd_direct%22%2C%22%24latest_utm_term%22%3A%22hd_direct%22%7D%2C%22first_id%22%3A%22178f991af0c36a-0788e9883ab48-3f356b-1638720-178f991af0d5e6%22%7D; oppostore_rsa_key=MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAJCYMLNhFBtDcbb72YZVDm%2FFG3m3oR4kU8f7JgvAmhI%2FlQvqhYczoJz8QZU30ml0nvtO2dB%2FfcqTEW9RyUhw8jUCAwEAAQ%3D%3D; newopkey=_LA6BJAdtcefxiIjf09TWGh5X_lVca_Mjjijula1KsUbOMIWm39CSVfxJzTiskudfMLuCFuc-Po; opkey=eyJpdiI6ImNuQjVKaENwdE9ad2xIUGZZYWRKOVE9PSIsInZhbHVlIjoiRDJra3RrMHNEeVFNRUZxbjlFU2xRZ1BXZVYvYUQ2eGR0SFpDUms4YzdmTWNjSytLZjJKVFJqcWxnanlFWmF4cXNnOUY1aTBVczZUNFJqN3doVkdzRGR2Q2VzMnhSYngzQ25sOUVKTk5JVURhWHo3WC8ycTNyeEViZTJTNDFYMTMiLCJtYWMiOiI2NGRiMTUwNmU2MzM5YmRlZGYwZWE0MWM1NTM4MDcwODY4MjIxNjQ5NGYyMTgwZTY2NWNhMGZkYjQ1NjcwYzQxIn0%3D; sessionId=_LA6BJAdtcefxiIjf09TWGh5X_lVca_Mjjijula1KsUbOMIWm39CSVfxJzTiskudfMLuCFuc-Po; NEWOPPOSID=eyJpdiI6InJTdnloRSt3Y3RzOUhPNVhlcExkVFE9PSIsInZhbHVlIjoiMWFrSVpVS0dsNkFlOW9sWTVpNjF2YThiRWxIYTF3dnJPZER2WHpHUlRDR0NHcldQN3BnRlRmQ2Erb0dvUHd3WGV1elo4YXg3NXorZUJlM1RSM1hGWnNRQnBWNXlzK21CRWxpeFN3bThybzVYTGNabnJOejQwLzluK0FERCtSM2MiLCJtYWMiOiJjNzY1NTk0NzQxZGU1ODU2MjJjNGJjZGQ1ZjRkOGM5MGY1ZjEzNTczZGQzNGJlM2E3MjZlZTAxZWM1ODZlNWRiIn0=`
 const url = `https://hd.oppo.com/platform/receive`;
 const method = `POST`;
 const headers = {
     'X-Requested-With': `XMLHttpRequest`,
     'Connection': `keep-alive`,
     'Accept-Encoding': `gzip, deflate, br`,
     'Content-Type': `application/x-www-form-urlencoded; charset=UTF-8`,
     'Origin': `https://hd.oppo.com`,
     'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 13_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 oppostore/200701 IOS/13.5.1 brand/iPhone model/iPhone11,8`,
     'Cookie': cookie,
     'Host': `hd.oppo.com`,
     'Referer': `https://hd.oppo.com/act/m/2021/0702/index.html?us=qiandao&um=task`,
     'Accept-Language': `zh-cn`,
     'Accept': `application/json, text/javascript, */*; q=0.01`
 };
 
 const myRequest = {
     url: url,
     method: method,
     headers: headers,
     body: body
 };



 function init(){
    for (let index = 0; index < 20; index++) {
        $task.fetch(myRequest).then(response => {
            console.log("850:[3386]"+response.statusCode + "\n\n" + response.body);
        }, reason => {
            console.log(reason.error);
    
        });
    }
    setTimeout(() => {
        $done();
    }, 3000);
 }

function start(){
    console.log('start')
    sleep(0.85).then(()=>{
        init()
    })
}

!(async () => {
    start()
})()
    .catch((e) => $.logErr(e))
    .finally(() => $.done())

 /**
 * 休眠
 * @param time    休眠时间，单位秒
 * @param desc
 * @returns {Promise<unknown>}
 */
function sleep(time, desc = 'sleep') {
    return new Promise(resolve => {
        //sleep
        setTimeout(() => {
            console.log(desc, time, 's')
            resolve(time)
        }, Math.floor(Math.abs(time) * 1000))
    })
}
