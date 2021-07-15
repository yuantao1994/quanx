
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

 const body = `couponsActivityId=50002963&couponMid=d8711b57aff5e43c43cc87256a1f3441`;
 const cookie = `TOKEN_eyJhbGciOiJFQ0RTQSIsInYiOiIxIn0.eyJleHAiOjE2Mjg3NjY1MjYyOTUsImlkIjoiNzQ4MzQxNzE5IiwiaWRjIjoic2hvdW1pbmciLCJ0aWQiOiJMRitsVkZKOHRCN00vVVJpZk9FSkQzVHJJWjdxeWs0M0Ewa3dLTFUrUFpMTmJGUjE4QzVYaXlwOVBENGxqOGdKaEhuOGQ0WkMvRytxRWdhMk5nWloyYWUzdDRXQW5QbXJqeFJvaGJqdndYVT0ifQ.MEQCIB36p4t_W7eI7XgpIVHAguU0y3g62QIhP0GkIRo-raieAiBdPPUeQxpdCARTJAE1zux9bWOlG2uV6IjqugC4UzAIEQ`
 const url = `https://msec.opposhop.cn/users/v1/coupons/v2/drawCoupons`;
 const method = `POST`;
 const headers = {
 'TOKENSID' : cookie,
 'Accept-Encoding' : `gzip, deflate, br`,
 'Host' : `msec.opposhop.cn`,
 'guid' : `ACC8A90B-4AAB-464F-8F1D-7F853454A0E8`,
 'source_type' : `505`,
 'utm_term' : `direct`,
 'exp_id' : ``,
 'ua' : `oppostore`,
 'Connection' : `keep-alive`,
 'log_id' : ``,
 'sa_device_id' : `ACC8A90B-4AAB-464F-8F1D-7F853454A0E8`,
 'clientPackage' : `com.oppo.store`,
 'section_id' : `home_personalized`,
 'User-Agent' : `OPPOStore/2.7.1 (iPhone; iOS 13.5.1; Scale/2.00)`,
 'utm_source' : `direct`,
 'utm_medium' : `direct`,
 'us' : `shouye`,
 'uc' : `shouhuodizhi`,
 'Accept-Language' : `zh-Hans-CN;q=1`,
 'Content-Type' : `application/x-www-form-urlencoded`,
 'ut' : `direct`,
 'retrieve_id' : ``,
 'scene_id' : ``,
 'strategy_id' : ``,
 's_channel' : `ios_oppostore`,
 'experiment_id' : `4180_820_6`,
 's_version' : `200701`,
 'um' : `iotgezi`,
 'Accept' : `*/*`,
 'sa_distinct_id' : `blFGTkpxZnZYNlZVZU9aa0hGWVJrdz09`,
 'utm_campaign' : `direct`
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
            console.log("num1"+response.statusCode + "\n\n" + response.body);
    
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
    sleep(0.200).then(()=>{
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
