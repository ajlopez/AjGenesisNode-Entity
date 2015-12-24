
var addtask = require('../ajgenesis/modules/entity/add'),
    path = require('path'),
    fs = require('fs'),
    fsutils = require('./lib/fsutils'),
    ajgenesis = require('ajgenesis');
    
exports['add customer entity'] = function (test) {
    test.async();
    
    fsutils.removeDirSync(path.join(__dirname, 'ajgenesis'));
    
    var cwd = process.cwd();
    
    process.chdir('test');
    
    addtask(null, ['customer'], ajgenesis, function (err) {
        if (err)
            throw err;
            
        var model = ajgenesis.loadModel();
        
        test.ok(model);
        test.ok(model.entities);
        test.ok(model.entities.customer);
        
        var entity = model.entities.customer;
        
        test.equal(entity.name, "customer");
        test.equal(entity.setname, "customers");
        test.equal(entity.descriptor, "Customer");
        test.equal(entity.setdescriptor, "Customers");

        fsutils.removeDirSync(path.join(__dirname, 'ajgenesis'));
            
        test.done();
    });
    
    process.chdir(cwd);
}

exports['add customer entity using builddir'] = function (test) {
    test.async();
    
    fsutils.removeDirSync(path.join(__dirname, 'ajgenesis'));
    
    var cwd = process.cwd();
    
    addtask({ builddir: 'test' }, ['customer'], ajgenesis, function (err) {   
        process.chdir('test');
        
        if (err)
            throw err;
            
        var model = ajgenesis.loadModel();
        
        test.ok(model);
        test.ok(model.entities);
        test.ok(model.entities.customer);
        
        var entity = model.entities.customer;
        
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

    fsutils.removeDirSync(path.join(__dirname, 'ajgenesis'));
    
    process.chdir('test');
    
    addtask(null, ['company', 'description=A Company', 'descriptor=ACompany', 'setdescriptor=ManyCompanies', 'notes=My notes'], ajgenesis, function (err) {
        if (err)
            throw err;
            
        var model = ajgenesis.loadModel();
        
        test.ok(model);
        test.ok(model.entities);
        test.ok(model.entities.company);
        
        var entity = model.entities.company;
        
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
