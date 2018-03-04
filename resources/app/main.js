const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const path = require("path");
const globalShortcut = require('global-shortcut');
const setting = require('chqportal/setting.js');
// const appLog = require('chqportal/logger.js');
let mainWindow;


var shouldQuit = app.makeSingleInstance(function(commandLine, workingDirectory) {
  if (mainWindow) {
    if (mainWindow.isMinimized()) mainWindow.restore();
    mainWindow.focus();
  }
});

if (shouldQuit) {
  app.quit();
}

const isFullScreen = setting.getFullScreen() || false;



function createWindow() {
  var screen = electron.screen;
  var size = screen.getPrimaryDisplay().workAreaSize;
  mainWindow = new BrowserWindow({
    width: size.width * 0.5,
    height: size.height * 7,
    title: "ChqPortal",
    frame: true,
    // darkTheme:true,
    // backgroundColor:"#FFFFFF",
    autoHideMenuBar: true,
    fullscreen: isFullScreen,
    fullscreenable: true,
    webPreferences: {
      plugins: true,
      webSecurity: true
    }
  });

  const webContents = mainWindow.webContents;
  mainWindow.loadURL(path.join(__dirname, '/index.html'));

  mainWindow.on('closed', function() {
    mainWindow = null;
    // webContents = null;
  });

  mainWindow.on('resize', function() {});

  mainWindow.on('focus', function() {});

}

app.commandLine.appendSwitch('ppapi-flash-path', '/plugins/flash/pepflashplayer64_22_0_0_192.dll');
app.commandLine.appendSwitch('ppapi-flash-version', '22.0.0.192');

app.on('ready', function() {
  createWindow();
  globalshortcutReg();

  // var protocol = electron.protocol;
  // protocol.registerFileProtocol('atom', function(req, cb) {
  //   appLog.log("req", req);
  // }, function(error) {
  //   appLog.log("error", error);
  // });

})



function globalshortcutReg() {


  globalShortcut.register('alt+`', function() {
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore();
      else {
        mainWindow.minimize();
      }
    }
  });
  globalShortcut.register('ctrl+shift+i', function() {
    mainWindow.toggleDevTools();
  });

}

app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

app.on('activate', function() {
  if (mainWindow === null) {
    createWindow()
  }
});

app.on('will-quit', function() {
  globalShortcut.unregisterAll();
});