const notifier = require('node-notifier');
const request = require('request');
const fs = require('fs');


const iconFilename = 'icon.png';
const iconPath = __dirname + '/' + iconFilename;

    // Show the notification with the icon
    notifier.notify({
        title: 'My Notification',
        message: 'Hello, world!',
        icon: iconPath,
    });