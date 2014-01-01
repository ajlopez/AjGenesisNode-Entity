var path = require('path'),
    fs = require('fs'),
    names = require('./lib/names');

module.exports = function (model, args, ajgenesis, cb) {
    var entityname = args[0];
    var propertyname = args[1];
    
    var name = names.getName(propertyname);
    var descriptor = names.getDescriptor(propertyname);
    
    var property = {
        name: name,
        descriptor: descriptor
    };

    for (var k = 2; k < args.length; k++) {
        var parval = names.getParameterValue(args[k]);

        if (parval && parval.name && parval.value)
            property[parval.name] = parval.value;
    }
    
    var filename = path.join('models', entityname + '.json');
    var model = require(path.resolve(filename));
    console.dir(model);
    // quick hack
    model.entities = [ model.entities[0] ];
    
    var entity = model.entities[0];
    
    if (!entity.properties)
        entity.properties = [];
            
    entity.properties.push(property);
    
    var text = JSON.stringify(model, null, 4);
    
    fs.writeFileSync(filename, text);
    
    cb();
}

