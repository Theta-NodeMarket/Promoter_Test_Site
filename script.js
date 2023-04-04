// await Server call...

// We can refactor this. In reality, our server can just pass back a string with an html element in it instead of the response obj.
// ie: "<img src"www..." style="width: 20px;">
// This is more to just demonstrate that it is possible.

// Image
/*
let ResponseObj = {
  AdType: "img",
  src: "https://cdn.dribbble.com/userupload/5971840/file/original-2cc663fc3ea9857d25a5195653dee36e.jpg?compress=1&resize=752x",
  AdTypeParams:
    "style='max-height: 300px; max-width: auto; display: block; margin: auto;'",
      RedirectLink: "https://www.google.com/",
};
*/

// Video
let ResponseObj = {
  AdType: "video",
  src: "https://cdn.dribbble.com/userupload/5973349/file/original-f9a8e6a46c0bf919b14ade317b8c2af0.mp4",
  AdTypeParams:
    "playInline autoplay muted loop style='max-height: 300px; max-width: auto; display: block; margin: auto;'",
  RedirectLink: "https://www.google.com/",
};

// Add the advertisement after every p tag. With further development, we can scale to websites of all kinds.
const body = document.getElementsByTagName("p");
for (let i = 0; i < body.length; i++) {
  body[i].insertAdjacentHTML(
    "afterend",
    `<a href=${ResponseObj.RedirectLink}><${ResponseObj.AdType} src=${ResponseObj.src} ${ResponseObj.AdTypeParams} /></a>`
  );
}
