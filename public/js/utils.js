const request = require('request');

request("http://yupay.pe/v1/list",function (error,response,body) {
    if (!error){
        console.log(body);
        var element = document.getElementById('content');
        //use parse to convert the data from REST API to JSON OBJECT
        var data  = JSON.parse(body);
        for(let i=0;i<data.length;i++) {
            element.innerHTML += '<div class="col-md">'+
                '<div class="card bg-light">\n' +
                '  <div class="card-header">\n' +
                data[i].name +
                '  </div>\n' +
                `<img class="card-img" src=${data[i].image} alt=${data[i].name}>`+
                '  <div class="card-body">\n' +
                '    <h5 class="card-title">S/.'+data[i].price+'</h5>\n' +
                '    <p class="card-text">'+data[i].created_at+'</p>\n' +
                '    <a href="#" class="btn btn-primary">Comprar</a>\n' +
                '  </div>\n' +
                '</div>'+'</div>'
        }
    }

});
let $ = require('jquery');
let path = require('path');
let notifier = require('node-notifier');


let count = 0;
$('#textEx').text(count.toString());
$('#btnA').on('click',()=>{
    count++;
    $('#textEx').text(count);
    notifier.notify({
            title: 'Basic Notification',
            body: 'Short message part',
            icon: path.join("/public/images/png/256x256.png"),
            sound: true,
            wait: true,
        },
        function (err,res) {

        }
    );
    notifier.on('click',function (notifierObject,opt) {
        console.log("Clicked notification")
    });
    notifier.on('timeout',function (notifierObject,opt) {
        console.log("Timed out!")
    });
});
$('#btnNext').on('click',()=>{
    const {remote} = require('electron');
    remote.getCurrentWindow().loadURL(__dirname+'/new-product.html');
    console.log("hola no funciono")
});