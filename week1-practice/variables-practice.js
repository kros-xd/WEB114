"use strict";

// importance: 2
let admin;
let name = "John";

admin = name;

alert(admin);

// importance: 3
let planetName = "Earth";
let curentVisitor = "Kris";

// importance: 4
const BIRTHDAY = '4.01.2003';
const age = someCode(BIRTHDAY);

/*
    We can keep const BIRTHDAY all uppercase because we know it is a hard coded value, otherwise a value known before runtime.
    We keep const age lowercase because we are calculating its value during runtime.
*/