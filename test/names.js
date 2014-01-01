
var names = require('../lib/names');

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

exports['Get parameter without value'] = function (test) {
    var result = names.getParameterValue("name");
    
    test.ok(result);
    test.equal(result.name, "name");
    test.equal(result.value, null);
};

