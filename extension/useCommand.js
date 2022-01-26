"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

const vscode = require("vscode");

// 注册命令，点击命令填写内容到编辑器
function registerCommand(context, CSS_CLASS) {
    CSS_CLASS.forEach(({ style, key }, index) => {
        const styleString = String(style);
        const disposable = vscode.commands.registerCommand(`class-${key}`, () => {
            const editor = vscode.window.activeTextEditor;
            if (editor) {
                const { selections } = editor;
                editor.edit(editBuilder => {
                    selections.forEach(selection => {
                        const { start, end } = selection;
                        const range = new vscode.Range(start, end);
                        editBuilder.replace(range, styleString);
                    });
                });
            
            }
            else {
                vscode.window.showWarningMessage('class: 只有在编辑文本的时候才可以使用!');
            }
        });
        context.subscriptions.push(disposable);
    });
}

exports.default = registerCommand;