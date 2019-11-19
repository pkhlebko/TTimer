'use strict';

importScripts('sw-toolbox.js');
toolbox.precache([
  'index.html',
  'js/main.js',
  'css/main.css',
  'sounds/finish.mp3',
  'sounds/limit.mp3',
  'sounds/section.mp3',
  'sounds/start.mp3'
]);
toolbox.router.get('/img/*', toolbox.cacheFirst);
toolbox.router.get('/*', toolbox.networkFirst, { networkTimeoutSeconds: 5});