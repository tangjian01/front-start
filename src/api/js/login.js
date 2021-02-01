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
        login : "login",
        logout:"logout"
    };

    this.controller = ""

    this.getUrl = function (path) {
        return this.controller + "/" + path;
    }
    this.logout = function () {
        return req.get( this.getUrl( this.mapping.logout ))
    }
    this.login = function (name,password) {
        return req.get( this.getUrl( this.mapping.login ),{username:name,password:password} )
    }

}


export default new userRequest();

