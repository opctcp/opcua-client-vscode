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
	console.log('Congratulations, your extension "opcua-client-vscode" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable1 = vscode.commands.registerCommand('extension.helloWorld', function () {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World 1!');
	});

	context.subscriptions.push(disposable1);

	let disposable2 = vscode.commands.registerCommand('opc-ua-client-servers-connect', function () {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World 2!');
	});

	context.subscriptions.push(disposable2);

	context.subscriptions.push(
		vscode.commands.registerCommand('opcua-client-vscode.opc-ua-client-viewer', () => {
		  // Create and show panel
		  const panel = vscode.window.createWebviewPanel(
			'opc-ua-client-viewer',
			'OPC UA Client Viewer',
			vscode.ViewColumn.One,
			{}
		  );
		  panel.webview.html = getWebviewOPCUAClientViewer();
		})
	  );
}
exports.activate = activate;

function deactivate() {}

module.exports = {
	activate,
	deactivate
}

function getWebviewOPCUAClientViewer() {
	return `<!DOCTYPE html>
  <html lang="en">
  <head>
	  <meta charset="UTF-8">
	  <meta name="viewport" content="width=device-width, initial-scale=1.0">
	  <title>OPC UA Client Viewer</title>
  </head>
  <body>

  </body>
  </html>`;
  }