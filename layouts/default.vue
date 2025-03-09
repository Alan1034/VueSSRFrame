<!--
 * @Author: 陈德立*******419287484@qq.com
 * @Date: 2025-03-02 16:30:16
 * @LastEditTime: 2025-03-09 14:43:31
 * @LastEditors: 陈德立*******419287484@qq.com
 * @Github: https://github.com/Alan1034
 * @Description: 
 * @FilePath: \VueSSRFrame\layouts\default.vue
 * 
-->
<template>
  <div id="default-layout">
    <p>Some default layout content shared across all pages</p>
    <slot />
  </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
#default-layout {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>