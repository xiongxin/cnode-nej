
/**
 * 模块入口文件
 */

NEJ.define([
    '{lib}util/dispatcher/dispatcher.js'
], function(_p) {

    // 实例化调度器，并在全局设置dispatcher变量供模块使用
    // 源码中你会看到, _$startup方法设置了window.dispatcher.
    // 可直接dispatcher._$redirect('umi or alias')进行模块的跳转.
    _p._$startup({
        rules: {
            rewrite : {
                '404': '/m/',
            },
            title: {

            },
            //  模块注册名 对应 umi
            alias: {
                
                // layout
                "m":"/m",
                'front':'/m/', //首页
                'front-tab': "/?/front/tab/",
                'front-list': '/?/front/list/',
                'front-user': '/?/front/user/',
                "topic" : '/m/topic/',

                //登录页面
                'signin': '/m/signin/'
            }
        },
        // UMI 对应 模块实现文件
        modules: {
            "/?/front/tab/": 'private/front/tab/index.html',
            '/?/front/list/': 'private/front/list/index.html',
            '/?/front/user/': 'private/front/user/index.html',
            "/m" : "m/index.html",
            '/m/': {
                'module':'m/front/index.html',
                "composite":{
                    "tab":"/?/front/tab/",
                    'list':'/?/front/list/',
                    'user':'/?/front/user/'
                }
            },

            '/m/topic/': 'm/topic/index.html',

            '/m/signin/' : 'm/signin/index.html'
        }
    });

});