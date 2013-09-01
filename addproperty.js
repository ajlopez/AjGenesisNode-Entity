var path = require('path'),
    fs = require('fs'),
    names = require('./lib/names');

module.exports = function (model, args, ajgenesis, cb) {
    var entityname = args[0];
    var propertyname = args[1];
    
    var name = names.getName(propertyname);
    var descriptor = names.getDescriptor(propertyname);
    
    var filename = path.join('ajgenesis', 'models', entityname + '.json');
    var model = require(path.resolve(filename));
    
    model.entities.forEach(function (entity) {
        if (entity.name != entityname)
            return;
            
        if (!entity.properties)
            entity.properties = [];
            
        entity.properties.push({
            name: name,
            descriptor: descriptor
        });
    });
    
    fs.writeFileSync(filename, JSON.stringify(model, null, 4));
    
    cb();
}

