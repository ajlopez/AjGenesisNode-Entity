var addpropertytask = require('../addproperty'),
    addtask = require('../add'),
    path = require('path'),
    fs = require('fs'),
    ajgenesis = require('ajgenesis');
    
exports['add property customer name'] = function (test) {
    test.async();
    
    var cwd = process.cwd();
    
    process.chdir('test');
    
    addtask(null, ['customer'], ajgenesis, function (err) {
        if (err)
            throw err;
            
        addpropertytask(null, ['customer', 'name'], ajgenesis, function (err) {            
            var model = ajgenesis.loadModel(path.join(__dirname, 'ajgenesis', 'models', 'customer.json'));
            
            test.ok(model);
            test.ok(model.entities);
            test.ok(Array.isArray(model.entities));
            test.equal(model.entities.length, 1);
            
            var entity = model.entities[0];
            
            test.equal(entity.name, "customer");
            test.equal(entity.setname, "customers");
            test.equal(entity.descriptor, "Customer");
            test.equal(entity.setdescriptor, "Customers");
            
            test.ok(entity.properties);
            test.ok(Array.isArray(entity.properties));
            test.equal(entity.properties.length, 1);
            
            var property = entity.properties[0];
            
            test.equal(property.name, "name");
            test.equal(property.descriptor, "Name");
            
            removeDirSync(path.join(__dirname, 'ajgenesis'));
                
            test.done();
        });
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
