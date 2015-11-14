
var path = require('path'),
    names = require('./lib/names');

module.exports = function (model, args, ajgenesis, cb) {
    var entityname = args[0];
    
    ajgenesis.createModelDirectory();
    ajgenesis.createDirectory(ajgenesis.getModelDirectory(), 'entities');
    var template = path.join(__dirname, 'templates', 'entity.json.tpl');
    var filename = path.join(ajgenesis.getModelDirectory(), 'entities', entityname + '.json');
    
    var entitymodel = {
        properties: {}
    }
    
    entitymodel.properties.name = names.getName(entityname);
    entitymodel.properties.setname = names.getSetName(entityname);
    entitymodel.properties.descriptor = names.getDescriptor(entityname);
    entitymodel.properties.setdescriptor = names.getSetDescriptor(entityname);
    entitymodel.properties.description = names.getDescription(entityname);
    
    for (var k = 1; k < args.length; k++) {
        var parval = names.getParameterValue(args[k]);

        if (parval && parval.name && parval.value)
            entitymodel.properties[parval.name] = parval.value;
    }
    
    ajgenesis.fileTransform(template, filename, entitymodel);
    cb();
}

