var photoCards = document.getElementsByClassName("photo-card")
var firstPhotoCard = photoCards[0]
console.log("== firstPhotoCard:", firstPhotoCard)

var userSuppliedContent = "<img src=x onerror=\"alert('Uh oh!')\" />"
// firstPhotoCard.innerHTML = "<p>" + userSuppliedContent + "</p>"
firstPhotoCard.textContent = userSuppliedContent

var photoCardContainer = document.getElementById("photo-card-container")

function insertPhotoCard(url, captionText) {
  var photoCardSection = document.createElement("section")
  photoCardSection.classList.add("photo-card")
  photoCardSection.classList.add("another-class")
  photoCardSection.classList.add("a-third-class")
  console.log("== photoCardSection:", photoCardSection)
  photoCardSection.classList.remove("another-class")

  var imgContainer = document.createElement("div")
  imgContainer.classList.add("img-container")
  photoCardSection.appendChild(imgContainer)

  var caption = document.createElement("div")
  caption.classList.add("caption")
  caption.textContent = captionText
  photoCardSection.appendChild(caption)

  var img = document.createElement("img")
  img.classList.add("person-photo-img")
  img.src = url
  imgContainer.appendChild(img)

  console.log("== photoCardSection:", photoCardSection)
  photoCardContainer.appendChild(photoCardSection)
}

insertPhotoCard(
  "https://cdn.onemars.net/sites/catsan_uk_Z61CM_Kktq/images/addons/the-new-kitten-checklist-top-tips-for-bringing-a-new-kitten-home-xl_1655281961571.jpeg",
  "Luke as a kitten"
)
