
var path = require('path');
var async = require('simpleasync');

function install(ajgenesis, cb) {
    ajgenesis.createDirectory('ajgenesis');
    ajgenesis.createDirectory(path.join('ajgenesis', 'modules'));
    ajgenesis.createDirectory(path.join('ajgenesis', 'modules', 'entity'));
    
    async()
    .then(function (data, next) {
        ajgenesis.copyFile(path.join(__dirname, 'add.js'), path.join('ajgenesis', 'modules', 'entity', 'add.js'), next);
    })
    .then(function (data, next) {
        ajgenesis.copyFile(path.join(__dirname, 'addproperty.js'), path.join('ajgenesis', 'modules', 'entity', 'addproperty.js'), next);
    })
    .then(function (data, next) {
        ajgenesis.copyFile(path.join(__dirname, 'import.js'), path.join('ajgenesis', 'modules', 'entity', 'import.js'), next);
    })
    .then(function (data, next) {
        ajgenesis.copyDirectory(path.join(__dirname, 'templates'), path.join('ajgenesis', 'modules', 'entity', 'templates'), next);
    })
    .then(function (data, next) {
        ajgenesis.copyDirectory(path.join(__dirname, 'lib'), path.join('ajgenesis', 'modules', 'entity', 'lib'), cb);
    })
    .fail(function (err) {
        cb(err, null);
    })
    .run();
}

module.exports = {
    install: install
}