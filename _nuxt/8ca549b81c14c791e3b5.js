(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{153:function(e,n,o){"use strict";o.r(n);const r=require("fs"),c=JSON.stringify(r.readdirSync("./md").filter(e=>e.includes(".md")));r.writeFile("./md/generate.json",c,e=>{e?console.log("Error writing file",e):console.log("Successfully wrote file")})}}]);