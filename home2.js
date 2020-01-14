<template>
    <div class="main-page">
        <div class="head">logo</div>
        <div class="config">
            <div class="config-head" @click="flag = !flag">参数配置
                <i class="el-icon-caret-bottom rotate" :class="!flag && 'toTop'"></i>
                <el-button class="opt-btn" type="primary" size="small" @click.stop="save">保存</el-button>
            </div>
            <div class="config-content" :class="!flag && 'toTop'">
                <el-row :gutter="10" style="margin-top: 20px;">
                    <el-col :span="5">
                        姓名：
                        <el-input style="width: 220px;" placeholder="请输入姓名" size="small" v-model="input1"></el-input>
                    </el-col>
                    <el-col :span="5">
                        姓名：
                        <el-input style="width: 220px;" placeholder="请输入姓名" size="small" v-model="input1"></el-input>
                    </el-col>
                    <el-col :span="5">
                        姓名：
                        <el-input style="width: 220px;" placeholder="请输入姓名" size="small" v-model="input1"></el-input>
                    </el-col>
                </el-row>
                
            </div>
        </div>
        <div class="data-wrap">
            <div class="data-head">
                数据展示
                <el-button class="opt-btn" type="primary" size="small">导出</el-button>
                <el-button class="opt-btn" type="primary" size="small">XX</el-button>
            </div>
            <div class="data-content">
                <el-table
                </el-table>
                <el-pagination
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'app',
    data () {
        return {
            flag: true,
            input1: '',
            tableData: [
                {
                    id: 123,
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                
            ],
        };
    },
    methods: {
        save() {
            console.log('保存')
        }
    },
};
</script>
<style scoped lang="less">
    @head_height: 50px;
    .main-page {
        height: 100%;
        width: 100%;
        .head {
            height: @head_height;
            line-height: @head_height;
            border-bottom: 1px solid #ccc;
            box-sizing: border-box;
        }
        .opt-btn {
            float: right;
            margin-top: 4px;
            margin-right: 8px;
            &:first-of-type {
                margin-right: 30px;
            }
        }
        .config {
            border-bottom: 1px solid #ccc;
            .config-head {
                padding: 0px 10px;
                background: #f3f3f4;
                height: 40px;
                line-height: 40px;
                cursor: pointer;
                .rotate {
                    transition: all .3s;
                }
                .toTop {
                    transform: rotate(180deg);
                }
            }
            .config-content {
                padding: 4px 60px 20px;
                box-sizing: border-box;
                overflow: hidden;
                &.toTop {
                    height: 0;
                    padding: 0px 60px;
                }
            }
        }
        .data-wrap {
            .data-head {
                padding: 0px 10px;
                background: #f3f3f4;
                height: 40px;
                line-height: 40px;
            }
            border-bottom: 1px solid #ccc;
        }
    }
</style>
