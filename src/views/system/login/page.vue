<template>
  <div class="page-login">
    <div class="page-login--layer page-login--layer-area">
      <ul class="circles">
        <li
          v-for="n in 10"
          :key="n"
        ></li>
      </ul>
    </div>

    <div class="page-login--layer">
      <div
        class="page-login--content"
        flex="dir:top main:justify cross:stretch box:justify"
      >
        <div class="page-login--content-header">
        </div>
        <div
          class="page-login--content-main"
          flex="dir:top main:center cross:center"
        >
          <!-- form -->
          <div class="page-login--form">
            <el-card>
              <h2 class="title">《算法与数据结构》网站</h2>
              <el-form
                ref="loginForm"
                label-position="top"
                :rules="rules"
                :model="formLogin"
                size="default"
              >
                <el-form-item prop="username">
                  <el-input
                    type="text"
                    v-model="formLogin.username"
                    placeholder="用户名"
                  >
                    <i
                      slot="prepend"
                      class="fa fa-user-circle-o"
                    ></i>
                  </el-input>
                </el-form-item>
                <el-form-item prop="password">
                  <el-input
                    type="password"
                    v-model="formLogin.password"
                    placeholder="密码"
                  >
                    <i
                      slot="prepend"
                      class="fa fa-keyboard-o"
                    ></i>
                  </el-input>
                </el-form-item>

                <el-button
                  size="default"
                  @click="submit"
                  type="primary"
                  class="button-login"
                >
                  登录
                </el-button>
              </el-form>
            </el-card>

            <el-button
              class="page-login--quick"
              size="default"
              type="info"
              @click="dialogVisible = true"
            >
              快速选择用户（游客）
            </el-button>
          </div>
        </div>
        <div class="page-login--content-footer">

        </div>
      </div>
    </div>
    <el-dialog
      title="快速选择用户"
      :visible.sync="dialogVisible"
      width="400px"
    >
      <el-row
        :gutter="10"
        style="margin: -20px 0px -10px 0px;"
      >
        <el-col
          v-for="(user, index) in users"
          :key="index"
          :span="8"
        >
          <div
            class="page-login--quick-user"
            @click="handleUserBtnClick(user)"
          >
            <d2-icon name="user-circle-o" />
            <span>{{user.name}}</span>
          </div>
        </el-col>
      </el-row>
    </el-dialog>
  </div>

</template>

