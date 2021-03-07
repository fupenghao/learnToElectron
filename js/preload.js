const electron = require('electron');
const os = require('os-utils');
// const ipcRenderer = electron.ipcRenderer;


setInterval(() => {
    os.cpuUsage(function(v){
        //   console.log('CPU usage (%): ' + v*100);
          cpuData = Number(v*100)
          document.getElementById('cpu').innerHTML = cpuData.toFixed(2);
        //   console.log('Mem usage (%): ' + os.freememPercentage()*100);
          memData = Number(os.freememPercentage()*100)
          document.getElementById('mem').innerHTML = memData.toFixed(2);
        //   console.log('Total Mem (GB) (%): ' + os.totalmem()/1024);
          memTotal = Number(os.totalmem()/1024)
          document.getElementById('total-mem').innerHTML = memTotal.toFixed(2); 
        //   mainWindow.webContents.send('cpu',v*100);
        //   mainWindow.webContents.send('mem',os.freememPercentage()*100);
        //   mainWindow.webContents.send('total-mem',os.totalmem()/1024);
        });
},1000);

// ipcRenderer.on('cpu',(event,data) => {
    // console.log('cpu % ' + data);
// });
// ipcRenderer.on('mem',(event,data) => {
    // console.log('mem % ' + data);
// });
// ipcRenderer.on('total-mem',(event,data) => {
    // console.log('total-mem GB ' + data);
// });