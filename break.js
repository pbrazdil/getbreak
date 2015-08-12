#!/usr/bin/env shjs

var shell = require('shelljs');

var minutes = process.argv[2] || 10;
minutes = parseInt(minutes);
var breakUntil = new Date();

breakUntil.setMinutes(breakUntil.getMinutes() + minutes);
var untilStr = breakUntil.toTimeString().split(' ');
untilStr = untilStr[0];

shell.echo('Break until ' + untilStr);
shell.exec('open focus://unfocus');

setTimeout(function() {
  shell.exec('open focus://focus');
}, minutes * 1000 * 60);
