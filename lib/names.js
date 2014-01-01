
function getName(name) {
    if (!name)
        return null;
        
    return name.toLowerCase();
}

function getSetName(name) {
    return getPlural(getName(name));
}

function getDescriptor(name) {
    if (!name)
        return null;
        
    return name[0].toUpperCase() + name.slice(1);
}

function getSetDescriptor(name) {
    return getPlural(getDescriptor(name));
}

function getDescription(name) {
    return getName(name);
}

function getPlural(name) {
    if (!name)
        return null;
        
    if (name[name.length - 1] == 's')
        return name;
        
    if (name[name.length - 1] == 'y')
        return name.substring(0, name.length - 1) + 'ies';
        
    return name + 's';
}

module.exports = {
    getName: getName,
    getSetName: getSetName,
    getDescriptor: getDescriptor,
    getSetDescriptor: getSetDescriptor,
    getDescription: getDescription,
    getPlural: getPlural
}

