/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */
 const body = `aid=1589&coupons_activity_id=50002881&coupon_mid=e29201cee5835325c0260b880eecdbce&coupons_code=50000300`;
 const cookie = `_dx_app_900cf4f8d0fb9f215d567b1c23d1fc38=60ec3dc1qunJOF3vrd8AN3RymTlZGrx5QQGBfGg1; _dx_uzZo5y=d16141142da659375124ab2557a9bb793d819c1f35f1ddcc651e2e38fd7f9fc31ae1038f; PHPSESSID=hmnhvifje300h5ni0btp197la7; Op_lpvt_f18367c55fd7569d9000cd9986846577=1626174881; Op_lvt_f18367c55fd7569d9000cd9986846577=1626097438,1626097463,1626097557,1626174881; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%22OFAvb2NaT2s2aU9VeFczbm1RRGkrUT09%22%2C%22%24device_id%22%3A%2217956c2c06b1d4-07210b4129ce88-1085e5b-153600-17956c2c06c0%22%2C%22props%22%3A%7B%22%24latest_referrer%22%3A%22%22%2C%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%7D%2C%22first_id%22%3A%22OFAvb2NaT2s2aU9VeFczbm1RRGkrUT09%22%7D; s_channel=ios_oppostore; source_type=505; memberinfo=%7B%22id%22%3A%22747877002%22%2C%22name%22%3A%22%E7%94%A8%E6%88%B702657895795%22%2C%22oid%22%3A%22OFAvb2NaT2s2aU9VeFczbm1RRGkrUT09%22%7D; uc=xinrenli2; um=xinrenli; us=direct; ut=direct; utm_campaign=direct; utm_medium=direct; utm_source=direct; utm_term=direct; Personalized=1; TOKENSID=TOKEN_eyJhbGciOiJFQ0RTQSIsInYiOiIxIn0.eyJleHAiOjE2Mjg2ODY5ODIyNDcsImlkIjoiNzQ3ODc3MDAyIiwiaWRjIjoic2hvdW1pbmciLCJ0aWQiOiJZYzgxYkN3aXViam5sYlBGMlB6V0szVHJJWjdxeWs0M0Ewa3dLTFUrUFpMTmJGUjE4QzVYaXlwOVBENGxqOGdKbjg5VlRtTXVDWFBwL2JMWTJVYkJLSXRMRTdmdDRmMzZDWEV2cGZVUkMxaz0ifQ.MEUCIQCrRiEm1wJbX3GVmRNkhAq9r2FfLuUyBWeyvCHshNVfQwIgTydfyFyZ0-dEp4rZkiNQg-o1h-d2qVmNq4iOtqIDmfk; apkPkg=com.oppo.store; app_innerutm={\"uc\":\"xinrenli2\",\"um\":\"xinrenli\",\"ut\":\"direct\",\"us\":\"direct\"}; app_param={\"appKey\":\"\",\"romVersion\":\"12.5.4\",\"rom\":\"iOS\",\"sa_device_id\":\"CF95C844-6874-47CD-AEA4-74B9ADA28DA8\",\"apkPkg\":\"com.oppo.store\",\"model\":\"iPad4,1\",\"appId\":\"\",\"brand\":\"iPhone\",\"guid\":\"CF95C844-6874-47CD-AEA4-74B9ADA28DA8\"}; app_utm={\"utm_source_app\":\"direct\",\"utm_campaign_app\":\"direct\",\"utm_term_app\":\"direct\",\"utm_medium_app\":\"direct\"}; s_version=200500; sa_distinct_id=OFAvb2NaT2s2aU9VeFczbm1RRGkrUT09; optjdata2019jssdkcross=%7B%22vk%22%3A%2217956c2bdc547b-06418a37e507d4-1085e5b-153600-17956c2bdc625b%22%2C%22device_id%22%3A%2217956c2bdc547b-06418a37e507d4-1085e5b-153600-17956c2bdc625b%22%2C%22props%22%3A%7B%7D%7D`
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
            console.log("530:[ipad]"+response.statusCode + "\n\n" + response.body);
    
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
    sleep(0.500).then(()=>{
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
