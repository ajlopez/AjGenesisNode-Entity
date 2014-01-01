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
            var model = ajgenesis.loadModel(path.join(__dirname, 'models', 'customer.json'));
            
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
            
            removeDirSync(path.join(__dirname, 'models'));
            test.done();
        });
    });
    
    process.chdir(cwd);
}

exports['add properties supplier name and address'] = function (test) {
    test.async();
    
    var cwd = process.cwd();
    
    process.chdir('test');
    
    addtask(null, ['supplier'], ajgenesis, function (err) {
        if (err)
            throw err;
            
        addpropertytask(null, ['supplier', 'name', 'notes=My Notes'], ajgenesis, function (err) {            
            if (err)
                throw err;
                
            addpropertytask(null, ['supplier', 'address', 'required=true'], ajgenesis, function (err) {            
                if (err)
                    throw err;
                    
                var model = ajgenesis.loadModel(path.join(__dirname, 'models', 'supplier.json'));
                
                test.ok(model);
                test.ok(model.entities);
                test.ok(Array.isArray(model.entities));
                test.equal(model.entities.length, 1);
                
                var entity = model.entities[0];
                
                test.equal(entity.name, "supplier");
                test.equal(entity.setname, "suppliers");
                test.equal(entity.descriptor, "Supplier");
                test.equal(entity.setdescriptor, "Suppliers");

                test.ok(entity.properties);
                test.ok(Array.isArray(entity.properties));
                test.equal(entity.properties.length, 2);
                
                var property = entity.properties[0];
                
                test.equal(property.name, "name");
                test.equal(property.descriptor, "Name");
                test.equal(property.notes, "My Notes");
                
                property = entity.properties[1];
                
                test.equal(property.name, "address");
                test.equal(property.descriptor, "Address");
                test.equal(property.required, true);
                
                removeDirSync(path.join(__dirname, 'models'));
                    
                test.done();
            });
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
