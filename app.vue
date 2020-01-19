<template>
    <div id="login">
        <div class="login-wrap">
            <div class="header">
                logo XXXXXXXX
            </div>
            <div class="content">
                <el-form ref="form" :model="form" label-width="50px">
                    <el-form-item label="账号">
                        <el-input v-model="form.username"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" style="margin-bottom: 0;">
                        <el-input type="password" v-model="form.password"></el-input>
                    </el-form-item>
                </el-form>
            </div>
            <div class="footer">
                <el-button type="primary" style="width: 100%">登录</el-button>
                <div class="qr">
                    <img src="" style="width: 100%" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            form: {
                username: '',
                password: '',
            }
        }
    }
}
</script>
<style lang="less" scoped>
#login {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: #73b9ff;
    /deep/ label {
        color: #000;
        font-size: 16px;
    }
    .login-wrap {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        width: 300px;
        height: 500px;
        .header {
            height: 50px;
            margin-bottom: 40px;
            line-height: 50px;
        }
        .content {
            padding: 10px;
            margin-bottom: 20px;
        }
        .footer {
            .qr {
                margin: 20px auto;
                width: 80%;
            }
        }
    }
}
</style>
