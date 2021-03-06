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
    'pro/base/module'
], function(_k,_e,_l,_m,_p,_pro){
    /**
     * 项目模块基类对象
     * @class   {wd.m._$$ModuleLayoutSystem}
     * @extends {nej.ut._$$AbstractModuleLayoutSystem}
     * @param   {Object}  可选配置参数，已处理参数列表如下所示
     */
    _p._$$Front = _k._$klass();
    _pro = _p._$$Front._$extend(_m._$$Module);

    /**
     * 构建模块
     * @return {Void}
     */
    _pro.__doBuild = function(){
        this.__body = _e._$html2node(
            _l._$getTextTemplate('front')
        );
        
        var _list = _e._$getByClassName(this.__body, 'j-flag');
        console.log(_list[2]);
        this.__export = {
            tab: _list[0],
            list: _list[1],
            user: _list[2],
            parent: _list[2]
        }
    };
    // notify dispatcher
    _m._$regist(
        'front',
        _p._$$Front
    );
});
