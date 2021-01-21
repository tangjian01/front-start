/**
 * @author     ：897863952@qq.com
 * @date       ：Created in 2021/1/20 15:35
 * @description：
 * @version:
 * @see
 */

import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router);

var router = new Router({
    routes:[
        {
            path: '/',
            redirect: '/dashboard'
        },
        {
            path: '/wk',
            component: () => import('../layout/headerAndMenu'),
            meta:{title:"自述文件"},
            children: [
                {
                    path: '/dashboard',
                    component: () => import('../components/page/Dashboard'),
                    meta: { title: '系统首页' }
                },
                {
                    path: '/knowledge',
                    component: () => import('../components/page/Knowledge'),
                    meta: { title: '知识库' }
                }
            ]
        }
    ]
});

// router.beforeEach(function (to,from,next) {
//     if(!to.path || to.path == '/') {
//         //跳转到首页
//         next({name: 'list_name'});
//         return;
//     }
//     next();
// })

export default router;