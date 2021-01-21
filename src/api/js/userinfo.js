/**
 * @author     ：897863952@qq.com
 * @date       ：Created in 2021/1/21 15:55
 * @description：
 * @version:
 * @see
 */

import req from '../ajax'

var userRequest = function () {
    this.mapping = {
        userinfo : "userinfo"
    };

    this.controller = "user"

    this.getUrl = function (path) {
        return this.controller + "/" + path;
    }

    this.getUserInfo = function (id) {
        return req.get( this.getUrl( this.mapping.userinfo ),{id:id} )
    }

}


export default new userRequest();

