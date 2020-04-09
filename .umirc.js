/*
 * @Description: umi配置文件
 * @Author: wangbo
 * @Date: 2020-04-08 17:48:14
 * @LastEditors: wangbo
 * @LastEditTime: 2020-04-09 15:59:27
 */
const path = require('path');
export default {
  treeShaking: true,
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        { path: '/', component: '../pages/index', title: '登录' },
        { path: '/test', component: '../pages/test', title: '找回密码' }
      ],
    },
  ],
  alias: {
    images: path.resolve(__dirname, 'src/images')
  },
  theme: {
  	// antd-mobile主题定制
  	"@brand-primary": "#FF7300",
  	"@brand-error": "#f4333c",										
  	"@brand-primary-tap": "#EA6A00",				// 组件按下
  	"@color-text-base": "#344047",					// 常规字体颜色
  	"@color-text-secondary": "#657270",     // 辅助色
  	"@color-text-caption": "#A2ABAE",       // 辅助描述
    "@color-divider": "#ddd",               // 分隔线
    "@color-tap": "#ddd",                   // 列表按下背景色
    "@color-white": "#fff",                 // 白色
  	"@fill-body": "#f5f5f5",						    // 页面背景
  	"@fill-disabled": "#DCDCDC",					  // 通用失效背景
    "@font-size-base": "15 * @hd",          // 常规字体大小
    "@icon-size-md": "30 * @hd",            // 导航条上的图标、grid的图标大小
    "@button-height": "44 * @hd",           // 按钮高度
  },
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true, // 启用后自动配置babel-plugin-import
        dva: true,
        dynamicImport: true,
        title: 'umi-antd-mobile-demo',
        dll: true,
        hd: true,
        routes: {
          exclude: [/components\//],
        },
      },
    ],
  ],
};
