<template>
  <div>
    <NavBar 
      title="标题"
      left-text="返回"
      right-text="按钮"
      left-arrow
    />
    <h1 style="text-align:center;">testONepage</h1>
    <p class="rem">rem</p>
    <Button type="primary" @click="href">点击跳转</Button>
    <Button type="danger" @click="sys">扫一扫</Button>
    <!-- <van-button loading type="danger" loading-text="加载中..." />
    <van-button type="warning">警告按钮</van-button> -->
    <Cell title="标题">1</Cell>
    <Checkbox style="font-size: 14px" v-model="checked">复选框</Checkbox>
  </div>
</template>
<script>
import { NavBar, Cell, Button, Checkbox } from 'vant'
import { getQiniuToken } from '@/api/common'
import { test, scanQRCode } from '@/config/weixin.js'
export default {
  name: 'testOnePage',
  components: {
    Cell,
    Button,
    Checkbox,
    NavBar
  },
  data () {
    return {
      checked: true
    }
  },
  mounted () {
    // this.getToken()
  },
  methods: {
    sys () {
      console.log('执行')
      scanQRCode((res) => {
        console.log(res)
      }, () => {
        console.log('错误：')
        console.log(res)
      })
    },
    href () {
      let a = 123
      window.location.href = './testTwoPage.html?query=' + a
    },
    getToken () {
      getQiniuToken().then((res) => {
        console.log(res)
      })
    }
  }
}
</script>
<style>
 .rem{
   font-size: 12px;
 }
</style>


