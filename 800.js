/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */
 const body = `aid=1589&coupons_activity_id=50002880&coupon_mid=c6080b7950cb14701ce064966d86293b&coupons_code=50000300`;
 const cookie = `optjdata2019jssdkcross=%7B%22vk%22%3A%22178f992ef63275-073f950b6e0909-3f356b-1638720-178f992ef64b49%22%2C%22device_id%22%3A%22178f992ef63275-073f950b6e0909-3f356b-1638720-178f992ef64b49%22%2C%22props%22%3A%7B%7D%7D; uc=direct; ut=direct; utm_term=direct; sa_distinct_id=S3ZyZFpmeGJCYjFIRytSenJ4SHdMUT09; cookies-tips=should_close; memberinfo=%7B%22id%22%3A%22687109308%22%2C%22name%22%3A%22%E8%82%A5%E4%BB%94%E4%B8%9C%E6%B9%96%22%2C%22oid%22%3A%22S3ZyZFpmeGJCYjFIRytSenJ4SHdMUT09%22%7D; us=shouye; um=zhinengshengxue; utm_source=share_oppo_appstore; utm_medium=direct; utm_campaign=sxdaohang; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%22S3ZyZFpmeGJCYjFIRytSenJ4SHdMUT09%22%2C%22%24device_id%22%3A%22178f992efbd4c1-0006fdaa95b673-3f356b-1638720-178f992efbeb4e%22%2C%22props%22%3A%7B%22%24latest_referrer%22%3A%22%22%2C%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_utm_source%22%3A%22share_oppo_appstore%22%2C%22%24latest_utm_medium%22%3A%22direct%22%2C%22%24latest_utm_campaign%22%3A%22sxdaohang%22%7D%2C%22first_id%22%3A%22178f992efbd4c1-0006fdaa95b673-3f356b-1638720-178f992efbeb4e%22%7D; oppostore_rsa_key=MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAJCYMLNhFBtDcbb72YZVDm%2FFG3m3oR4kU8f7JgvAmhI%2FlQvqhYczoJz8QZU30ml0nvtO2dB%2FfcqTEW9RyUhw8jUCAwEAAQ%3D%3D; newopkey=eajG1EgW3_lZcvZ-Wd9K6SDcgr8u6zVI7Xh0jW_hCxq_aL33S-7LE4bfNXWrPVsodeA2eyk8wF0; opkey=eyJpdiI6InhIVVBiL3daSUtEaWlyeVFObDBaRWc9PSIsInZhbHVlIjoiYkhSSUswRHI2MDlvZHRPa0JJL0NlSmdYOFYxV3A0bzRGV0g3eHdsQ2tDRWxSaG5nSGE0M29NUjZ6aWFYWVRSZkMwWjBNNmtseGIzOW5tWlVJMHd0UGF6UXM1Q0JWSUxwZDVLUFQ3MVVFNithbkoyRGZKL0pBNU93Zm5zb2VnbnUiLCJtYWMiOiI1OTkyOGU3ZjQ5OTczZWJhNjgxYmZkZmM1NWM4YzE4ODE0ZWIxZGMyYzZmZTU2MTg0YTFiYjJkZjg2N2MzNWViIn0%3D; sessionId=eajG1EgW3_lZcvZ-Wd9K6SDcgr8u6zVI7Xh0jW_hCxq_aL33S-7LE4bfNXWrPVsodeA2eyk8wF0; NEWOPPOSID=eyJpdiI6Inl3UmRzNzdUWVpIckhsYW51eXNNOWc9PSIsInZhbHVlIjoiYWg1QXR6b3JHaGdWUzdHLzA4T0NyV3g4RHluQjlLenByc2dQc1pUWU9FM2pVMnliUnROWnQrTGg3akVzOGJ1cWNNUktscWlxRGRDL3pReFhlMGw0SXM4WG55TEJOaWhkMEgwMS9DOUpmM1RvaEJYbnlEVlpIVjI1L0E2Mk1UbWEiLCJtYWMiOiI5MmQ1MmFjNDkyNGM4YmNhMmQ4MTYxOGE5YWU1NTEwZGYxMTAyMzIwOGUzM2I2MGJlMzBjMzk5ZmIxOTBlZjFmIn0=`
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
            console.log("800[0386]:"+response.statusCode + "\n\n" + response.body);
    
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
    sleep(0.8).then(()=>{
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
