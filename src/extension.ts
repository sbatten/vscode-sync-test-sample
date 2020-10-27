import * as vscode from 'vscode';

const stateKey = 'sbatten.999-state-test-key';
export function activate(context: vscode.ExtensionContext) {
	context.syncedGlobalState.syncedKeys = [stateKey];

	// Check sync state
	context.subscriptions.push(vscode.commands.registerCommand('sync-test.check-synced-state', () => {
		const curVal = context.syncedGlobalState.get<number>(stateKey);
		if (curVal !== undefined) {
			vscode.window.showInformationMessage('Upstream has synced state: ' + curVal);
		} else {
			vscode.window.showInformationMessage('Upstream has no synced state');
		}
	}));

	// Push sync state
	context.subscriptions.push(vscode.commands.registerCommand('sync-test.push-synced-state', () => {
		const newVal = (context.syncedGlobalState.get<number>(stateKey) || 0) + 1;
		context.syncedGlobalState.update(stateKey, newVal);
		vscode.window.showInformationMessage('Pushed new value: ' + newVal);
	}));

	// Push delete sync state
	context.subscriptions.push(vscode.commands.registerCommand('sync-test.delete-synced-state', () => {
		context.syncedGlobalState.syncedKeys = [];
		vscode.window.showInformationMessage('Cleared state.');
	}));

	// Reregister sync state 


	context.subscriptions.push(vscode.commands.registerCommand('sync-test.register-synced-state', () => {
		context.syncedGlobalState.syncedKeys = [stateKey];
		vscode.window.showInformationMessage('Reregister key sync state.');
	}));



}