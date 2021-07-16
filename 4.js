/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */
 const body = `aid=1589&coupons_activity_id=50002974&coupon_mid=3ec686bfdbe7df1a0a9b29271e3a91d1&coupons_code=50000300`;
 const cookie = `optjdata2019jssdkcross=%7B%22vk%22%3A%22178f994aa0120d-057112cc4e408a-3f356b-1638720-178f994aa02b63%22%2C%22device_id%22%3A%22178f994aa0120d-057112cc4e408a-3f356b-1638720-178f994aa02b63%22%2C%22props%22%3A%7B%7D%7D; ut=direct; sa_distinct_id=ck5EYUM5SWdDWmROMzN6MVlRWVl6UT09; Op_lvt_f18367c55fd7569d9000cd9986846577=1623503672; memberinfo=%7B%22id%22%3A%22705004732%22%2C%22name%22%3A%22%E7%98%A6%E5%AD%90%E5%B0%8F%E5%BC%9F3812%22%2C%22oid%22%3A%22ck5EYUM5SWdDWmROMzN6MVlRWVl6UT09%22%7D; us=iotfenhuichang; utm_source=hd_direct; utm_medium=hd_direct; utm_campaign=hd_direct; utm_term=hd_direct; um=feng1; uc=direct; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%22ck5EYUM5SWdDWmROMzN6MVlRWVl6UT09%22%2C%22%24device_id%22%3A%22178f994aa8c75b-086f081a5c10ce-3f356b-1638720-178f994aa8d68e%22%2C%22props%22%3A%7B%22%24latest_referrer%22%3A%22%22%2C%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_utm_source%22%3A%22hd_direct%22%2C%22%24latest_utm_medium%22%3A%22hd_direct%22%2C%22%24latest_utm_campaign%22%3A%22hd_direct%22%2C%22%24latest_utm_term%22%3A%22hd_direct%22%7D%2C%22first_id%22%3A%22178f994aa8c75b-086f081a5c10ce-3f356b-1638720-178f994aa8d68e%22%7D; newopkey=QIn9bcM9wkpgji4f639xKYFILTjdRN6WYPM_Zx7t-rHeZzExKjBSIwIsT3BcIzB-9TjMO1N-eW0; opkey=eyJpdiI6IjI4VHRFUm03UW00aFFxQitaTW5Qenc9PSIsInZhbHVlIjoiS0M5VHdtTzFaWVRocTk5Yyt3QjlHNmpVSVpUejNVZlFWV3BLK0JoYzlodDlVTmlKZXdNelNOZUtLaEV6WjRzVDk0THhGM1p2UUhLS1ZNL1FvZ3NZTEJiUnQ2MmwyWkUzeFRpQ1Mvd0dFYnViMUt1U05PMDdEU1d6aUdOeC9JOVAiLCJtYWMiOiI0MDU2ZmQ1MDc3ODYwNjY3MTNlZTg1NTcxMmZiZWQ2NWNmOTVjN2EyMjQzNTU4YzE5OGExNjlmYTQ0NjdkYzJhIn0%3D; sessionId=QIn9bcM9wkpgji4f639xKYFILTjdRN6WYPM_Zx7t-rHeZzExKjBSIwIsT3BcIzB-9TjMO1N-eW0; NEWOPPOSID=eyJpdiI6IjBsOHV5c0NIQVorODY5QjNPWE9WakE9PSIsInZhbHVlIjoiTzlidzQ4Rys2Yk0yQ2I4Qkk3ZGNvNkxpWWtzZUNMendla3pjWUNHbmN6S0plaXJjWlFrM3lmc2NuQ3pOVy9QNFY4Y3UvYVNjdVFqY2FsNnNCNUkrZzhpZXVodmtTK2hraGxEQzlnM3pKbkNjL2pJaVpFaWhxQ2FwVExnQU03RTgiLCJtYWMiOiJhZDRlNTJiYWFlOTA5ODU5ZjkxOGJkODMyMTQ5ZmNiYTVjNmQyYjYxYzYzNzc1YjU5YjZiMDE2MDk5ZjkxN2U4In0=; oppostore_rsa_key=MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAJCYMLNhFBtDcbb72YZVDm%2FFG3m3oR4kU8f7JgvAmhI%2FlQvqhYczoJz8QZU30ml0nvtO2dB%2FfcqTEW9RyUhw8jUCAwEAAQ%3D%3D`
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
            console.log("150+[3812]"+response.statusCode + "\n\n" + response.body);
    
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
    sleep(0.150).then(()=>{
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
