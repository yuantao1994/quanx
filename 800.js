/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */
 const body = `aid=1589&coupons_activity_id=50002880&coupon_mid=c6080b7950cb14701ce064966d86293b&coupons_code=50000300`;
 const cookie = `_dx_app_900cf4f8d0fb9f215d567b1c23d1fc38=60e45045AahYwbqGKCXZEweuUOYFsMzUaH74RBb1; _dx_uzZo5y=18e309f337496cb262448a8921f2727c0e6bce3ed9a0e67149052a1dca45ec7a928e1a7c; Op_lpvt_f18367c55fd7569d9000cd9986846577=1626050953; Op_lvt_f18367c55fd7569d9000cd9986846577=1625755840,1625755865,1626044378,1626050953; s_channel=ios_oppostore; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%22MzU4UHNnd2QvNXZRMU11Q0Z4Rm0vQT09%22%2C%22%24device_id%22%3A%2217a7bd5b86c113d-04e1a604af27f98-60324c25-370944-17a7bd5b86dff6%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_referrer%22%3A%22%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_utm_source%22%3A%22direct%22%2C%22%24latest_utm_medium%22%3A%22direct%22%2C%22%24latest_utm_campaign%22%3A%22direct%22%2C%22%24latest_utm_term%22%3A%22direct%22%7D%2C%22first_id%22%3A%22MzU4UHNnd2QvNXZRMU11Q0Z4Rm0vQT09%22%7D; source_type=505; PHPSESSID=p84nfqc0r6g9rh3sc1djeipal3; memberinfo=%7B%22id%22%3A%22744658219%22%2C%22name%22%3A%22%E7%94%A8%E6%88%B702654626861%22%2C%22oid%22%3A%22MzU4UHNnd2QvNXZRMU11Q0Z4Rm0vQT09%22%7D; ENCODE_TOKENSID=TOKEN_eyJhbGciOiJFQ0RTQSIsInYiOiIxIn0.eyJleHAiOjE2MjgxNjY4MDEyNDAsImlkIjoiNzQ0NjU4MjE5IiwiaWRjIjoic2hvdW1pbmciLCJ0aWQiOiJsbkUwaDJ0RHZEVDJlWTBrcmMwQWhYVHJJWjdxeWs0M0Ewa3dLTFUrUFpMTmJGUjE4QzVYaXlwOVBENGxqOGdKMGhzNDlKOHhRbWFnM29IaHlybkZZbk5YWE1DRXBaR3oxN0NNNWlQVlRiUT0ifQ.MEUCIQDs94hj_Fj4w82pv-vhgAnyt3XBNKT8NRoFwy6yoILlEwIgJNFdn8FMK82MPEb_JAx-G4n5vVelV3SyIrTy88Kks54; Personalized=1; TOKENSID=TOKEN_eyJhbGciOiJFQ0RTQSIsInYiOiIxIn0.eyJleHAiOjE2MjgxNjY4MDEyNDAsImlkIjoiNzQ0NjU4MjE5IiwiaWRjIjoic2hvdW1pbmciLCJ0aWQiOiJsbkUwaDJ0RHZEVDJlWTBrcmMwQWhYVHJJWjdxeWs0M0Ewa3dLTFUrUFpMTmJGUjE4QzVYaXlwOVBENGxqOGdKMGhzNDlKOHhRbWFnM29IaHlybkZZbk5YWE1DRXBaR3oxN0NNNWlQVlRiUT0ifQ.MEUCIQDs94hj_Fj4w82pv-vhgAnyt3XBNKT8NRoFwy6yoILlEwIgJNFdn8FMK82MPEb_JAx-G4n5vVelV3SyIrTy88Kks54; apkPkg=com.oppo.store; app_innerutm={"uc":"direct","um":"dagezi","ut":"3","us":"shouye"}; app_param={"appKey":"","romVersion":"13.5.1","rom":"iOS","sa_device_id":"ACC8A90B-4AAB-464F-8F1D-7F853454A0E8","apkPkg":"com.oppo.store","model":"iPhone11,8","appId":"","brand":"iPhone","guid":"ACC8A90B-4AAB-464F-8F1D-7F853454A0E8"}; app_utm={"utm_source_app":"direct","utm_campaign_app":"direct","utm_term_app":"direct","utm_medium_app":"direct"}; exp_id=; experiment_id=4866_134_6; log_id=; retrieve_id=; s_version=200701; sa_distinct_id=MzU4UHNnd2QvNXZRMU11Q0Z4Rm0vQT09; scene_id=; section_id=home_personalized; strategy_id=; uc=direct; um=dagezi; us=shouye; ut=3; utm_campaign=direct; utm_medium=direct; utm_source=direct; utm_term=direct; UM_distinctid=17a7bdba08894b-01c7162a428e54-60324c25-5a900-17a7bdba08990c`
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
            console.log(response.statusCode + "\n\n" + response.body);
    
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
    sleep(0.9).then(()=>{
        init()
    })
}

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
