var utils = require('./utils');
var services = require('./services');
var listConfig = {
    url:'',
    dataList:[],
    total:0,
    page:1,
    pageSize:10,
    params:{}
}
module.exports= {
    init:function(listNode,config){
        utils.mix(listNode,utils.mix({},listConfig,listNode));
        config.methods.refresh=function(page,listNode,options){
            if(page){
                listNode.page=page;
            }
            var params = {page:listNode.page,pageSize:listNode.pageSize,where:{}};
            params.where=utils.mix(params.where,listNode.params);
            params.where = JSON.stringify(params.where);
            services.get(listNode.url,params,function(code,data,msg){
                if(code==services.CODE_SUCC){
                    listNode.dataList = data.dataList;
                    listNode.total=data.count;
                }else{

                }
            });
        }
    }
}