const MailDev = require('maildev');

const maildev = new MailDev({
  smtp: 1025,  // SMTP server port
  web: 1080,   // Web interface port
  // Other options you might want to configure
});

// Start listening for incoming emails
maildev.listen();

// If you want to take action when a new email is received, use this event
maildev.on('new', email => {
  console.log('Received new email:', email);
});

// Other configurations for your Node app go here...
1