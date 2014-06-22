
var addtask = require('../add'),
    path = require('path'),
    fs = require('fs'),
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
        
        removeDirSync(path.join(__dirname, 'ajgenesis'));
            
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
        
        removeDirSync(path.join(__dirname, 'ajgenesis'));
            
        test.done();
    });
    
    process.chdir(cwd);
}

function removeDirSync(dirname) {
    var filenames = fs.readdirSync(dirname);
    
    filenames.forEach(function (filename) {
        filename = path.join(dirname, filename);
        
        if (isDirectory(filename))
            removeDirSync(filename);
        else
            removeFileSync(filename);
    });
    
    fs.rmdirSync(dirname);
}

function removeFileSync(filename) {
    fs.unlinkSync(filename);
}

function isDirectory(filename)
{
    try {
        var stats = fs.lstatSync(filename);
        return stats.isDirectory();
    }
    catch (err)
    {
        return false;
    }
}
