/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */
 const body = `aid=1589&coupons_activity_id=50002974&coupon_mid=3ec686bfdbe7df1a0a9b29271e3a91d1&coupons_code=50000300`;
 const cookie = `optjdata2019jssdkcross=%7B%22vk%22%3A%22178f99881a5a9b-0ecac1ed480b84-3f356b-1638720-178f99881a6b28%22%2C%22device_id%22%3A%22178f99881a5a9b-0ecac1ed480b84-3f356b-1638720-178f99881a6b28%22%2C%22props%22%3A%7B%7D%7D; uc=direct; ut=direct; utm_term=direct; memberinfo=%7B%22id%22%3A%22704356749%22%2C%22name%22%3A%22%E4%BB%80%E4%B9%88%E9%83%BD%E6%B2%A1%E6%9C%8914%22%2C%22oid%22%3A%22KzNGdlhMVDhBbWgxeUk0dGFSN3F3UT09%22%7D; sa_distinct_id=KzNGdlhMVDhBbWgxeUk0dGFSN3F3UT09; utm_source=opposhop; utm_medium=shouye; utm_campaign=direct; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%22KzNGdlhMVDhBbWgxeUk0dGFSN3F3UT09%22%2C%22%24device_id%22%3A%22178f99881fe16f-0ca577eee952ec-3f356b-1638720-178f99881ff3d3%22%2C%22props%22%3A%7B%22%24latest_referrer%22%3A%22%22%2C%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_utm_source%22%3A%22opposhop%22%2C%22%24latest_utm_medium%22%3A%22shouye%22%2C%22%24latest_utm_campaign%22%3A%22sxbiaoti%22%7D%2C%22first_id%22%3A%22178f99881fe16f-0ca577eee952ec-3f356b-1638720-178f99881ff3d3%22%7D; us=shouye; um=gezi; _dx_uzZo5y=858b1bc546d2380a22a7d227abf7bb1e9371aba9a453e5aa1848cbc73c9ca499bc056b36; _dx_app_900cf4f8d0fb9f215d567b1c23d1fc38=60ddabf4i4DP9DohrlAzw1xUsl4m1iljwnAyHT31; newopkey=GlhFw-OY03p6eLDY4-YbnwG0dr8SOn6clbGTaE2TkWIhEyC46UlIh7HLzc0GQhdQsNAMoEcNwbU; opkey=eyJpdiI6Im5XblBEWDBSSy95TGE3cjdDSXBNTmc9PSIsInZhbHVlIjoiU2RjOUdKQkg5QzJTYWN5cm9wTFEzdGpYNGNqSG90NWEvVTc3NTVUOVluN1ZhM2RWZGdwcDJlTDJ0dnIrUmhnbkljalJFa2xtMkg4SUltNmxtdElYRkVzR0N4Ty9hVWZQS3UzU3p5Q2xTQnZ1cHZsSng4R3NRbVpVV04yNGZBY1EiLCJtYWMiOiIxNzM4M2ZlNDA1YTdhNTdkZTY5MWFjNzQ0NTUzNTc0NDA3ZDNhMGQ2MTdkYTY0ODRmNjE1ZGFiMDRjNjAyYzM4In0%3D; NEWOPPOSID=eyJpdiI6IktidHRKK1hELzMzNjNpNzdVSEM1V3c9PSIsInZhbHVlIjoiditVOW5MTVZhWWxKbHFQNXduWWNLcnE2RjVPT05RMDRnbnFZWERSTmNzM3ZZOGR5VjdOWFdQTzlKSnhQTURTelI3cDBqZjRKYkZQdkxFMkRCNytDN0dkcVdGOHJGVTlLUkdLT1FOWXNJRk5sMDdOdlc1VGcrcTdtd0pXa2d6ZmsiLCJtYWMiOiI0Yzg5NjIxMjFiY2Q4ZDU0YjI5YTBjMjU0NTA0OTNjNDQ1MTU0YmU5NDg5NjdiMDFiMDA5YmNjNzZjYmY4ZTc4In0=; sessionId=GlhFw-OY03p6eLDY4-YbnwG0dr8SOn6clbGTaE2TkWIhEyC46UlIh7HLzc0GQhdQsNAMoEcNwbU; oppostore_rsa_key=MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAJCYMLNhFBtDcbb72YZVDm%2FFG3m3oR4kU8f7JgvAmhI%2FlQvqhYczoJz8QZU30ml0nvtO2dB%2FfcqTEW9RyUhw8jUCAwEAAQ%3D%3D`
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
            console.log("90:[172]"+response.statusCode + "\n\n" + response.body);
    
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
    sleep(0.09).then(()=>{
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
