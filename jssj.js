[rewrite_local]
^https:\/\/uc-api\.jin10\.com\/userinfo url script-response-body https://raw.githubusercontent.com/Apibug/QuantumultX/main/jssj.js
[mitm] 
hostname = uc-api.jin10.com

*******************************/

/*
*Apibug - www.apibug.com
*/
var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/vip';


if (url.indexOf(vip) != -1) {
obj.data.nick = "Apibug破解";
obj.data.avatar = "http://q2.qlogo.cn/headimg_dl?dst_uin=9147218&spec=100";
obj.data.is_valid_user = "2099-12-21 23:59:59";
obj.data.vip_expiration = 8888888888;
obj.data.vip_level = 2;
obj.data.level = 999;
obj.data.home_prompt = "您的会员将于2099/01/01过期。";

	body = JSON.stringify(obj);
}


$done({body});
