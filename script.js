// await Server call for ad data...

// We can refactor below.
// This just demonstrates that it is possible. In the future the response object can have a list of multiple ads.

// Image
/*
let ResponseObj = {
  AdId: "122",
  AdType: "img",
  src: "https://cdn.dribbble.com/userupload/5971840/file/original-2cc663fc3ea9857d25a5195653dee36e.jpg?compress=1&resize=752x",
  AdTypeParams:
    "style='max-height: 300px; max-width: auto; display: block; margin: auto;'",
  RedirectLink: "https://www.google.com/",
};
*/

// Video
let ResponseObj = {
  AdId: "123",
  AdType: "video",
  src: "https://cdn.dribbble.com/userupload/5973349/file/original-f9a8e6a46c0bf919b14ade317b8c2af0.mp4",
  AdTypeParams:
    "playInline autoplay muted loop style='max-height: 300px; max-width: auto; display: block; margin: auto; cursor: pointer;'",
  RedirectLink: "https://www.google.com/",
};

// Add the advertisement after every p tag. With further development and testing, we can scale to websites of all kinds.
// If we had a list of ads, we could iterate through and add each's redirect link to each image or video element.
const body = document.getElementsByTagName("p");
for (let i = 0; i < body.length; i++) {
  body[i].insertAdjacentHTML(
    "afterend",
    `<${ResponseObj.AdType} src=${ResponseObj.src} ${ResponseObj.AdTypeParams} class=${ResponseObj.AdId} />`
  );
}

const ads = document.getElementsByClassName(ResponseObj.AdId);
for (let i = 0; i < body.length; i++) {
  ads[i].addEventListener("click", () => {
    // make async call to server to update click for the image or video using it's id then we redirect.
    window.location.href = ResponseObj.RedirectLink;
  });
}
