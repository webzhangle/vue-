<template>
  <div>
    <NavBar
      title="第二页"
      left-text="返回"
      right-text="按钮"
      left-arrow
      fixed
      @click-left="onClickLeft"
    />
    <div class="content">
      <div class="van-hairline--bottom">1</div>
      <div style="border-top: 1px solid #ebedf0; margin-top: 10px">11</div>
      <h1 style="text-align:center;">testTwopage</h1>
      <Button type="warning">温馨 提示</Button>
      <Cell title="姓名" value="王宾"></Cell>
      <Cell title="姓名" value="王宾"></Cell>
      <Cell title="姓名" value="王宾"></Cell>
      <Cell title="姓名" value="王宾"></Cell>
      <Cell title="姓名" value="王宾"></Cell>
      <Cell title="姓名" value="王宾"></Cell>
      <Cell title="姓名" value="王宾"></Cell>
      <Cell title="姓名" value="王宾"></Cell>
      <Cell title="姓名" value="王宾"></Cell>
      <Cell title="姓名" value="王宾"></Cell>
      <Cell title="姓名" value="王宾"></Cell>
      <Cell title="姓名" value="王宾"></Cell>
      <Cell title="姓名" value="王宾"></Cell>
      <Cell title="姓名" value="王宾"></Cell>
      <Cell title="姓名" value="王宾"></Cell>
      <Cell title="姓名" value="王宾"></Cell>
    </div>
  </div>
</template>
<script>
import {Button, Cell, NavBar} from 'vant'
export default {
  name: 'testOnePage',
  components: {
    Button,
    Cell,
    NavBar
  },
  methods: {
    onClickLeft () {
      window.location.href = "./testOnePage.html"
    }
  }
}
</script>
<style>
.content{
  padding-top: 46px;
}
</style>


