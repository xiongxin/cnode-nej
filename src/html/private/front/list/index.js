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
    'util/list/page',
    'pro/base/module',
    'pro/cache/blog'
], function(_k,_e,_l,_t,_m,_d,_p,_pro){
    /**
     * 项目模块基类对象
     * @class   {wd.m._$$ModuleLayoutSystem}
     * @extends {nej.ut._$$AbstractModuleLayoutSystem}
     * @param   {Object}  可选配置参数，已处理参数列表如下所示
     */
    _p._$$FrontList = _k._$klass();
    _pro = _p._$$FrontList._$extend(_m._$$Module);

    /**
     * 构建模块
     * @return {Void}
     */
    _pro.__doBuild = function(){
        this.__body = _e._$html2node(
            _l._$getTextTemplate('front-list')
        );
        var _list = _e._$getByClassName(this.__body, 'j-flag');
        this.__mopt = {
            limit:20,
            parent:_list[0],
            item:'front-list-tpl',
            cache:{klass:_d._$$CacheBlog},
            pager:{clazz:'w-pager',parent:_list[1]},
            onbeforelistload:this.__onLoadingShow._$bind(this),
            onemptylist:this.__onMessageShow._$bind(this,'没有日志列表！')
        };
    };


    _pro.__onRefresh = (function(){
        var _doParseCKey = function(_param){
            if (!!_param.cid)
                return 'class-'+_param.cid;
            if (!!_param.tid)
                return 'tag-'+_param.tid;
            return 'box-'+(_param.box||1);
        };
        return function(_options){
            this.__super(_options);
            if (this.__lmdl) this.__lmdl._$recycle();
            this.__mopt.cache.data = _options.param||_o;
            this.__mopt.cache.lkey  = _options.param.tab||'';
            this.__lmdl = _t._$$ListModulePG._$allocate(this.__mopt);
        };
    })();

    // notify dispatcher
    _m._$regist(
        'front-list',
        _p._$$FrontList
    );
});
