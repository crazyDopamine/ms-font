<template>
    <header>
        <div class="top-bar">
            <ul class="top-tab middle clearfix">
                <li class="float-left"><img class="logo" src="/dist/img/logo.png"></li>
                <li class="top-tab-item">
                    <a href="/index.html">
                        首页
                    </a>
                </li>
                <li class="tab-drop-down top-tab-item">
                    关于我们
                    <ul class="tab-drop-down-container">
                        <li><a href="/about.html#companyInfo">公司简介</a></li>
                        <li><a href="/about.html#team">管理团队</a></li>
                        <li><a href="/about.html#partner">合作伙伴</a></li>
                    </ul>
                </li>
                <li class="tab-drop-down top-tab-item">
                    公司业务
                    <ul class="tab-drop-down-container">
                        <li><a href="/business.html#t1">直接租赁</a></li>
                        <li><a href="/business.html#t2">售后租赁</a></li>
                        <li><a href="/business.html#t3">转租赁</a></li>
                        <li><a href="/business.html#t4">联合租赁</a></li>
                    </ul>
                </li>
                <li class="tab-drop-down top-tab-item">
                    新闻公告
                    <ul class="tab-drop-down-container">
                        <li><a href="/notify.html">公司公告</a></li>
                        <li><a href="/notify.html">媒体报道</a></li>
                    </ul>
                </li>
                <li class="tab-drop-down top-tab-item">
                    加入我们
                    <ul class="tab-drop-down-container">
                        <li><a href="/recruit.html">人才理念</a></li>
                        <li><a href="/recruit.html#r2">人才招聘</a></li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="banner-area">
            <div class="carousel-imgs">
                <img class="index-banner" src="/dist/img/banner-1.jpg" v-show="bannerSwitch==1" :class="bannerSwitch==1?'banner-show':''">
                <img class="index-banner" src="/dist/img/banner-2.jpg" v-show="bannerSwitch==2" :class="bannerSwitch==2?'banner-show':''">
                <img class="index-banner" src="/dist/img/banner-3.jpg" v-show="bannerSwitch==3" :class="bannerSwitch==3?'banner-show':''">
                <div class="img-mask"></div>
                <span class="banner-label">
                        致力打造一流融资租赁公司<br/>
                        全面服务实体经济发展<br/>
                        助力新能源
                    </span>
                <ul class="carousel-bar">
                    <li class="carousel-item" :class="bannerSwitch==1?'active':''" @click="nextBanner(1)"></li>
                    <li class="carousel-item" :class="bannerSwitch==2?'active':''" @click="nextBanner(2)"></li>
                    <li class="carousel-item" :class="bannerSwitch==3?'active':''" @click="nextBanner(3)"></li>
                </ul>
            </div>
        </div>

    </header>
</template>
<script>
    module.exports = {
        data:function(){
            return {bannerSwitch:1}
        },
        methods:{
            nextBanner:function(index){
                if(index>3){
                    index = 1
                }else if(index<1){
                    index = 3;
                }
                this.bannerSwitch=index;
            }
        },
        created:function(){
            var self = this;
            setInterval(function(){
                self.nextBanner(self.bannerSwitch+1);
            },10000);

        }
    }
</script>