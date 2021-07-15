
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */
 const body = `couponsActivityId=50002963&couponMid=d8711b57aff5e43c43cc87256a1f3441`;
 const cookie = `TOKEN_eyJhbGciOiJFQ0RTQSIsInYiOiIxIn0.eyJleHAiOjE2Mjg2ODY5ODIyNDcsImlkIjoiNzQ3ODc3MDAyIiwiaWRjIjoic2hvdW1pbmciLCJ0aWQiOiJZYzgxYkN3aXViam5sYlBGMlB6V0szVHJJWjdxeWs0M0Ewa3dLTFUrUFpMTmJGUjE4QzVYaXlwOVBENGxqOGdKbjg5VlRtTXVDWFBwL2JMWTJVYkJLSXRMRTdmdDRmMzZDWEV2cGZVUkMxaz0ifQ.MEUCIQCrRiEm1wJbX3GVmRNkhAq9r2FfLuUyBWeyvCHshNVfQwIgTydfyFyZ0-dEp4rZkiNQg-o1h-d2qVmNq4iOtqIDmfk`
 const url = `https://msec.opposhop.cn/users/v1/coupons/v2/drawCoupons`;
 const method = `POST`;
 const headers = {
 'TOKENSID' : cookie,
 'Accept-Encoding' : `gzip, deflate, br`,
 'Host' : `msec.opposhop.cn`,
'GSLB-OKHTTP' : `1.2.0`,
'source_type' : `505`,
'utm_term' : `direct`,
'guid' : `CF95C844-6874-47CD-AEA4-74B9ADA28DA8`,
'TH-RID' : `531441626180916908`,
'TAP-GSLB' : `0,0`,
'ua' : `oppostore`,
'Connection' : `close`,
'clientPackage' : `com.oppo.store`,
'sa_device_id' : `CF95C844-6874-47CD-AEA4-74B9ADA28DA8`,
'TH-HTTP-DNS' : `1`,
'Accept-Language' : `zh-Hans-HK;q=1`,
'User-Agent' : `huan tai shang cheng/2.5.0 (iPad; iOS 12.5.4; Scale/2.00)`,
'utm_source' : `direct`,
'utm_medium' : `direct`,
'us' : `direct`,
'uc' : `shouhuodizhi`,
'Content-Type' : `application/x-www-form-urlencoded`,
'ut' : `direct`,
's_channel' : `ios_oppostore`,
's_version' : `200500`,
'um' : `gongju`,
'TAP-OS' : `iOS`,
'sa_distinct_id' : `OFAvb2NaT2s2aU9VeFczbm1RRGkrUT09`,
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
