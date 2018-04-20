<style lang="less" scoped>
    @import '../../styles/common.less';
    @import './table.less';
</style>

<template>
    <div>
        <Row :gutter="10">
            <Col span="24">
                <Card>
                    <p slot="title">
                        <Icon type="mouse"></Icon>
                        点击搜索进行搜索
                    </p>
                    <Row>
                        <Input v-model="searchConName3" placeholder="请输入姓名搜搜..." style="width: 200px" />
                        <span style="margin: 0 10px;"><Button type="primary" icon="search">搜索</Button></span>
                        <Button  type="ghost" >取消</Button>
                    </Row>
                    <Row class="margin-top-10 searchable-table-con1">
                        <Table :loading="loading"  :columns="columns1" :data="items"></Table>
                    </Row>
                </Card>
                <Page :total="totalPage" @on-change="handleCurrentChange"></Page>
            </Col>
        </Row>
    </div>
</template>

<script>
export default {
    name: 'searchable-table',
    data () {
        return {
            loading: true,
            searchConName1: '',
            searchConName2: '',
            searchConTel2: '',
            searchConName3: '',
            columns1:  [
                {
                    key: 'username',
                    title: '用户名'
                },
                {
                    key: 'reg_time',
                    title: '最近登录'
                }
            ],
            data1: [],
            initTable1: [],
            data2: [],
            initTable2: [],
            data3: [],
            initTable3: [],
            curPage:1,
            totalPage:20,
            items:[
                {
                    username: 'Aresn',
                    reg_time: '2018-01-17 15:32:18'
                },
                {
                    username: 'Lison',
                    reg_time: '2018-01-17 15:32:18'
                },
            ],
            pageSize:this.$pageSize

        };
    },
    created(){
        // 页面创建时调用
        this.getBlockList();
    },
    methods: {
        getBlockList(){
            this.loading = true;
            let postData = {
                app_id:2,
                page: this.curPage,                                     // 分页开始值，默认为0
                pageSize: this.pageSize                                   // 返回的数量, 默认15
            };
            this.$get(`${this.$url}wpk/player/index`, postData).then((res) => {
                let result = res.data;
                console.log(res)
                this.totalPage = 30;
                this.items = [
                    {
                        "username":"1w3e30",
                        "reg_time":"1"
                    },
                    {
                        "username":"0vvfvfvfffffff",
                        "reg_time":"2"
                    },
                    {
                        "username":"vgggggggggg",
                        "reg_time":"3"
                    }
                ];
                if(postData.page == 2){
                    this.items = [
                        {
                            "username":"namem000000001",
                            "reg_time":"11"
                        },
                        {
                            "username":"namem000000002",
                            "reg_time":"22"
                        },
                        {
                            "username":"namem000000003",
                            "reg_time":"33"
                        }
                    ];
                } else if(postData.page == 3){
                    this.items = [
                        {
                            "username":"namem00000000111111",
                            "reg_time":"111"
                        },
                        {
                            "username":"namem000000002222222",
                            "reg_time":"222"
                        },
                        {
                            "username":"namem0000000033333333",
                            "reg_time":"333"
                        }
                    ];
                }
                this.loading = false;
                /*if (result.code == 0) {
                 this.totalPage = result.data.count || 0;
                 this.items = result.data;
                 this.load_data = false;
                 } else {
                 this.load_data = false;
                 /!*if (result.code == 10003) {
                 // 未登陆或登陆已失效
                 this.$router.push('/login');
                 } else {
                 this.$Message.error(result.msg);
                 }*!/
                 }*/
            }).catch((err) => {
                this.loading = false;
                console.log(err);
                this.$Message.error("error");
            });
        },
        init () {
        },
        search (data, argumentObj) {
            let res = data;
            let dataClone = data;
            for (let argu in argumentObj) {
                if (argumentObj[argu].length > 0) {
                    res = dataClone.filter(d => {
                        return d[argu].indexOf(argumentObj[argu]) > -1;
                    });
                    dataClone = res;
                }
            }
            return res;
        },
        handleCurrentChange(val) {
            this.curPage = val;
            this.getBlockList();
        },
    },
    mounted () {
        this.init();
    }
};
</script>
