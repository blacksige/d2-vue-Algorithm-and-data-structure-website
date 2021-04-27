<template>
  <d2-container class="page">
    <div class="content">
      <el-row
        type="flex"
        :gutter="20"
        justify="center"
      >
        <el-col :span="6">
          <div
            class="grid-content bg-purple"
            @click="$open('https://github.com/trekhleb/javascript-algorithms')"
          >
            <div><img
                src="./image/suanfa.png"
                class="logo-style"
              /></div>
            <div class="title-style">基于JavaScript的算法与数据结构</div>
          </div>
        </el-col>
        <el-col :span="6">
          <div
            class="grid-content bg-purple"
            @click="$open('https://github.com/MisterBooo/LeetCodeAnimation')"
          >
            <div><img
                src="./image/suanfaku.png"
                class="logo-style"
              /></div>
            <div class="title-style">Leetcode算法与数据结构题库</div>
          </div>
        </el-col>
        <el-col :span="6">
          <div
            class="grid-content bg-purple"
            @click="$open('https://gforge.inria.fr/projects/mdptetris')"
          >
            <div><img
                src="./image/suanfajiegao.png"
                class="logo-style"
              /></div>
            <div class="title-style">俄罗斯方块游戏的算法网站</div>
          </div>
        </el-col>
      </el-row>
      <el-row
        type="flex"
        :gutter="20"
        justify="center"
      >
        <el-col :span="6">
          <div
            class="grid-content bg-purple"
            @click="$open('https://visualgo.net/en')"
          >
            <div><img
                src="./image/keshihua.png"
                class="logo-style"
              /></div>
            <div class="title-style">算法可视化来源 - visualgo</div>
          </div>
        </el-col>
        <el-col :span="6">
          <div
            class="grid-content bg-purple"
            @click="$open('https://github.com/algorithm-visualizer/algorithm-visualizer')"
          >
            <div><img
                src="./image/sf.png"
                class="logo-style"
              /></div>
            <div class="title-style">算法可视化工具</div>
          </div>
        </el-col>
        <el-col :span="6">
          <div
            class="grid-content bg-purple"
            @click="$open('https://github.com/skidding/illustrated-algorithms')"
          >
            <div><img
                src="./image/suanfa_1.png"
                class="logo-style"
              /></div>
            <div class="title-style">观察算法与数据结构的工作方式</div>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- <d2-page-cover>
      <d2-icon-svg
        class="logo"
        name="d2-admin"
      />
      <template slot="footer">
        <div class="btn-group">
          <span
            class="btn-group__btn"
            @click="$open('https://github.com/d2-projects')"
          >开源组织</span> |
          <span
            class="btn-group__btn"
            @click="$open('https://d2.pub/zh/doc/d2-admin')"
          >文档</span> |
          <span
            class="btn-group__btn"
            @click="$open('https://github.com/d2-projects/d2-admin-start-kit')"
          >简化版</span> |
          <span
            class="btn-group__btn"
            @click="$open('https://juejin.im/user/57a48b632e958a006691b946/posts')"
          >掘金</span> |
          <el-popover
            :width="172"
            trigger="hover"
          >
            <p class="d2-mt-0 d2-mb-10">今日前端</p>
            <img
              src="./image/qr@2x.png"
              style="width: 172px;"
            >
            <span
              slot="reference"
              class="btn-group__btn btn-group__btn--link"
            >
              <d2-icon name="weixin" />
              微信公众号
            </span>
            <p style="font-size: 12px; margin-top: 0px; margin-bottom: 0px;">
              官方公众号，主要推送前端技术类文章、框架资源、学习教程，以及 D2 系列项目更新信息
            </p>
          </el-popover>
        </div>
        <d2-badge />
        <d2-help />
      </template>
    </d2-page-cover> -->
  </d2-container>
</template>

<script>

export default {

  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  .content {
    margin-top: 150px;
    .el-row {
      margin-bottom: 20px;
      // flex-direction: column;

      &:last-child {
        margin-bottom: 0;
      }
    }
    .el-col {
      border-radius: 4px;
    }
    .bg-purple-dark {
      background: #99a9bf;
    }
    .bg-purple {
      background: #ffffff;
    }
    .bg-purple-light {
      background: #e5e9f2;
    }
    .grid-content {
      border-radius: 4px;
      min-height: 36px;
      cursor: pointer;
      display: flex;
      flex-direction: row;
      border: #e5edf3 1px solid;
      padding: 20px;

      white-space: nowrap; /*禁止自动换行*/
      overflow: hidden;
      .logo-style {
        width: 100px;
        height: 100px;
      }
      .title-style {
        line-height: 100px;
        padding: 0 12px;
        color: #373e4a;
        font-weight: 700;
        font-size: 15px;
      }
    }
    .grid-content:hover {
      -webkit-animation: shadow-drop-2-bottom 0.4s
        cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: shadow-drop-2-bottom 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)
        both;
    }
    .row-bg {
      padding: 10px 0;
      background-color: #f9fafc;
    }
  }
}

/* ----------------------------------------------
 * Generated by Animista on 2021-3-10 16:50:11
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation shadow-drop-2-bottom
 * ----------------------------------------
 */
@-webkit-keyframes shadow-drop-2-bottom {
  0% {
    -webkit-transform: translateZ(0) translateY(0);
    transform: translateZ(0) translateY(0);
    -webkit-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
  100% {
    -webkit-transform: translateZ(50px) translateY(-12px);
    transform: translateZ(50px) translateY(-12px);
    -webkit-box-shadow: 0 12px 20px -12px rgba(0, 0, 0, 0.35);
    box-shadow: 0 12px 20px -12px rgba(0, 0, 0, 0.35);
  }
}
@keyframes shadow-drop-2-bottom {
  0% {
    -webkit-transform: translateZ(0) translateY(0);
    transform: translateZ(0) translateY(0);
    -webkit-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
  100% {
    -webkit-transform: translateZ(50px) translateY(-12px);
    transform: translateZ(50px) translateY(-12px);
    -webkit-box-shadow: 0 12px 20px -12px rgba(0, 0, 0, 0.35);
    box-shadow: 0 12px 20px -12px rgba(0, 0, 0, 0.35);
  }
}
</style>
