
const app = {
    state: {
        cachePage: [],
        menuList: [],
        menuTheme: "",
        themeColor: ''
    },
    mutations: {
        updateMenulist (state) {
            let menuList = [];
            let appRouter = [
                {
                    path: '/table',
                    icon: 'key',
                    name: 'table',
                    title: 'table 分页',
                    children: [
                        { path: 'index', title: 'table 分页', name: 'table_index',}
                    ]
                },
                {
                    id: '1',
                    path: '/access',
                    icon: 'key',
                    name: 'access',
                    title: '权限管理',
                    children: [
                        {path: 'index', title: '权限管理', name: 'access_index'}
                    ]
                },
                {
                    id: "2",
                    path: '/access-test',
                    icon: 'lock-combination',
                    title: '权限测试页',
                    name: 'accesstest',
                    access: 0,
                    children: [
                        {path: 'index', title: '权限测试页', name: 'accesstest_index', access: 0}
                    ]
                },
                {
                    id: "3",
                    path: '/component',
                    icon: 'social-buffer',
                    name: 'component',
                    title: '组件',
                    children: [
                        {
                            path: 'upload',
                            icon: 'compose',
                            name: 'file-upload',
                            title: '上传'
                        },
                        {
                            path: 'image-editor',
                            icon: 'crop',
                            name: 'image-editor',
                            title: '图片预览编辑'
                        }
                    ]
                }
            ]
            state.menuList = appRouter;
        },
        changeMenuTheme (state, theme) {
            state.menuTheme = theme;
        },
        changeMainTheme (state, mainTheme) {
            state.themeColor = mainTheme;
        },
        setAvator (state, path) {
            localStorage.avatorImgPath = path;
        }
    },
    actions: {
        updateMenulist (context, that) {
            context.commit("updateMenulist");
           /* that.$get(`${that.$url}wpk/developer/app-list`, {}).then((res) => {
                context.commit("updateMenulist");
            }).catch((err) => {
                console.log("error")
                this.$Message.error('This is an error tip');
            });*/
           /* this.$get(`${this.$url}wpk/member/list`, postData).then((res) => {
                let result = res.data;
                if (result.code == 0) {
                    this.totalPage = result.data.count;
                    this.items = result.data.items;
                    this.load_data = false;
                } else {
                    this.load_data = false;
                    if (result.code == 10003) {
                        // 未登陆或登陆已失效
                        this.$router.push('/login');
                    } else {
                        this.$message(result.msg);
                    }
                }
            }).catch((err) => {
                this.load_data = false;
                console.log(err);
                this.$message.error(this.$t('sdk.ajaxError'));
            });*/
        }
    }
}

export default app;
