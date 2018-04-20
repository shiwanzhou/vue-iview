import Cookies from 'js-cookie';

const user = {
    state: {},
    mutations: {
        logout (state, vm) {
            Cookies.remove('user');
            Cookies.remove('password');
            Cookies.remove('access');
            localStorage.clear();
        }
    },
    actions: {
        logout (context, that) {
            that.$get(`${that.$url}wpk/developer/app-list`, {}).then((res) => {
                context.commit("logout");
            }).catch((err) => {
                this.$Message.error('This is an error tip');
            });
        }
    }
};

export default user;
