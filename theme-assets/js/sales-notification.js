/**
 *   File Name: sales-notification.js
 *   Description: Sales Notifications list JS.
 *   -------------------------------------------------------------------------------------------
 *   Item Name: Crypto ICO - Cryptocurrency Website Landing Page HTML Template
 *   Version: 1.0
 *   Author: Pixinvent
 *   Author URL: http://www.themeforest.net/user/pixinvent
 **/

$(window).on("load", function () {
  // Notification 1  //assitent
  setTimeout(function () {
    var time = "2 minutes ago";
    $.notify(
      {
        icon: "theme-assets/images/user-1.png",
        title: "hi! I am Eloin Assistant",
        message: 'Website has been <span class="blue">changed</span>',
      },
      {
        type: "minimalist",
        placement: {
          from: "bottom",
          align: "left",
        },
        animate: {
          enter: "animated fadeInLeftBig",
          exit: "animated fadeOutLeftBig",
        },
        icon_type: "image",
        template:
          '<div data-notify="container" class="alert alert-{0}" role="alert">' +
          '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
          '<div id="image">' +
          '<img data-notify="icon" class="rounded-circle float-left">' +
          '</div><div id="text">' +
          '<span data-notify="title">{1}</span>' +
          '<span data-notify="message">{2}</span>' +
          '<span data-notify="time">' +
          time +
          "</span>" +
          "</div>" +
          "</div>",
      }
    );
  }, 5000);

  // Notification 2
  setTimeout(function () {
    var time = "25 seconds ago";
    $.notify(
      {
        icon: "theme-assets/images/user-11.png",
        title: "hi! I am Eloin Assistant",
        message: 'Beware of an <span class="blue">Scammers </span>  ',
      },
      {
        type: "minimalist",
        placement: {
          from: "bottom",
          align: "left",
        },
        animate: {
          enter: "animated fadeInLeftBig",
          exit: "animated fadeOutLeftBig",
        },
        icon_type: "image",
        template:
          '<div data-notify="container" class="alert alert-{0}" role="alert">' +
          '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
          '<div id="image">' +
          '<img data-notify="icon" class="rounded-circle float-left">' +
          '</div><div id="text">' +
          '<span data-notify="title">{1}</span>' +
          '<span data-notify="message">{2}</span>' +
          '<span data-notify="time">' +
          time +
          "</span>" +
          "</div>" +
          "</div>",
      }
    );
  }, 25000);

  // Notification 3
  setTimeout(function () {
    var time = "25 seconds ago";
    $.notify(
      {
        icon: "theme-assets/images/user-11.png",
        title: "hi! I am Eloin Assistant",

        message: 'Want to Buy <span class="blue">ELOIN TOKEN</span>  ',
      },
      {
        type: "minimalist",
        placement: {
          from: "bottom",
          align: "left",
        },
        animate: {
          enter: "animated fadeInLeftBig",
          exit: "animated fadeOutLeftBig",
        },
        icon_type: "image",
        template:
          '<div data-notify="container" class="alert alert-{0}" role="alert">' +
          '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
          '<div id="image">' +
          '<img data-notify="icon" class="rounded-circle float-left">' +
          '</div><div id="text">' +
          '<span data-notify="title">{1}</span>' +
          '<span data-notify="message">{2}</span>' +
          '<span data-notify="time">' +
          time +
          "</span>" +
          "</div>" +
          "</div>",
      }
    );
  }, 50000);

  setTimeout(function () {
    var time = "3 minutes ago ";
    $.notify(
      {
        icon: "theme-assets/images/user-11.png",
        title: "hi! 🏠Contract address:",
        message:
          '<span class="blue">0xe39e2861AE9a45FA321c1B0155D2f99196b2A992</span>  ',
      },
      {
        type: "minimalist",
        placement: {
          from: "bottom",
          align: "left",
        },
        animate: {
          enter: "animated fadeInLeftBig",
          exit: "animated fadeOutLeftBig",
        },
        icon_type: "image",
        template:
          '<div data-notify="container" class="alert alert-{0}" role="alert">' +
          '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
          '<div id="image">' +
          '<img data-notify="icon" class="rounded-circle float-left">' +
          '</div><div id="text">' +
          '<span data-notify="title">{1}</span>' +
          '<span data-notify="message">{2}</span>' +
          '<span data-notify="time">' +
          time +
          "</span>" +
          "</div>" +
          "</div>",
      }
    );
  }, 100000);

  // Notification 5
  setTimeout(function () {
    var time = "20 seconds ago";
    $.notify(
      {
        icon: "theme-assets/images/user-11.png",
        title: "hi! I am Eloin Assistant",
        message: '<span class="blue">is your Query resolved</span>  ',
      },
      {
        type: "minimalist",
        placement: {
          from: "bottom",
          align: "left",
        },
        animate: {
          enter: "animated fadeInLeftBig",
          exit: "animated fadeOutLeftBig",
        },
        icon_type: "image",
        template:
          '<div data-notify="container" class="alert alert-{0}" role="alert">' +
          '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
          '<div id="image">' +
          '<img data-notify="icon" class="rounded-circle float-left">' +
          '</div><div id="text">' +
          '<span data-notify="title">{1}</span>' +
          '<span data-notify="message">{2}</span>' +
          '<span data-notify="time">' +
          time +
          "</span>" +
          "</div>" +
          "</div>",
      }
    );
  }, 120000);
});
