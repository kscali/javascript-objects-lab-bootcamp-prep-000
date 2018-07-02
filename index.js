var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  var newObject = Object.assign({}, obj,{[key] : value});
  return newObject;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key,value){
  object.key = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var obj = {object : key};
  var newObj = Object.assign({}, obj);
  delete newObj.key;
  return newObj;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object.key;
  return object;
}

function 