
var entity = require('..');
var path = require('path');
var fs = require('fs');
var ajgenesis = require('ajgenesis');

exports['Install module'] = function (test) {
    test.async();
    
    var cwd = process.cwd();
    
    process.chdir(__dirname);
    
    entity.install(ajgenesis, function (err, data) {
        test.ok(!err);
        test.ok(fs.existsSync('ajgenesis'));
        test.ok(fs.existsSync(path.join('ajgenesis', 'modules')));
        test.ok(fs.existsSync(path.join('ajgenesis', 'modules', 'entity')));
        test.ok(fs.existsSync(path.join('ajgenesis', 'modules', 'entity', 'add.js')));
        test.ok(fs.existsSync(path.join('ajgenesis', 'modules', 'entity', 'addproperty.js')));
        test.ok(fs.existsSync(path.join('ajgenesis', 'modules', 'entity', 'import.js')));
        test.ok(fs.existsSync(path.join('ajgenesis', 'modules', 'entity', 'templates')));
        test.ok(fs.existsSync(path.join('ajgenesis', 'modules', 'entity', 'templates', 'entity.json.tpl')));
        process.chdir(cwd);
        test.done();
    });
}