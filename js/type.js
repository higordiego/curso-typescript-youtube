"use strict";
// boolean
var isOpen;
isOpen = true;
// string
var message;
message = "foo";
// number
var total;
total = 20.3;
// array type - number, boolean, float, hex, binary
var itens;
itens = ["foo", "bar"];
// other type declaration
var totalArray;
totalArray = [1, 2, 3, 4];
// tuple
var title;
title = [1, "foo"];
// enum
var colors;
(function (colors) {
    colors["white"] = "#fff";
    colors["black"] = "#000";
})(colors || (colors = {}));
// any
var coisa;
coisa = [1];
// void (vazio)
function logger() {
    console.log('void');
}
// never
function error() {
    throw new Error("Error");
}
// object
var cart;
cart = {};
