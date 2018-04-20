<style>
    @import '../../styles/index.css';
</style>

<template>
    <div>
            <!--header-->
            <div class="header">
                <div class="left">
                    <a class="logo"  target="_blank" href="">
                    </a>
                    <div class="text">
                        <span class="text_t">开发者门户</span>
                        <span class="text_t">|</span>
                        <span class="text_t">1.0</span>
                        <span class="text_t">BETA</span>
                    </div>
                </div>
                <div class="right">
                    <div class="button blue" id="login">
                        <span class="text">登录到...</span>
                        <img class="icon" id="arrow" src="src/images/home/bottom.svg" width="200" height="200"/>
                    </div>
                    <a class="blue_text" href="" target="">帐号及权限申请</a>
                </div>
                <div class="nav" id="nav" style="display: none">
                    <a class="item" target="_blank" href="">
                        <div class="title">DEV</div>
                        <div class="gray">游戏开发者平台</div>
                    </a>
                    <a class="item" target="_blank" href="">
                        <div class="title">SDK自动打包</div>
                        <div class="gray">打包工具</div>
                    </a>
                    <a class="item" target="_blank" href="">
                        <div class="title">DATAX</div>
                        <div class="gray">数据分析平台</div>
                    </a>
                    <a class="item" target="_blank" href="">
                        <div class="title">讯风</div>
                        <div class="gray">在线运营平台</div>
                    </a>
                    <a class="item" target="_blank" href="">
                        <div class="title">DGC</div>
                        <div class="gray">开发者管理平台</div>
                    </a>
                    <a class="item" target="_blank" href="">
                        <div class="title">渠道管理</div>
                        <div class="gray">渠道号管理平台</div>
                    </a>
                </div>
            </div>
            <!--banner-->
            <div class="banner">
                <img src="src/images/home/bg@3x.png">
                <div class="btn">
                    <a target="_blank" href="http://dc.idreamsky.com/">文档中心</a>
                    <a target="_blank" href="">SDK下载</a>
                </div>
            </div>
            <!--func-->
            <div class="func">
                <div class="item">
                    <div class="title">
                        <span class="icon icon_avatar"></span>
                        <span class="text">开通帐号</span>
                    </div>
                    <div class="content">
                        <a href="" target="_blank">开发者中心帐号申请</a>
                        <a href="" target="_blank">SSO单点登录帐号</a>
                    </div>
                </div>
                <div class="item">
                    <div class="title">
                        <span class="icon icon_app"></span>
                        <span class="text">应用配置管理</span>
                    </div>
                    <div class="content">
                        <a href="" target="_blank">应用管理</a>
                        <a href="" target="_blank">道具管理</a>
                        <a href="" target="_blank">支付优惠配置</a>
                        <a href="" target="_blank">短代计费管理</a>
                        <a href="" target="_blank">版本管理</a>
                        <a href="" target="_blank">渠道号管理</a>
                    </div>
                </div>
                <div class="item">
                    <div class="title">
                        <span class="icon icon_sdk"></span>
                        <span class="text">SDK集成</span>
                    </div>
                    <div class="content">
                        <a href="" target="_blank">乐逗SDK</a>
                        <a href="" target="_blank">「插件」数据采集</a>
                        <a href="" target="_blank">「插件」Bugly 错误采集</a>
                        <a href="" target="_blank">更多…</a>
                    </div>
                </div>
                <div class="item">
                    <div class="title">
                        <span class="icon icon_channel"></span>
                        <span class="text">渠道分包</span>
                    </div>
                    <div class="content">
                        <a href="" target="_blank">渠道参数配置</a>
                        <a href="" target="_blank">自动化打包</a>
                    </div>
                </div>
                <div class="item">
                    <div class="title">
                        <span class="icon icon_data"></span>
                        <span class="text">数据分析</span>
                    </div>
                    <div class="content">
                        <a href="" target="_blank">OA权限申请</a>
                        <a href="" target="_blank">可视化分析 </a>
                        <a href="" target="_blank">数据提取</a>
                        <a href="" target="_blank">业务数据简报</a>
                    </div>
                </div>
                <div class="item">
                    <div class="title">
                        <span class="icon icon_operate"></span>
                        <span class="text">在线运营</span>
                    </div>
                    <div class="content">
                        <a href="" target="_blank">OA权限申请</a>
                        <a href="" target="_blank">游戏补单</a>
                        <a href="" target="_blank">问卷调查</a>
                        <a href="" target="_blank">游戏公告</a>
                        <a href="" target="_blank">游戏收件箱消息</a>
                        <a href="" target="_blank">兑换码管理</a>
                    </div>
                </div>
            </div>
            <!--product-->
            <div class="product">
                <div class="title">产品</div>
                <div class="box">
                    <div class="item">
                        <div class="small_title">
                            <a href="">DEV</a>
                        </div>
                        <div class="big_title">游戏开发者平台</div>
                        <div class="text">
                            应用创建及应用下道具管理、版本管理、计费代码等配置
                        </div>
                        <div class="instructions">
                            <a href="" target="_blank">使用说明</a>
                        </div>
                    </div>
                    <div class="item">
                        <div class="small_title">
                            <a href="" target="_blank">SDK自动打包</a>
                        </div>
                        <div class="big_title">游戏开发者平台</div>
                        <div class="text">
                            渠道参数配置与分包，全面支持短代业务
                        </div>
                        <div class="instructions">
                            <a href="" target="_blank">使用说明</a>
                        </div>
                    </div>
                    <div class="item">
                        <div class="small_title">
                            <a href="">DATA X</a>
                        </div>
                        <div class="big_title">数据分析平台</div>
                        <div class="text">
                            多维的业务数据报表和可视化数据展示，支持自定义数据提取
                        </div>
                        <div class="instructions">
                            <a href="" target="_blank">使用说明</a>
                        </div>
                    </div>
                    <div class="item">
                        <div class="small_title">
                            <a href="" target="_blank">迅风</a>
                        </div>
                        <div class="big_title">在线运营平台</div>
                        <div class="text">
                            消息服务、兑换码管理和运营活动配置
                        </div>
                        <div class="instructions">
                            <a href="" target="_blank">使用说明</a>
                        </div>
                    </div>
                </div>
                <div class="box" style="margin-top: 56px;">
                    <div class="item">
                        <div class="small_title">
                            <a href="" target="_blank">DGC</a>
                        </div>
                        <div class="big_title">游戏开发者平台</div>
                        <div class="text">
                            平台级运营商管控、渠道服务端参数配置等
                        </div>
                        <div class="instructions">
                            <a href="">使用说明</a>
                        </div>
                    </div>
                    <div class="item">
                        <div class="small_title">
                            <a href="" target="_blank">渠道管理</a>
                        </div>
                        <div class="big_title">渠道号管理平台</div>
                        <div class="text">
                            渠道商管理与渠道号生成
                        </div>
                        <div class="instructions">
                            <a href="" target="_blank">使用说明</a>
                        </div>
                    </div>
                    <div class="item item_03"></div>
                    <div class="item item_04"></div>
                </div>
            </div>
            <!--footer-->
            <div class="footer">
                <div class="left">
                    <a class="gray" href="http://dc.idreamsky.com/" target="_blank">文档中心</a>
                    <span>|</span>
                    <a class="gray" href="" target="_blank">SDK下载</a>
                    <span>|</span>
                    <a class="gray" href="" target="_blank">申请开发者帐号</a>
                    <span>|</span>
                    <a class="gray" href="" target="_blank">SSO单点登录注册</a>
                    <span>|</span>
                    <a class="gray" href="" target="_blank">OA权限申请</a>
                </div>
                <div class="right gray">
                    Copyright©2009-2018 深圳市创梦天地科技股份有限公司 版权所有 粤ICP备 13029562号
                </div>
            </div>
    </div>
