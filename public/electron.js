const electron = require("electron");
const path = require("path");

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let loadingScreen;
let mainWindow;

function createWindow() {
    // Create a loading screen window
    loadingScreen = new BrowserWindow({
        width: 350,
        height: 150,
        webPreferences: { nodeIntegration: true, contextIsolation: false },
        resizable: false,
        frame: false,
        show: false,
        backgroundColor: "#769c99",
    });
    
    loadingScreen.loadFile(
        path.join(__dirname, "../build/loading.html")
    );

    // Show loading screen
    loadingScreen.once("ready-to-show", () => {
        loadingScreen.show();
    });

    // Create the browser window.
    mainWindow = new BrowserWindow({
        width: 350,
        height: 150,
        webPreferences: { nodeIntegration: true, contextIsolation: false },
        resizable: false,
        frame: false,
        show: false,
        backgroundColor: "#769c99",

    });
    // and load the index.html of the app.
    console.log(__dirname);
    mainWindow.loadFile(path.join(__dirname, "../build/index.html"));

    // Once our app is ready to boot, we'll show the main window and kill the loading screen

    mainWindow.once('ready-to-show', () => {
        // delay loading screen show time
        setTimeout(() => {
            loadingScreen.close();
            mainWindow.show();
        }, 1000);
    });

}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", createWindow);

