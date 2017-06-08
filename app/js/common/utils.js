/**
 * Created by dongwei on 2017/5/15.
 */
var mix = function(){
    var argu = arguments;
    if(argu.length<=0)return {};
    var obj = argu[0];
    if(!obj)obj={};
    var keys,key;
    for(var i=1;i<argu.length;i++){
        if(argu[i]&&typeof argu[i] == 'object'){
            keys = Object.keys(argu[i]);
            for(var j=0;j<keys.length;j++){
                key = keys[j];
                if(typeof argu[i][key] == 'object') {
                    obj[key]=mix(obj[key],argu[i][key]);
                }else{
                    obj[key]=argu[i][key];
                }
            }
        }
    }
    return obj;
}

module.exports={
    mix:mix
}