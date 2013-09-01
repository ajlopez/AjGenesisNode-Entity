
var path = require('path'),
    names = require('./lib/names');

module.exports = function (model, args, ajgenesis, cb) {
    var entityname = args[0];
    
    ajgenesis.createDirectory('ajgenesis', 'models');
    var template = path.join(__dirname, 'templates', 'entity.json.tpl');
    var filename = path.join('ajgenesis', 'models', entityname + '.json');
    
    var entitymodel = {
        name: names.getName(entityname),
        setname: names.getSetName(entityname),
        descriptor: names.getDescriptor(entityname),
        setdescriptor: names.getSetDescriptor(entityname),
        description: names.getDescription(entityname)
    }
    
    ajgenesis.fileTransform(template, filename, entitymodel);
    cb();
}

