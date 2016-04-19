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
    'util/tab/view',
    'base/event'
], function(_k,_e,_l,_m,_t,_v, _p,_pro){
    /**
     * 项目模块基类对象
     * @class   {wd.m._$$ModuleLayoutSystem}
     * @extends {nej.ut._$$AbstractModuleLayoutSystem}
     * @param   {Object}  可选配置参数，已处理参数列表如下所示
     */
    _p._$$Signin = _k._$klass();
    _pro = _p._$$Signin._$extend(_m._$$Module);

    /**
     * 构建模块
     * @return {Void}
     */
    _pro.__doBuild = function(){
        this.__body = _e._$html2node(
            _l._$getTextTemplate('signin')
        );
    };


    _pro.__onRefresh = function (_options) {
        this.__super(_options);
        _v._$addEvent('sanwei','click', function (_event) {
            _v._$stopDefault(_event);

        })
    };

    // notify dispatcher
    _m._$regist(
        'signin',
        _p._$$Signin
    );
});
