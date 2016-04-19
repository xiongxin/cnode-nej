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
    _p._$$FrontTag = _k._$klass();
    _pro = _p._$$FrontTag._$extend(_m._$$Module);

    /**
     * 构建模块
     * @return {Void}
     */
    _pro.__doBuild = function(){
        this.__body = _e._$html2node(
            _l._$getTextTemplate('front-tab')
        );
        var _list = _e._$getByClassName(this.__body, 'j-flag');
        this.__tbview = _t._$$TabView._$allocate({
            list: _e._$getChildren(this.__body),
            selected: 'active'
        });
    };


    _pro._checkTab = function(_event) {
      _event.matched = _event.target == _event.source;
    };

    _pro.__onRefresh = function (_options) {
        this.__super(_options);
        this.__tbview._$match(_options.param.tab||'all');
    };

    // notify dispatcher
    _m._$regist(
        'front-tab',
        _p._$$FrontTag
    );
});