<script>
import dayjs from 'dayjs'
import { mapActions } from 'vuex'
import localeMixin from '@/locales/mixin.js'
export default {
  mixins: [
    localeMixin
  ],
  data () {
    return {
      timeInterval: null,
      // 快速选择用户
      dialogVisible: false,
      users: [
        {
          name: '云淡风轻',
          username: 'User0',
          password: 'User0'
        },
        {
          name: '茉莉',
          username: 'User1',
          password: 'User1'
        },
        {
          name: '一见惊鸿',
          username: 'User2',
          password: 'User2'
        }
      ],
      // 表单
      formLogin: {
        username: '',
        password: '',
        code: 'v9am',
      },
      // 表单校验
      rules: {
        username: [
          {
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          }
        ],
        code: [
          {
            required: true,
            message: '请输入验证码',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  mounted () {
    this.timeInterval = setInterval(() => {
      this.refreshTime()
    }, 1000)
  },
  beforeDestroy () {
    clearInterval(this.timeInterval)
  },
  methods: {
    ...mapActions('d2admin/account', [
      'login'
    ]),

    /**
     * @description 接收选择一个用户快速登录的事件
     * @param {Object} user 用户信息
     */
    handleUserBtnClick (user) {
      this.formLogin.username = user.username
      this.formLogin.password = user.password
      this.submit()
    },
    /**
     * @description 提交表单
     */
    // 提交登录信息
    submit () {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.login({
            username: this.formLogin.username,
            password: this.formLogin.password
          })
            .then(() => {
              // 重定向对象不存在则返回顶层路径
              this.$router.replace(this.$route.query.redirect || '/')
            })

        } else {
          // 登录表单校验失败
          this.$message.error('表单校验失败，请检查')
        }
      })
    }
  }
}
</script>

<style lang="scss">
.page-login {
  @extend %unable-select;
  $backgroundColor: #eeeeee;
  // ---
  background-color: $backgroundColor;
  height: 100%;
  position: relative;
  // 层
  .page-login--layer {
    @extend %full;
    overflow: auto;
  }
  .page-login--layer-area {
    overflow: hidden;
  }
  // 时间

  // 登陆页面控件的容器
  .page-login--content {
    height: 100%;
    min-height: 500px;
  }
  // header
  .page-login--content-header {
    padding: 1em 0;
  }

  // 登录表单
  .page-login--form {
    width: 380px;
    // 卡片
    .title {
      text-align: center;
      color: #333;
    }
    .el-card {
      margin-bottom: 15px;
    }
    // 登录按钮
    .button-login {
      width: 100%;
    }
    // 输入框左边的图表区域缩窄
    .el-input-group__prepend {
      padding: 0px 14px;
    }

    // 登陆选项
    .page-login--options {
      margin: 0px;
      padding: 0px;
      font-size: 14px;
      color: $color-primary;
      margin-bottom: 15px;
      font-weight: bold;
    }
    .page-login--quick {
      width: 100%;
    }
  }
  // 快速选择用户面板
  .page-login--quick-user {
    @extend %flex-center-col;
    padding: 10px 0px;
    border-radius: 4px;
    &:hover {
      background-color: $color-bg;
      i {
        color: $color-text-normal;
      }
      span {
        color: $color-text-normal;
      }
    }
    i {
      font-size: 36px;
      color: $color-text-sub;
    }
    span {
      font-size: 12px;
      margin-top: 10px;
      color: $color-text-sub;
    }
  }
  // footer
  .page-login--content-footer {
    padding: 1em 0;
  }
  // 背景
  .circles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    margin: 0px;
    padding: 0px;
    li {
      position: absolute;
      display: block;
      list-style: none;
      width: 20px;
      height: 20px;
      background: rgb(88, 163, 248);
      animation: animate 25s linear infinite;
      bottom: -200px;
      @keyframes animate {
        0% {
          transform: translateY(0) rotate(0deg);
          opacity: 1;
          border-radius: 0;
        }
        100% {
          transform: translateY(-1000px) rotate(720deg);
          opacity: 0;
          border-radius: 50%;
        }
      }
      &:nth-child(1) {
        left: 15%;
        width: 80px;
        height: 80px;
        animation-delay: 0s;
      }
      &:nth-child(2) {
        left: 5%;
        width: 20px;
        height: 20px;
        animation-delay: 2s;
        animation-duration: 12s;
      }
      &:nth-child(3) {
        left: 70%;
        width: 20px;
        height: 20px;
        animation-delay: 4s;
      }
      &:nth-child(4) {
        left: 40%;
        width: 60px;
        height: 60px;
        animation-delay: 0s;
        animation-duration: 18s;
      }
      &:nth-child(5) {
        left: 65%;
        width: 20px;
        height: 20px;
        animation-delay: 0s;
      }
      &:nth-child(6) {
        left: 75%;
        width: 150px;
        height: 150px;
        animation-delay: 3s;
      }
      &:nth-child(7) {
        left: 35%;
        width: 200px;
        height: 200px;
        animation-delay: 7s;
      }
      &:nth-child(8) {
        left: 50%;
        width: 25px;
        height: 25px;
        animation-delay: 15s;
        animation-duration: 45s;
      }
      &:nth-child(9) {
        left: 20%;
        width: 15px;
        height: 15px;
        animation-delay: 2s;
        animation-duration: 35s;
      }
      &:nth-child(10) {
        left: 85%;
        width: 150px;
        height: 150px;
        animation-delay: 0s;
        animation-duration: 11s;
      }
    }
  }
}
.color-change-2x {
  -webkit-animation: color-change-2x 2s linear infinite alternate both;
  animation: color-change-2x 2s linear infinite alternate both;
}
/**
 * ----------------------------------------
 * animation color-change-2x
 * ----------------------------------------
 */
@-webkit-keyframes color-change-2x {
  0% {
    background: #2d3a4b;
  }
  100% {
    background: #2c76ff;
  }
}
@keyframes color-change-2x {
  0% {
    background: #2d3a4b;
  }
  100% {
    background: #2c76ff;
  }
}
</style>
