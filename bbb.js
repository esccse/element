export default {
    components: {bbbEdit},
    data() {
        return {
            search: {
                curPage: 1,
                pageSize: 100,
                name: '',
                date: '',
            },
            totalPage: 400,
            input1: '',
            input2: '',
            input3: '',
            input4: '',
            options: [
                {label: '男', value: 'nan'},
                {label: '女', value: 'nv'},
                {label: '未知', value: 'wei'},
            ],
            tableData: [],
            isAdd: true,
            isShow: false,
            checkedIdArr: [],
        }
    },
    methods: {
        delItem(data) {
            data.id
            this.$confirm('是否删除所选内容?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$message({
                    type: 'success',
                    message: '删除成功!'
                });
            }).catch(() => 1);
        },
        editItem(data) {
            data;
            const data2 = {name: '123', region: 1};
            this.$refs.edit.setData(data2);
            this.isAdd = false;
            this.isShow = true;
        },
        add() {
            this.isAdd = true;
            this.isShow = true;
        },
        getTableList(isFirst) {
            if (isFirst) {
                this.search.curPage = 1;
            }
            console.log(this.search)
            // api
            setTimeout(() => {
                this.tableData = [
                    {
                        id: 123,
                        date: '2016-05-02',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1518 弄'
                    },
                ]
            }, 2000)
        },
        handleSizeChange(size) {
            this.search.pageSize = size;
            this.getTableList(true);
        },
        handleCurrentChange(page) {
            this.search.curPage = page;
            this.getTableList();
        },
        tableSelect(arr) {
            this.checkedIdArr = arr.map(v => v.id);
        },
        fetchDel() {
            if (!this.checkedIdArr.length) {
                this.$message.warning('请至少勾选一项');
                return;
            }
            this.delItem(this.checkedIdArr);
        }
    },
    mounted() {
        this.getTableList();
        window.bus = bus;
        bus.$on('getEsccse', data => {
            console.log(data, 'getEsccse....')
        })
    }
}
