# VS Code Extension Sync Test Sample

This is a sample extension using the Extension Global State Sync API.

## Steps

### Package the extension
```
vsce package
```

### Open two instances of Code - Insiders
```
code-insiders --user-data-dir pc1 --extensions-dir pc1-ext --enable-proposed-api vscode-sbatten.vscode-ext-sync-test
code-insiders --user-data-dir pc2 --extensions-dir pc2-ext --enable-proposed-api vscode-sbatten.vscode-ext-sync-test
```

### Sign in and run commands
1. Sign into Settings+Extension Sync on both windows
2. **Window 1:** Run command `Push Sync State`
3. **Window 1:** Force sync
4. **Window 2:** Force sync
5. **Window 2:** Run command `Check Sync State`







