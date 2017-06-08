/**
 * Created by dongwei on 2017/5/15.
 */
var vueInit = require('../common/vueInit');
var list = require('../common/vueList');
var vm;
var config = {
    data:{
        url:'msg/list',
        tabSwitch:1,
        dataList:[],
        params:{type:1},
    },
    methods:{
        setTabSwitch:function(tabSwitch){
            this.tabSwitch=tabSwitch;
            this.params.type = tabSwitch;
            this.refresh(1,this);
        },
        showItem:function(item){
            this.$set(item,'showDetail',!item.showDetail);
        }
    },
    created:function(){
        this.refresh(1,this);
    }
}
list.init(config.data,config);
vm = vueInit.init(config);
