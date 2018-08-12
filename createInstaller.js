let createWindowsInstaller = require('electron-winstaller').createWindowsInstaller;
let path = require('path');

getInstallerConfig()
    .then(createWindowsInstaller)
    .catch( (err)=>{
    console.error(err.message || err);
    process.exit(1);

});

function getInstallerConfig() {
    console.log('creating windows installer');
    const rootPath = path.join('./');
    const outPath = path.join(rootPath, 'release-builds');
    console.log(rootPath);
    return  Promise.resolve({
        appDirectory: path.join(outPath, 'Electron-tutorial-app-win32-ia32/'),
        authors: 'Paul Frank Pacheco Carpio',
        noMsi: true,
        outputDirectory: path.join(outPath, 'windows-installer'),
        exe: 'Yupay - Administración de Ventas.exe',
        setupExe: 'Yupay.exe',
        setupIcon: path.join(__dirname,'assets/app.ico')
    })
}