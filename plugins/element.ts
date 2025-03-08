/**
 * @format
 * @Author: 陈德立*******419287484@qq.com
 * @Date: 2025-03-08 21:38:08
 * @LastEditTime: 2025-03-08 21:40:29
 * @LastEditors: 陈德立*******419287484@qq.com
 * @Github: https://github.com/Alan1034
 * @Description:
 * @FilePath: \VueSSRFrame\plugins\element.ts
 */

import { defineNuxtPlugin } from "#app";
import ElementPlus from "element-plus";
import 'element-plus/dist/index.css'
// import zhCn from "element-plus/es/locale/lang/zh-cn";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(ElementPlus,
  //    {
  //   locale: zhCn,
  // }
);
});
