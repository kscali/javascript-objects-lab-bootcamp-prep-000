var recipes = [];

function updateObjectWithKeyAndValue(object, key, value) {
  var newObject = Object.assign({}, obj,{[key] : value});
  return newObject;
}

function 