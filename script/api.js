jQuery(window).ready(function() {
    jQuery(".loader").show()
    const url = "https://abakhi-backend-two.herokuapp.com/property/getProperties";
  // const url = "http://localhost:3000/property/getProperties";

  const options = {
    method: "POST",
    body: { available: true },
  };

  fetch(url, options)
    .then((res) => res.json())
    .then((res) => {
        jQuery(".loader").hide();
        if(res.length){
            createPropertyDiv(res)
        } else{
            alert("No available properties at the moment, you will be redirected to the home page");
            window.location.href = "../index.html";
        }
    });
});
function createPropertyDiv(availableProperties) {

  for (let i = 0; i < availableProperties.length; i++) {
    let swiperDiv = document.getElementById("swiper");
    let box = document.createElement("div");
    box.classList.add("col-lg-3", "col-md-6", "col-xs-12", "available-property-box");
    swiperDiv.appendChild(box);
    let title = document.createElement("div");
    title.classList.add("title");
    title.style.cssText = "display: flex; justify-content: center; align-items: center; gap: .5rem";
    let icon = document.createElement("i");
    icon.classList = "fas fa-map-pin fa-1x";
    icon.style.cssText = "color:#6a040f;";
    let headingFour = document.createElement("h4");
    headingFour.style.cssText = "font-size: 1.2em; color: #6a040f; margin: 0 !important";
    headingFour.innerHTML = availableProperties[i].location.name;
    title.append(icon, headingFour);
    title.classList.add("text-center");
    let carousel = document.createElement("div");
    let image = document.createElement("img");
    image.src = availableProperties[i].photos[0].image.changingThisBreaksApplicationSecurity;
    image.style.width = "100%";
    let row = document.createElement("div");
    let rent = document.createElement("h5");
    let room = document.createElement("h5");
    let ul = document.createElement("ul");
    ul.style.cssText = "margin-block-end: 0 !important";
    row.style.cssText = "display: flex; justify-content: space-between; margin-top: 1rem";
    rent.innerHTML = "Rent: " + availableProperties[i].rent + "/month";
    room.innerHTML = "Room: " + availableProperties[i].room;
    let html = "";
    let facilities = availableProperties[i].facilities.facilities;
    for (let i = 0; i <= facilities.length; i++) {
      if (facilities[i]?.show) {
        html += "<li style='color: #6a040f; font-weight: bold'>" + facilities[i]?.facility + "</li>";
      }
    }
  
    ul.innerHTML = html;
    row.append(room, rent);
    carousel.append(image, row);
    box.append(title, carousel, ul);
  }
//   jQuery(".loader").hide()
}
