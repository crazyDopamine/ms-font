/**
 * Created by dongwei on 2017/5/15.
 */
var Vue = require('vue');
var widget = require('./widget/widget');
var css = require('../../sass/style.scss');
var iview = require('iview');
var utils = require('./utils');
var filters = require('./filters');

for(var key in filters){
    Vue.filter(key,filters[key]);
}
iview.install(Vue);

module.exports={
    init:function(config){
        var vm;
        var data = {
        }
        config.data=utils.mix(config.data,data);
        // config.router = router;
        // router.afterEach(function(route){
        //     config.data.path = route.path;
        // });
        vm = new Vue(config).$mount('#app');
        window.vm = vm;
        return vm;
    }
}