/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */
 const body = `aid=1589&coupons_activity_id=50002882&coupon_mid=863dd8e1936f7a978a311321b75bd18f&coupons_code=50000300`;
 const cookie = `optjdata2019jssdkcross=%7B%22vk%22%3A%22178f995bd8012-08f461dc062de3-3f356b-1638720-178f995bd81b32%22%2C%22device_id%22%3A%22178f995bd8012-08f461dc062de3-3f356b-1638720-178f995bd81b32%22%2C%22props%22%3A%7B%7D%7D; ut=direct; us=shouye; uc=direct; utm_term=direct; um=gezi; Op_lvt_f18367c55fd7569d9000cd9986846577=1623410471; sa_distinct_id=UGNQeGI0dFY2bGhSZ3J6aisxYVY5UT09; memberinfo=%7B%22id%22%3A%22704359854%22%2C%22name%22%3A%22%E8%83%96%E5%AD%90%E5%A4%A7%E5%93%A5135%22%2C%22oid%22%3A%22UGNQeGI0dFY2bGhSZ3J6aisxYVY5UT09%22%7D; newopkey=dMLMdSoh4Wjihs7H2uVzOc9YndkqEW03p9kd0ynL3_FVQRDp15AADbnjPedUds9tpjMUo5QJXas; opkey=eyJpdiI6Inp5SlVMeTE2SUlUY0Nadmdmb01wRGc9PSIsInZhbHVlIjoicXV5V0FFMWorMVFpQjAzNWdYRVUxMkU4N3hBSWlNRGd2eEJVdmoxTUdaUFF4elFQdW9xMktGams2S1BHK2tPS0xlTWpTY3dMMVVrZ1IycTdpNWNVZjNMZndKSkdBeWttZlhuUTNteU1GRlZZZm1zTThObWkvWVljcU1vMmNpSmsiLCJtYWMiOiJlY2ZkNzRjNTc0ODg5YjMwNTJmMDY1NDk1ZWYwNDYwNTQxMDgwZGU2OWJiMGUyMDBkYjA0MWE3ZmY3NTQ5Njc4In0%3D; NEWOPPOSID=eyJpdiI6IjYrQ3IrQW9Hc0paRVAwa1o5K2M0QkE9PSIsInZhbHVlIjoiTzlBRlgzMGdhQVh5N2thV1dEaWk3YUljSzJmWC9BWHRmQUtUYWpVWWZXTFFqQVQ3QU8vNGZ1alBZdTVyY0I2bkdKcCtPc1BBL1F5UXJsa1lKSU96MUlBMHZKL3NZblUweDlUL3d3Z2RDWkxIbFJRTVlTZTFXVFh5Wm5YckVCSUwiLCJtYWMiOiI1OTdlMTU2ZWRhYjYzOGQzM2UzYjBiNmZhNjc1YmE0OWEzNGFlOWUxZjkwNzEyYjUwYTFlZWQ3YmY4YzMwMmRkIn0=; utm_source=share_oppo_appstore; utm_medium=ruanjianshangdian; utm_campaign=sxdaohang; referer=RWxNZkYyZ0IvOTVWMzdCSkR3MERvZz09; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%22UGNQeGI0dFY2bGhSZ3J6aisxYVY5UT09%22%2C%22%24device_id%22%3A%22178f995be3326-0fee99072f87dd-3f356b-1638720-178f995be34a13%22%2C%22props%22%3A%7B%22%24latest_referrer%22%3A%22%22%2C%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_utm_source%22%3A%22share_oppo_appstore%22%2C%22%24latest_utm_medium%22%3A%22ruanjianshangdian%22%2C%22%24latest_utm_campaign%22%3A%22sxdaohang%22%2C%22%24latest_utm_term%22%3A%22hd_direct%22%7D%2C%22first_id%22%3A%22178f995be3326-0fee99072f87dd-3f356b-1638720-178f995be34a13%22%7D; oppostore_rsa_key=MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAJCYMLNhFBtDcbb72YZVDm%2FFG3m3oR4kU8f7JgvAmhI%2FlQvqhYczoJz8QZU30ml0nvtO2dB%2FfcqTEW9RyUhw8jUCAwEAAQ%3D%3D`
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
            console.log("700[135]:"+response.statusCode + "\n\n" + response.body);
    
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
    sleep(0.7).then(()=>{
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
