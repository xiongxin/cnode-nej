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
    'util/template/jst',
    'pro/base/module',
    'util/ajax/xdr',

], function(_k,_e,_l, _j,_m, _x, _p,_pro){
    /**
     * 项目模块基类对象
     * @class   {wd.m._$$ModuleLayoutSystem}
     * @extends {nej.ut._$$AbstractModuleLayoutSystem}
     * @param   {Object}  可选配置参数，已处理参数列表如下所示
     */
    _p._$$Topic = _k._$klass();
    _pro = _p._$$Topic._$extend(_m._$$Module);

    /**
     * 构建模块
     * @return {Void}
     */
    _pro.__doBuild = function(){
        this.__body = _e._$html2node(
            _l._$getTextTemplate('topic')
        );
        
    };
    
    _pro.__onRefresh = function (_options) {
        _e._$addClassName(this.__body, 'w-loading');
        this.__getTopic(_options.param.id);
    };

    _pro.__getTopic = function (_id) {
        _x._$request('https://cnodejs.org/api/v1/topic/'+_id, {
            method: 'get',
            type: 'json',
            onload: this._onGetTopic._$bind(this),
            onerror:function () {
                alert('falid to get topic');
                return
            }
        });
    };

    _pro._onGetTopic = function (_data) {
        var _list = _e._$getByClassName(this.__body, 'j-flag');
        if (_data.success) {
            _e._$delClassName(this.__body, 'w-loading');
            _j._$render(_list[0], 'topic-tpl', {
                x: _data.data
            });
        }
    };
    
    // notify dispatcher
    _m._$regist(
        'topic',
        _p._$$Topic
    );
});
