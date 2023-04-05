// We can refactor below.
// This just demonstrates that it is possible. In the future we can iterate through different ads instead of only using the first ad object.
async function GetAdvertisements() {
  let ResponseArray = [];
  const response = await fetch(
    "http://localhost:3000/advertisements/get-ad-data",
    {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    }
  );

  const AdvertisementList = await response.json();
  const AdvertisementListLength = Object.keys(AdvertisementList).length;

  for (let i = 0; i < AdvertisementListLength; i++) {
    ResponseArray.push({
      token: AdvertisementList[i].token,
      mediaType: AdvertisementList[i].mediaType,
      redirectLink: AdvertisementList[i].redirectLink,
      src: AdvertisementList[i].src,
      mediaTypeParams: AdvertisementList[i].mediaTypeParams,
    });
  }

  // Add the advertisement after every p tag. With further development and testing, we can scale to tags of all kinds.
  const body = document.getElementsByTagName("p");
  for (let i = 0; i < body.length; i++) {
    // using i here works because as of 4/4/2023, DB has two paragraph tags and two ads to display. In the future there may be more or less tags for us to put ads on.
    body[i].insertAdjacentHTML(
      "afterend",
      `<${ResponseArray[i].mediaType} src=${ResponseArray[i].src} ${ResponseArray[i].mediaTypeParams} class=${ResponseArray[i].token} />`
    );

    // Look for the ad that was just added. Add redirect on click event listener
    let ads = document.getElementsByClassName(ResponseArray[i].token);
    ads[0].addEventListener("click", () => {
      window.location.href = ResponseArray[i].redirectLink;
    });
  }
}
GetAdvertisements();
