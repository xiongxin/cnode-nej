define([
    'base/klass',
    'base/util',
    'util/cache/abstract'
], function(k, u, t, p, pro) {
    t._$config({
        'topic-get': {
            method:'GET',
            url: 'https://ruby-china.org/api/v3/topics/29726',
            onload: 'ongettopic',
        }
    });

    p._$$TopicCache = k._$klass();
    pro = p._$$TopicCache._$extend(t._$$CacheListAbstract);

    pro.__doLoadItem = function(options){
        //console.log(options);
        this.__doSendRequest('topic-get', options);
    }

    pro._getTopic = function(d){
        console.log(d);
    }
})