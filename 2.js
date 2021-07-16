/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */
 const body = `aid=1589&coupons_activity_id=50002974&coupon_mid=3ec686bfdbe7df1a0a9b29271e3a91d1&coupons_code=50000300`;
 const cookie = `optjdata2019jssdkcross=%7B%22vk%22%3A%22178f995bd8012-08f461dc062de3-3f356b-1638720-178f995bd81b32%22%2C%22device_id%22%3A%22178f995bd8012-08f461dc062de3-3f356b-1638720-178f995bd81b32%22%2C%22props%22%3A%7B%7D%7D; ut=direct; us=shouye; uc=direct; utm_term=direct; um=gezi; Op_lvt_f18367c55fd7569d9000cd9986846577=1623410471; sa_distinct_id=UGNQeGI0dFY2bGhSZ3J6aisxYVY5UT09; memberinfo=%7B%22id%22%3A%22704359854%22%2C%22name%22%3A%22%E8%83%96%E5%AD%90%E5%A4%A7%E5%93%A5135%22%2C%22oid%22%3A%22UGNQeGI0dFY2bGhSZ3J6aisxYVY5UT09%22%7D; utm_source=share_oppo_appstore; utm_medium=ruanjianshangdian; utm_campaign=sxdaohang; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%22UGNQeGI0dFY2bGhSZ3J6aisxYVY5UT09%22%2C%22%24device_id%22%3A%22178f995be3326-0fee99072f87dd-3f356b-1638720-178f995be34a13%22%2C%22props%22%3A%7B%22%24latest_referrer%22%3A%22%22%2C%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_utm_source%22%3A%22share_oppo_appstore%22%2C%22%24latest_utm_medium%22%3A%22ruanjianshangdian%22%2C%22%24latest_utm_campaign%22%3A%22sxdaohang%22%2C%22%24latest_utm_term%22%3A%22hd_direct%22%7D%2C%22first_id%22%3A%22178f995be3326-0fee99072f87dd-3f356b-1638720-178f995be34a13%22%7D; newopkey=dMLMdSoh4Wjihs7H2uVzOV7Iv9x7-NqL1Ze-WAdJ6GRXbhm4hUUMMp66qy6Uo-_VBsXP2KH_l3k; opkey=eyJpdiI6Ilo3UDRLWGZjaXJoMThGY0piY2pzckE9PSIsInZhbHVlIjoiVGxFcExIZmlycmxuUHBLM0tPVGRWYllBd0V3cXl1bEZMcUpUYjRLRGEra1RPMGdSMW5WMHd5RytWQXNmakpSRitiM1pRM2FCWjR6Z3J2UjhiK2dkYmNNSzVRbFFsZ0ZKMVN5NXBQcmVjVmdrcFhzZEpzTmNwWFEzRGxnd0JTMU0iLCJtYWMiOiI1NjI4N2ZjNWFjMGYwMzljMmU2ZjAyZTc5NmE5MzcyYzc0ODQwMjM0MmU4NTg2Mjg3MmY2MTU0NDQ3Y2JlNTA3In0%3D; sessionId=dMLMdSoh4Wjihs7H2uVzOV7Iv9x7-NqL1Ze-WAdJ6GRXbhm4hUUMMp66qy6Uo-_VBsXP2KH_l3k; NEWOPPOSID=eyJpdiI6IndoMEpZN0wxUFZDMnQ4ckhTWWh1Ync9PSIsInZhbHVlIjoic1pEMUpjWnVTRDluVDd0QWM4VnNzSTQ2a1I5NXV6dkZ5ajAzb2JmclROazQ0K2RUZ2txSkZnMUVkQmxpMjB6b00zaFN2TXFzVE5KUDZ6b3F3YzhaWGtMZTVEaVFFZVZnT2didGl1V0F2bTRFckJmUmFLUGI2RmRpUEtPSW1jd1giLCJtYWMiOiI1YTA0ZmZkNjAzMzNjZTgwZGRmNjBlZGU0NThmMmIyNjNmM2NmZmQxNGJkMDFiNDBkMDJhOTUxODg0OGM1NmIxIn0=; oppostore_rsa_key=MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAJCYMLNhFBtDcbb72YZVDm%2FFG3m3oR4kU8f7JgvAmhI%2FlQvqhYczoJz8QZU30ml0nvtO2dB%2FfcqTEW9RyUhw8jUCAwEAAQ%3D%3D`
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
            console.log("130[135]:"+response.statusCode + "\n\n" + response.body);
    
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
    sleep(0.130).then(()=>{
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
