<script setup lang="ts">
import { boxWrapper } from '@/assets/css/common.module.css'
import javascriptSvg from '@/assets/images/javascript.svg'
const imgUrl = new URL('./assets/images/javascript.svg', import.meta.url).href
</script>

<template>
  <div class="container" :class="boxWrapper">
    我是APP
    <img :src="javascriptSvg" alt="" />
    <img :src="imgUrl" alt="" />
  </div>
</template>

<style lang="less" scoped>
.container {
  // 新语法会被兼容处理
  width: clamp(100px, 30%, 200px);
  display: flex;
  user-select: none;
  color: @zzblue;
  color: var(--primary-color);
  color: @color;
  color: @primary-color;
  font-size:  2px / 2;
}
</style>
