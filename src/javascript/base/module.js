//模块基类
NEJ.define([
    '{lib}base/klass.js',
    '{lib}util/dispatcher/module.js'
], function(_k, _t, _p, _pro) {

    _p._$$Module = _k._$klass();
    _pro = _p._$$Module._$extend(_t._$$ModuleAbstract);

    

    _pro.__doParseUMIFromOpt = (function(){
        var _reg0 = /\?|#/,
            _reg1 = /^\/m\//i;
        return function(_options){
            _options = (_options.input||_o).location||_options;
            return (_options.href||'/blog/').split(_reg0)[0].replace(_reg1,'/');
        };
    })();

    /**
     * 显示提示信息
     * @param  {Object} 事件信息
     * @return {Void}
     */
    _pro.__onMessageShow = function(_msg,_event){
        _event.value = '<p class="w-message">'+_msg+'</p>';
    };
    
    
    //显示加载
    _pro.__onLoadingShow = function(_event){
        _event.value = '<p class="w-loading">&nbsp;</p>';
    };

    _p._$regist = _t._$regist;

    return _p;
});