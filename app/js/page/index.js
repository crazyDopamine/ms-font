/**
 * Created by dongwei on 2017/5/15.
 */
var vueInit = require('../common/vueInit');
var services = require('../common/services');
var list = require('../common/vueList');
var vm;
var config = {
    data:{
        notify:{
            url:'msg/list',
            pageSize:5,
            params:{
                type:1
            }
        },
        media:{
            url:'msg/list',
            pageSize:5,
            params:{
                type:2
            }
        }
    },
    methods:{
    },
    created:function(){
        this.refresh(1,this.notify);
        this.refresh(1,this.media);
    }
}
list.init(config.data.notify,config);
list.init(config.data.media,config);
vm = vueInit.init(config);
