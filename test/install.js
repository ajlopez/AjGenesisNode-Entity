
var hello = require('..');
var path = require('path');
var fs = require('fs');
var ajgenesis = require('ajgenesis');

exports['Install module'] = function (test) {
    test.async();
    
    var cwd = process.cwd();
    
    process.chdir(__dirname);
    
    hello.install(ajgenesis, function (err, data) {
        test.ok(!err);
        fs.existsSync('ajgenesis');
        fs.existsSync(path.join('ajgenesis', 'modules'));
        fs.existsSync(path.join('ajgenesis', 'modules', 'entity'));
        fs.existsSync(path.join('ajgenesis', 'modules', 'entity', 'add.js'));
        fs.existsSync(path.join('ajgenesis', 'modules', 'entity', 'addproperty.js'));
        fs.existsSync(path.join('ajgenesis', 'modules', 'entity', 'import.js'));
        process.chdir(cwd);
        test.done();
    });
}