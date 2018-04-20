import Main from '@/views/Main.vue';

// 不作为Main组件的子页面展示的页面单独写，如下
export const loginRouter = {
    path: '/login',
    name: 'login',
    meta: {
        title: 'Login - 登录'
    },
    component: resolve => require(['../views/user/login.vue'], resolve)
  };

export const portalRouter = {
    path: '/portal',
    name: 'portal',
    meta: {
        title: 'portal'
    },
    component: resolve => require(['../views/portal/portal.vue'], resolve)
};

export const portalRouter2 = {
    path: '/portal2',
    name: 'portal2',
    meta: {
        title: 'portal2'
    },
    component: resolve => require(['../views/portal/portal2.vue'], resolve)
};

export const page404 = {
    path: '/*',
    name: 'error-404',
    meta: {
        title: '404-页面不存在'
    },
    component: resolve => require(['../views/error-page/404.vue'], resolve)
};




// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
export const otherRouter = {
    path: '/',
    name: 'otherRouter',
    redirect: '/home',
    component: Main,
    children: [
        { path: 'home', title: {i18n: 'home'}, name: 'home_index', component: resolve => require(['../views/error-page/404.vue'], resolve) }
    ]
};

// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const appRouter = [
    {
        path: '/access',
        icon: 'key',
        name: 'access',
        title: '权限管理',
        component: Main,
        children: [
            { path: 'index', title: 'table 分页', name: 'table_index',  component: resolve => require(['../views/table/searchable-table.vue'], resolve) }
        ]
    },
    {
        path: '/access',
        icon: 'key',
        name: 'access',
        title: '权限管理',
        component: Main,
        children: [
            { path: 'index', title: '权限管理', name: 'access_index',  component: resolve => require(['../views/access/access.vue'], resolve) }
        ]
    },
    {
        path: '/access-test',
        icon: 'lock-combination',
        title: '权限测试页',
        name: 'accesstest',
        access: 0,
        component: Main,
        children: [
            { path: 'index', title: '权限测试页', name: 'accesstest_index', access: 0,component: resolve => require(['../views/access/access-test.vue'], resolve)}
        ]
    },
    {
        path: '/component',
        icon: 'social-buffer',
        name: 'component',
        title: '组件',
        component: Main,
        children: [
            {
                path: 'upload',
                icon: 'compose',
                name: 'file-upload',
                title: '上传',
                component: resolve => require(['../views/my-components/file-upload/file-upload.vue'], resolve)
            },
            {
                path: 'image-editor',
                icon: 'crop',
                name: 'image-editor',
                title: '图片预览编辑',
                component: resolve => require(['../views/my-components/image-editor/image-editor.vue'], resolve)
            },
        ]
    }
];

// 所有上面定义的路由都要写在下面的routers里
export const routers = [
    portalRouter,
    portalRouter2,
    loginRouter,
    otherRouter,
    ...appRouter,
    page404
];
