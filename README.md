# 使用 Jest 测试 Angular 组件

Angular 版本：8.2.0，本项目由 Angular CLI 生成，使用 Jest 替换了 Jasmine

## 背景

Jest 在效率、易用性上都胜于 Jasmine 且完全兼容已有的 Jasmine 语法 （虽然 Angular 官方依旧推荐 Jasmine），

尤其是 Jest 的 [Snapshot Testing](https://jestjs.io/docs/en/snapshot-testing)，很适合轻量级的 UI 测试。

~~也适合提高测试覆盖率 😆~~。

例如修改了 template 后运行测试，就会有相应的提示

![](https://raw.githubusercontent.com/LiuuY/angular-test-using-jest/master/screenshots/snapshot.png)

## 使用方法

Angular 集成 Jest 一般都会使用 [jest-present-angular](https://github.com/thymikee/jest-preset-angular)。

但是这个文档忽略了介绍几个重要的配置，导致不能很简单的集成。

我使用 Angular CLI 生成了一个标准 Angular 工程，在此基础上直接集成了 Jest。

大家可以直接对照，详见 [diff.patch](https://github.com/LiuuY/angular-test-using-jest/blob/master/diff.patch)。

## 其他 😏
[State of JS 关于 Testing 框架流行度调查](https://2019.stateofjs.com/testing/)
![](https://raw.githubusercontent.com/LiuuY/angular-test-using-jest/master/screenshots/trend.png)
