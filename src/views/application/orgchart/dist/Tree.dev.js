"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var Tree = function Tree(value) {
  this.value = value;
  this.children = [];
};

Tree.prototype.constructor = Tree;

Tree.prototype.addChild = function (value) {
  var newChild = new Tree(value);
  this.children.push(newChild);
};

Tree.prototype.contains = function (target) {
  var doesContain = false;

  function recurse(cur) {
    if (cur.value === target) {
      doesContain = true;
    } else {
      var current;

      for (var i = 0; i < cur.children.length; i += 1) {
        if (cur.children[i].children !== []) {
          current = cur.children[i];
          recurse(current);
        }
      }
    }
  }

  ;
  recurse(this);
  var retval = false;

  if (doesContain === true) {
    retval = true;
  }

  ;
  return retval;
};

var _default = Tree;
exports["default"] = _default;