
var importtask = require('../ajgenesis/modules/entity/import'),
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
        test.ok(model.entities.customer);
        test.ok(model.entities.supplier);
        
        var entity = model.entities.customer;        
        test.equal(entity.name, "customer");
        var entity = model.entities.supplier;
        test.equal(entity.name, "supplier");

        fsutils.removeDirSync(path.join(__dirname, 'ajgenesis'));
            
        process.chdir(cwd);
        
        test.done();
    });
    
}

