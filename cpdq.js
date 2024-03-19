/******************************

脚本功能：菜谱大全+解锁VIP

*******************************

[rewrite_local]

^https:\/\/apiios_dq\.xiangha\.com url script-response-body https://raw.githubusercontent.com/Apibug/QuantumultX/main/cpdq.js

[mitm] 

hostname = dq.xiangha.com,apiios_dq.xiangha.com

*******************************/



body=$response.body.replace(/\"is_vip":\d/g,'"is_vip":2').replace(/\"is_open_vip":\d/g,'"is_open_vip":1').replace(/\"serverTime":\d+/g,'"serverTime":4093982700').replace(/\"isShow":"\d"/g,'"isShow":"2"').replace(/\"nickName":".*?"/g,'"nickName":"Apibug破解"');
$done({'body':body});
