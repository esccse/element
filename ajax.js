import $ from 'jquery';
import utils from '../js/utils';
import i18n from '../i18n/i18n';
import CONSTANTS from 'constants';
import store from '../../store/index';
var defaults = {
    url: "",			
    cache: false,	
    data: {},	
    dataType: "json",
    type: "GET",	
    lock: true, 
    success: null,
    error: null,			
    onSuccess: null,	
    onError: null,
    successMessage: null,
    errorMessage: null		
};
function RESTAjax(option) {
    this.option = $.extend(option || {}, defaults);
}
setUrlNowTime = function(url) {
    let newUrl = '';
    if (null === url || url === "") {
        return "";
    }
    if (url.indexOf('?') > 0) {
        newUrl = url + "&nowTime=" + new Date().getTime();
    } else {
        newUrl = url + "?nowTime=" + new Date().getTime();
    }
    return newUrl;
}
RESTAjax.fn = RESTAjax.prototype = {
    ajax : function(obj){
        const self = this;
        return new Promise((resolve, reject) => {
            const option = Object.assign({}, self.option , obj);
            option.lock && utils.toggleLoading(true, option.module);
            if (option.type !== "GET") {
                //js对象转换为标准JSON对象后传递给后台,规避array无法被转换等问题
                option.data = JSON.stringify(option.data);
            }
            $.ajax({
                type: option.type,
                url: setUrlNowTime(option.url),
                cache: option.cache,
                data: option.data,
                contentType: "application/json; charset=UTF-8",	
                dataType: option.dataType,
                headers: option.headers,
                // beforeSend: function(xhr) {
                //     // xhr.setRequestHeader("X-Subject-Token", token.replace(/\s/g, '+')); token
                // },
                success: function(data) {
                    option.lock && option.lock// todo
                    option.success && option.success(data);
                    resolve(utils.toObject(data));
                },
                error: function(XMLHttpRequest) {
                    option.lock && option.lock// todo
                    const data = XMLHttpRequest.responseJSON;
                    switch (XMLHttpRequest.status) {
                    case 200:
                        option.lock && option.lock// todo
                        option.success && option.success(data);
                        resolve(utils.toObject(data));
                        return;
                    case 400:
                        option.alert && utils.showAlert('error.system.busy');
                        break;
                    case 401:
                        utils.timeOut();
                        break;
                    }
                    reject(utils.toObject(data));
                }
            });
        });
    },
};
$.restAjax = new RESTAjax;
