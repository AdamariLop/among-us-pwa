//En este apartado colocamos las claves generadas (public, private y agregamos un email para la parte de notificaciones pero puede ir un
// url (dominio))

const webpush = require("web-push");

const { PUBLIC_VAPID_KEY, PRIVATE_VAPID_KEY } = process.env;

//const vapidKeys = webpush.generateVAPIDKeys();

webpush.setVapidDetails(
  "mailto:videoblog-22e19.web.app",
  PUBLIC_VAPID_KEY,
  PRIVATE_VAPID_KEY
);

module.exports = webpush;