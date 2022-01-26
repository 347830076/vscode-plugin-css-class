"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
// 注册命令在右键菜单，点击后弹窗搜索列表
function registerCommandMenu(context, CSS_CLASS) {
    const disposable = vscode.commands.registerCommand('class-menu', () => {
        vscode.window.showQuickPick(CSS_CLASS.map(({ title, style }) => {
            return {
                label: title,
                style: String(style),
            };
        }), {
            placeHolder: '请输入关键词',
        }).then(item => {
            console.log('item', item);
            if (!item)
                return;
            const editor = vscode.window.activeTextEditor;
            if (editor) {
                const ruleString = String(item.style);
                const { selections } = editor;
                editor.edit(editBuilder => {
                    selections.forEach(selection => {
                        const { start, end } = selection;
                        const range = new vscode.Range(start, end);
                        editBuilder.replace(range, ruleString);
                    });
                });
            }
        });
    });
    context.subscriptions.push(disposable);
}

exports.default = registerCommandMenu;