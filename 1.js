/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */
 const body = `aid=1589&coupons_activity_id=50002974&coupon_mid=3ec686bfdbe7df1a0a9b29271e3a91d1&coupons_code=50000300`;
 const cookie = `optjdata2019jssdkcross=%7B%22vk%22%3A%22178f996a8d83ff-0519333999992e-3f356b-1638720-178f996a8d9b58%22%2C%22device_id%22%3A%22178f996a8d83ff-0519333999992e-3f356b-1638720-178f996a8d9b58%22%2C%22props%22%3A%7B%7D%7D; ut=direct; utm_term=direct; sa_distinct_id=VE1Sc0IyTzZjUDloUVBCOHloeEVkQT09; memberinfo=%7B%22id%22%3A%22604688069%22%2C%22name%22%3A%22%E8%83%96%E5%AD%90%E5%A4%A7%E5%93%A5134%22%2C%22oid%22%3A%22VE1Sc0IyTzZjUDloUVBCOHloeEVkQT09%22%7D; us=shouye; _dx_uzZo5y=c6390d53be3ceab5ac62236a1e748f615e9e037524cf752bbca89c8b87017342ac9aa6aa; um=banner; uc=zhinengjiaju; utm_source=share_oppo_appstore; utm_medium=ruanjianshangdian; utm_campaign=sxdaohang; _dx_app_900cf4f8d0fb9f215d567b1c23d1fc38=60ed93fbpYmqv4jN1PLeWzgGmT48PVBSImIdzkA1; _dx_captcha_vid=17AA00A17F1900CF4F8D05E2D60D2E4464A838F263B69196FE9AF%40gz; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%22VE1Sc0IyTzZjUDloUVBCOHloeEVkQT09%22%2C%22%24device_id%22%3A%22178f996a9391e8-0705e30bf7d8e6-3f356b-1638720-178f996a93aae7%22%2C%22props%22%3A%7B%22%24latest_referrer%22%3A%22%22%2C%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_utm_source%22%3A%22share_oppo_appstore%22%2C%22%24latest_utm_medium%22%3A%22ruanjianshangdian%22%2C%22%24latest_utm_campaign%22%3A%22sxdaohang%22%7D%2C%22first_id%22%3A%22178f996a9391e8-0705e30bf7d8e6-3f356b-1638720-178f996a93aae7%22%7D; newopkey=4iaLeGdbMOYhYzpR8o4jw_G2WQLUgQn4Zprr_GPYOXV65In3NUoC9BweDIWZrCqEYEFvyoBzR4k; opkey=eyJpdiI6ImNGMFJ5SEo3WCtVV200WDlsWE52eUE9PSIsInZhbHVlIjoiVHVPOGVSbm5ubkZCaHhqbTZDZElTejc3aWNRNkNmYW9rVVlMNlN6TnFMNytid1llK1pBaGtCRlQ0Z01CT1c2dkhDSlFJeFBYM3dqZ1phTzN5bUFqK1VrWExpRFU2c2phbEs3Z1hHempydjlKMWo1WC91Q2FaUzdndktBdmQvWHciLCJtYWMiOiJkMjdkN2M2N2FkM2M3YjVhMjQwYWNmZjdjOTQxZmIzNmQzNGQ1NzJiMDQxOGJjMzNkOTNlODMyNmM4OTc5NGJjIn0%3D; sessionId=4iaLeGdbMOYhYzpR8o4jw_G2WQLUgQn4Zprr_GPYOXV65In3NUoC9BweDIWZrCqEYEFvyoBzR4k; NEWOPPOSID=eyJpdiI6Im4vN2ExeVNZN0ZrZk1EdklIeXRxVlE9PSIsInZhbHVlIjoiOTBzVFo3QzZZejh5S3A3M2ZVNVdpRlV2aGdGM3A4MEQrS0F2MDF6NXdmZVZKR3hyUVNPd05yak5PVVdWdHV4QnBLT1AxQnJKOHBKcVU1eDg4RytNQ3BFdk43bTRvZ3dSeDNWVVJFa0dkNytzTUY2bXh2ZndaZSs0NHlQb2Fpb1ciLCJtYWMiOiJlMmYzZTAwZmU0ZDY1OWY1NDg4ZDMxZjkzOTkxYmI0YjNhNWY3NzU4YzljMDhlZDgyZTUzNTYxZGU1YjY5ZjU5In0=; oppostore_rsa_key=MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAJCYMLNhFBtDcbb72YZVDm%2FFG3m3oR4kU8f7JgvAmhI%2FlQvqhYczoJz8QZU30ml0nvtO2dB%2FfcqTEW9RyUhw8jUCAwEAAQ%3D%3D`
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
            console.log("110:[134]"+response.statusCode + "\n\n" + response.body);
    
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
    sleep(0.110).then(()=>{
        init()
    })
}

!(async () => {
    start()
})()
    .catch((e) => $.logErr(e))
    .finally(() => $.done())


 /**
 * ??????
 * @param time    ????????????????????????
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
