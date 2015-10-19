var app = require('app')
var BrowserWindow = require('browser-window')


app.on('ready', function() {
	var mainWindow = new BrowserWindow({
		width: 1150,
		height: 650,
		'title-bar-style': 'hidden-inset'
	})
	mainWindow.loadUrl('file://' + __dirname + '/index.html')
})