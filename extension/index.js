"use strict"
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;

// 引入常用css class
const CSS_CLASS = require('../css-class');

// 注册命令
const useCommand = require('./useCommand');
// 注册右键菜单命令操作
const useMenuCommand = require("./useMenuCommand");

// 这是插件被激活时执行的函数
function activate(context){
    // 注册命令
    useCommand.default(context, CSS_CLASS);
    useMenuCommand.default(context, CSS_CLASS);
}

// 这是插件被销毁时调用的方法，比如释放内存等。
function deactivate() {}

module.exports = {
	activate,
	deactivate
}