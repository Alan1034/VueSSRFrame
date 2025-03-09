/*
 * @Author: 陈德立*******419287484@qq.com
 * @Date: 2025-03-02 15:44:56
 * @LastEditTime: 2025-03-09 15:57:03
 * @LastEditors: 陈德立*******419287484@qq.com
 * @Github: https://github.com/Alan1034
 * @Description: 
 * @FilePath: \VueSSRFrame\nuxt.config.ts
 * 
 */
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@element-plus/nuxt"],
  vite: {
    optimizeDeps: {
      force: true,
    },
  },
});