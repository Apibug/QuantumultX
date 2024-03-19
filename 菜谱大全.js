*******************************

[rewrite_local]

^https:\/\/apiios_dq\.xiangha\.com url script-response-body https://raw.githubusercontent.com/Apibug/QuantumultX/main/%E8%8F%9C%E8%B0%B1%E5%A4%A7%E5%85%A8.js
[mitm] 

hostname = dq.xiangha.com,apiios_dq.xiangha.com

*******************************/
var _0x1dc272=_0x2e482c(this,function(){
	var _0x149624=function(){
		var _0x3d66a6=_0x149624.constructor('return /" + this + "/')().compile('^([^ ]+( +[^ ]+)+)+[^ ]}');
		return!_0x3d66a6.test(_0x1dc272);
	};
	return _0x149624();
});
_0x1dc272();
body=$response.body.replace(/\"is_vip":\d/g,'"is_vip":2').replace(/\"is_open_vip":\d/g,'"is_open_vip":1').replace(/\"serverTime":\d+/g,'"serverTime":4093982700').replace(/\"isShow":"\d"/g,'"isShow":"2"').replace(/\"nickName":".*?"/g,'"nickName":"Apibug破解"');
$done({'body':body});
