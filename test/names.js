
var names = require('../ajgenesis/modules/entity/lib/names');

exports['Get name'] = function (test) {
    test.equal(names.getName('name'), 'name');
    test.equal(names.getName('Name'), 'name');
    test.equal(names.getName('NAME'), 'name');
};

exports['Get name from null'] = function (test) {
    test.equal(names.getName(null), null);
};

exports['Get descriptor'] = function (test) {
    test.equal(names.getDescriptor('name'), 'Name');
    test.equal(names.getDescriptor('Name'), 'Name');
    test.equal(names.getDescriptor('NAME'), 'NAME');
};

exports['Get descriptor from null'] = function (test) {
    test.equal(names.getDescriptor(null), null);
};

exports['Get plural'] = function (test) {
    test.equal(names.getPlural('name'), 'names');
    test.equal(names.getPlural('Customer'), 'Customers');
    test.equal(names.getPlural('city'), 'cities');    
    test.equal(names.getPlural('suppliers'), 'suppliers');
};

exports['Get plural for null'] = function (test) {
    test.equal(names.getPlural(null), null);
};

exports['Get parameter value'] = function (test) {
    var result = names.getParameterValue("name=customer");
    
    test.ok(result);
    test.equal(result.name, "name");
    test.equal(result.value, "customer");
};

exports['Get parameter with integer value'] = function (test) {
    var result = names.getParameterValue("name=123");
    
    test.ok(result);
    test.equal(result.name, "name");
    test.equal(result.value, 123);
    test.ok(typeof result.value == 'number');
};

exports['Get parameter with boolean true value'] = function (test) {
    var result = names.getParameterValue("required=true");
    
    test.ok(result);
    test.equal(result.name, "required");
    test.equal(result.value, true);
    test.ok(typeof result.value == 'boolean');
};

exports['Get parameter with boolean false value'] = function (test) {
    var result = names.getParameterValue("required=false");
    
    test.ok(result);
    test.equal(result.name, "required");
    test.equal(result.value, false);
    test.ok(typeof result.value == 'boolean');
};

exports['Get parameter without value as boolean flag'] = function (test) {
    var result = names.getParameterValue("required");
    
    test.ok(result);
    test.equal(result.name, "required");
    test.strictEqual(result.value, true);
};

exports['Get parameter with null value'] = function (test) {
    var result = names.getParameterValue("email=null");
    
    test.ok(result);
    test.equal(result.name, "email");
    test.strictEqual(result.value, null);
};


