// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "css-class" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	
	let disposable = vscode.commands.registerCommand('css-class.class:带左边柱子的标题', function (uri) {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		console.log(vscode.window);
		vscode.window.showInformationMessage('Hello World ');

		const editor = vscode.window.activeTextEditor;
		if (editor) {
			const { selections } = editor;

			editor.edit(editBuilder => {
				selections.forEach(selection => {
					const { start, end } = selection;
					const range = new vscode.Range(start, end);
					editBuilder.replace(range, `.g-title {
	position: relative;
	padding-left: 12px;
	font-size: 20px;
	font-weight: bold;
	line-height: 30px;
	
	&::before {
		position: absolute;
		top: 50%;
		left: 0;
		width: 4px;
		height: 24px;
		background: $color-FF5A5F;
		content: '';
		transform: translateY(-50%);
	}
}
					`);
				});
			});
		}
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
