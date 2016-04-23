/*
    usage gulp create-folders --n NomeModulo
    Erick Wendel 
    11/02/2016
*/

var fs = require('fs');
var path = require('path');
var TYPE = { controller: 'controller', factory: 'factory', view: 'view'};


function getStrItemFormated(target) {
    target = target.split('-')[0];
    var strBase = target.substr(1, target.lenght);
    var itemVariant = target[0].toUpperCase() + strBase;
    var itemLower = target.toLowerCase();
    return { itemVariant: itemVariant, itemLower: itemLower };
};
function viewDefault(itemVariant, itemLower) {
    var str = '<ion-view view-title="' + itemVariant + '" name="' + itemLower + '-view">\n' +
        '    <ion-content>\n' +
        '    </ion-content>\n' +
        '</ion-view>';
    return str;
}
function functionsDefault(module, typeFunc, func) {
    var factory = "\n\t\t return {  };\n"
    var str = '(function(angular) { \n' +
        '    var app = angular.module("' + module + '", []); \n\n' +
        '    app.' + typeFunc + '("' + func + '", [function () { \n\n' +
            (typeFunc === TYPE.factory ? factory : "") + 
        
        '     }]);\n' +
        '})(angular);';

    return str;
}

function baseStrFile(item) {
    var itens = getStrItemFormated(item.value);
    var module = '';
    var func = '';
    var typeFunc = '';
    var str = '';

    switch (item.type) {
        case TYPE.controller:
            module = "controllers." + itens.itemLower + "Controller";
            func = itens.itemVariant + "Ctrl";
            typeFunc = TYPE.controller;
            break;
        case TYPE.factory:
            module = "services." + itens.itemLower + "Service";
            func = itens.itemVariant + "Service";
            typeFunc = TYPE.factory;
            break;
    }

    if (item.type === TYPE.view)
        str = viewDefault(itens.itemVariant, itens.itemLower);

    else
        str = functionsDefault(module, typeFunc, func);

    return str;
};

function createFolder(folderLocation) {
    try {
        console.log(folderLocation)
        fs.mkdirSync(path.join(folderLocation));
    } catch (e) {
        if (e.code == 'EEXIST')
            console.log(e);
    }
};
function createFiles(folderLocation, target) {

    var items = [
        { 'value': target + '-controller.js', 'type': TYPE.controller },
        { 'value': target + '-service.js', 'type': TYPE.factory },
        { 'value': target + '-view.html', 'type': TYPE.view },
        { 'value': target + '.css', 'type': 'css' }
    ];

    items.map(function (item) {
        var location = folderLocation + item.value;
        console.log('creating ' + location);
        fs.exists(location, function (exists) {
            if (!exists) {
                var stream = fs.createWriteStream(location);
                if (!(item.type === "css")) {
                    stream.once('open', function (fd) {
                        var str = baseStrFile(item);
                        stream.write(str);
                        stream.end();

                    });
                }
            }
            else
                console.log('files exists in project: ' + location);

        });

    });
}




exports.createFiles = createFiles;
exports.createFolder = createFolder; 