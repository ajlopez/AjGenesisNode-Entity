
var path = require('path'),
    names = require('./lib/names');

module.exports = function (model, args, ajgenesis, cb) {
    var model = ajgenesis.loadModel(args[0]);
    
    if (!model || !model.entities || !Array.isArray(model.entities)) {
        cb(null, null);
        return;
    }
        
    ajgenesis.createModelDirectory();
        
    for (var n in model.entities) {
        var entity = model.entities[n];
        var entitymodel = { entities: [ entity ] };
        ajgenesis.saveModel(entity.name, entitymodel);
    }
    
    cb(null, null);
}

