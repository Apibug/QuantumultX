[rewrite_local]
^https:\/\/uc-api\.jin10\.com url script-response-body https://raw.githubusercontent.com/Apibug/QuantumultX/main/jssj.js
[mitm] 
hostname = uc-api.jin10.com

*******************************/

/*
*Apibug - www.apibug.com
*/
var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/userinfo';


if (url.indexOf(vip) != -1) {
obj.data.nick = "Apibug破解";
obj.data.vip_str ="Apibug破解";
obj.data.avatar = "http://q2.qlogo.cn/headimg_dl?dst_uin=9147218&spec=100";
obj.data.vip_expiration = "2099-12-29 23:59:59";
obj.data.vip_level = 2;
obj.data.level = 999;

	body = JSON.stringify(obj);
}


$done({body});
