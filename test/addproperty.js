var addpropertytask = require('../ajgenesis/modules/entity/addproperty'),
    addtask = require('../ajgenesis/modules/entity/add'),
    path = require('path'),
    fs = require('fs'),
    fsutils = require('./lib/fsutils'),
    ajgenesis = require('ajgenesis');
    
exports['add property customer name'] = function (test) {
    test.async();
    
    fsutils.removeDirSync(path.join(__dirname, 'ajgenesis'));

    var cwd = process.cwd();
    
    process.chdir('test');
    fsutils.removeDirSync('ajgenesis');
    
    addtask(null, ['customer'], ajgenesis, function (err) {
        if (err)
            throw err;
            
        addpropertytask(null, ['customer', 'name'], ajgenesis, function (err) {            
            var model = ajgenesis.loadModel(path.join(__dirname, 'ajgenesis', 'models'));
            
            test.ok(model);
            test.ok(model.entities);
            test.ok(model.entities.customer);
            
            var entity = model.entities.customer;
            
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
            
            fsutils.removeDirSync(path.join(__dirname, 'ajgenesis'));
            test.done();
        });
    });
    
    process.chdir(cwd);
}

exports['add properties supplier name and address'] = function (test) {
    test.async();
    
    var cwd = process.cwd();
    
    fsutils.removeDirSync(path.join(__dirname, 'ajgenesis'));

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
                    
                var model = ajgenesis.loadModel(path.join(__dirname, 'ajgenesis', 'models'));
                
                test.ok(model);
                test.ok(model.entities);
                test.ok(model.entities.supplier);
                
                var entity = model.entities.supplier;
                
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
                
                fsutils.removeDirSync(path.join(__dirname, 'ajgenesis'));
                    
                test.done();
            });
        });
    });
    
    process.chdir(cwd);
}
