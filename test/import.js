
var importtask = require('../import'),
    path = require('path'),
    fs = require('fs'),
    fsutils = require('./lib/fsutils'),
    ajgenesis = require('ajgenesis');
    
exports['import entities'] = function (test) {
    test.async();
    
    var cwd = process.cwd();
    
    process.chdir('test');
    fsutils.removeDirSync('ajgenesis');
    
    importtask(null, ['./models'], ajgenesis, function (err) {
        if (err)
            throw err;
            
        var model = ajgenesis.loadModel();
        
        test.ok(model);        
        test.ok(model.entities);
        test.ok(Array.isArray(model.entities));
        test.equal(model.entities.length, 2);
        
        var entity = model.entities[0];        
        test.equal(entity.name, "customer");
        var entity = model.entities[1];
        test.equal(entity.name, "supplier");
            
        process.chdir(cwd);
        
        test.done();
    });
    
}