</template>

<script>
    import Cookies from 'js-cookie';
    export default {
        mounted(){
            function hasClass(elements, cName) {
                return !!elements.className.match(new RegExp("(\\s|^)" + cName + "(\\s|$)")); // ( \\s|^ ) 判断前面是否有空格 （\\s | $ ）判断后面是否有空格 两个感叹号为转换为布尔值 以方便做判断
            };
            function addClass(elements, cName) {
                if (!hasClass(elements, cName)) {
                    elements.className += " " + cName;
                };
            };
            function removeClass(elements, cName) {
                if (hasClass(elements, cName)) {
                    elements.className = elements.className.replace(new RegExp("(\\s|^)" + cName + "(\\s|$)"), " "); // replace方法是替换
                };
            };
            var addHandler = function(element,type,handler){
                if(element.addEventListener){//检测是否为DOM2级方法
                    element.addEventListener(type, handler, false);
                }else if (element.attachEvent){//检测是否为IE级方法
                    element.attachEvent("on" + type, handler);
                } else {//检测是否为DOM0级方法
                    element["on" + type] = handler;
                }
            }
            var login = document.getElementById("login");
            var nav = document.getElementById("nav");
            var arrow = document.getElementById("arrow");
            addHandler(login,"click",function(e){
                if( nav.style.display == "block"){
                    nav.style.display = "none";
                    removeClass(arrow,"top")
                } else{
                    nav.style.display = "block";
                    addClass(arrow,"top")
                }
            })
        }
    };
</script>

<style>

</style>
