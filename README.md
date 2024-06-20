# 成都 Web 开发者大会

[![CI & CD](https://github.com/FreeCodeCamp-Chengdu/Web-Conf/actions/workflows/main.yml/badge.svg)][2]
[![TechConf](https://img.shields.io/badge/TechConf-Chinese-red)][3]

## 官网地址

https://web-conf.dev/

## 开发者

https://github.com/FreeCodeCamp-Chengdu/Web-Conf/graphs/contributors

## 技术栈

-   逻辑语言: [TypeScript v5][4]
-   组件引擎: [WebCell v3][5]
-   组件库: [BootCell v2][6]
-   状态管理: [MobX v6][7]
-   打包工具: [Parcel v2][8]

## 本地开发

### 安装工程

```shell
git clone https://github.com/FreeCodeCamp-Chengdu/Web-Conf.git
cd Web-Conf

npm i pnpm -g
pnpm i
npm start
```

### 后端服务

部分页面需要一些后端接口，详见 <https://github.com/FreeCodeCamp-Chengdu/OWS_BE>

### 导入素材

```shell
node toolkit/import-assets path/to/media/folder
```

[2]: https://github.com/FreeCodeCamp-Chengdu/Web-Conf/actions/workflows/main.yml
[3]: https://github.com/b-conf/chinese-tech-conf-schedule
[4]: https://typescriptlang.org
[5]: https://web-cell.dev/
[6]: https://bootstrap.web-cell.dev/
[7]: https://mobx.js.org
[8]: https://parceljs.org
