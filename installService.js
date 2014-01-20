var Service = require('node-windows').Service;

var svc = new Service({
  name:'FreshTimePlannerv1.0',
  description: 'FreshTimePlannerv1.0',
  script: 'server.js'
});
svc.on('install',function(){
	console.log('success');
  	svc.start();
});
svc.on('invalidinstallation ',function(){
	console.log('error');
});
svc.install();