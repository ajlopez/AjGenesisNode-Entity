
function getName(name) {
    return name.toLowerCase();
}

function getSetName(name) {
    return getPlural(getName(name));
}

function getDescriptor(name) {
    return name[0].toUpperCase() + name.slice(1);
}

function getSetDescriptor(name) {
    return getPlural(getDescriptor(name));
}

function getDescription(name) {
    return getName(name);
}

function getPlural(name) {
    return name + 's';
}

module.exports = {
    getName: getName,
    getSetName: getSetName,
    getDescriptor: getDescriptor,
    getSetDescriptor: getSetDescriptor,
    getDescription: getDescription
}

