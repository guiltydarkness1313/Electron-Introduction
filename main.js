const {app,BrowserWindow} = require('electron');
const url = require('url');
const path = require('path');
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';

let win;

function createWindow(){
  win = new BrowserWindow(
      {
          titleBarStyle:"hidden",
          width:1280,
          height:720,
          minHeight:600,
          minWidth:900,
          backgroundColor:'#FA0E0E',
          show:true,
          icon:path.join(__dirname,'public/images/png/256x256.png')
      }
      );

  win.loadURL(url.format ({
    pathname: path.join(__dirname, 'views/index.html'),
    protocol: 'file:',
    slashes: true
  }))
}

app.on('ready',createWindow);
