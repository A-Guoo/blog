import { defineConfig } from "vitepress";

export default defineConfig({
  title: "blog",
  description: "The blog written by AGuo.",
  lang: "zh-CH",

  lastUpdated: true, // 是否展示更新时间
  cleanUrls: true, // URL 中删除尾随的 .html

  // 设置元数据
  head: [
    ["link", { rel: "icon", type: "image/png", href: "https://h5static.dewucdn.com/sociality/static/10131855/20240603-c8428b0f5e52253b-w533h400.webp" }], // favicon
    [
      "meta",
      {
        name: "viewport",
        content:
          "width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no",
      },
    ],
    ["meta", { name: "keywords", content: "" }],
    [
      "script",
      {
        content:
          "window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };",
      },
    ],
    ["script", { src: "/_vercel/insights/script.js", defer: true }],
  ],

  // 主题配置
  themeConfig: {
    // 大纲设置
    outline: [2, 5], // 识别<h2>-<h4>的标题
    outlineTitle: "本页目录",
    lastUpdatedText: "上次更新",
    // 开启本地搜索
    search: {
      provider: "local",
    },
    // 导航页
    nav: [{ text: "首页", link: "index" }],
    // 文件目录
    sidebar: [],
    footer: {
      message: "Released under the MIT License.",
      copyright: `Copyright © 2024 AGuo`,
    },

    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    // 社交链接
    socialLinks: [{ icon: "github", link: "https://github.com/LinxieMuxing/blog" }],
  },

  vite: {},

  ignoreDeadLinks: true,
});
