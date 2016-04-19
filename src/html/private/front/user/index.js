/*
 * ------------------------------------------
 * 项目主 layout
 * @version  1.0
 * @author   genify(caijf@corp.netease.com)
 * ------------------------------------------
 */
NEJ.define([
    'base/klass',
    'base/element',
    'util/template/tpl',
    'pro/base/module',
    'util/tab/view'
], function(_k,_e,_l,_m,_t, _p,_pro){
    /**
     * 项目模块基类对象
     * @class   {wd.m._$$ModuleLayoutSystem}
     * @extends {nej.ut._$$AbstractModuleLayoutSystem}
     * @param   {Object}  可选配置参数，已处理参数列表如下所示
     */
    _p._$$FrontUser = _k._$klass();
    _pro = _p._$$FrontUser._$extend(_m._$$Module);

    /**
     * 构建模块
     * @return {Void}
     */
    _pro.__doBuild = function(){
        this.__body = _e._$html2node(
            _l._$getTextTemplate('front-user')
        );
    };


    _pro.__onRefresh = function (_options) {
        this.__super(_options);
        var _list = _e._$getByClassName(this.__body, 'j-flag');
        console.log(_list);
        if (!!window.user) {

        } else {
            _list[0].innerHTML = (_l._$getTextTemplate('front-user-login-box'));
        }
    };

    // notify dispatcher
    _m._$regist(
        'front-user',
        _p._$$FrontUser
    );
});
