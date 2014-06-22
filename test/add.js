
var addtask = require('../add'),
    path = require('path'),
    fs = require('fs'),
    fsutils = require('./lib/fsutils'),
    ajgenesis = require('ajgenesis');
    
exports['add customer entity'] = function (test) {
    test.async();
    
    var cwd = process.cwd();
    
    process.chdir('test');
    
    addtask(null, ['customer'], ajgenesis, function (err) {
        if (err)
            throw err;
            
        var model = ajgenesis.loadModel('customer');
        
        test.ok(model);
        test.ok(model.entities);
        test.ok(Array.isArray(model.entities));
        test.equal(model.entities.length, 1);
        
        var entity = model.entities[0];
        
        test.equal(entity.name, "customer");
        test.equal(entity.setname, "customers");
        test.equal(entity.descriptor, "Customer");
        test.equal(entity.setdescriptor, "Customers");

        fsutils.removeDirSync(path.join(__dirname, 'ajgenesis'));
            
        test.done();
    });
    
    process.chdir(cwd);
}

exports['add company entity'] = function (test) {
    test.async();
    
    var cwd = process.cwd();
    
    process.chdir('test');
    
    addtask(null, ['company', 'description=A Company', 'descriptor=ACompany', 'setdescriptor=ManyCompanies', 'notes=My notes'], ajgenesis, function (err) {
        if (err)
            throw err;
            
        var model = ajgenesis.loadModel('company');
        
        test.ok(model);
        test.ok(model.entities);
        test.ok(Array.isArray(model.entities));
        test.equal(model.entities.length, 1);
        
        var entity = model.entities[0];
        
        test.equal(entity.name, "company");
        test.equal(entity.setname, "companies");
        test.equal(entity.descriptor, "ACompany");
        test.equal(entity.setdescriptor, "ManyCompanies");
        test.equal(entity.notes, "My notes");
        
        fsutils.removeDirSync(path.join(__dirname, 'ajgenesis'));
            
        test.done();
    });
    
    process.chdir(cwd);
}
