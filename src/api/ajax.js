/**
 * @author     ：897863952@qq.com
 * @date       ：Created in 2021/1/20 17:16
 * @description：
 * @version:
 * @see
 */

import request from '../utils/request';

var axiosIns = {
    getAjaxUrl: function (path) {
        if (path.indexOf('http') == 0) return path;
        return path;
    },
    get: function (path, param) {
        var url = this.getAjaxUrl(path);
        return request.get(url, {params: param || {}});
    },

    post: function (path, param) {
        return request.post(this.getAjaxUrl(path), param || {}).catch(function (resp) {
            return resp;
        });
    },
    postDownload: function (path, param) {
        return request.post(this.getAjaxUrl(path), param || {}, {responseType: 'arraybuffer'}).catch(function (resp) {
            return resp;
        });
    },
    checkSuccess: function() {
        return {code: ResultStatus.OK.code};
    },
    checkError: function(msg) {
        return {code: ResultStatus.NO.code, msg: msg};
    }
};
export default axiosIns;