console.log("== document:", document)
console.log("== document.body:", document.body)

var body = document.body
console.log("== body.childNodes:", body.childNodes)
console.log("== body.children:", body.children)

var firstChild = body.children[0]
console.log("== firstChild.parentNode:", firstChild.parentNode)
console.log("== firstChild.nextSibling:", firstChild.nextSibling)

var photoCardContainer =  document.getElementById("photo-card-container")
console.log("== photoCardContainer:", photoCardContainer)

var photoCards = document.getElementsByClassName("photo-card")
console.log("== photoCards:", photoCards)
console.log("== photoCards[0]:", photoCards[0])

var firstPhotoCard = photoCardContainer.children[0]
console.log("== firstPhotoCard:", firstPhotoCard)

firstPhotoCard.remove()
console.log("== photoCards:", photoCards)

var images = document.getElementsByTagName("img")
console.log("== images:", images)

var loginLink = document.querySelector(".navitem.right")
console.log("== loginLink:", loginLink)

var navItems = document.querySelectorAll(".navitem")
console.log("== navItems:", navItems)

firstPhotoCard = photoCards[0]
console.log("== firstPhotoCard:", firstPhotoCard)
console.log("== firstPhotoCard.textContent:", firstPhotoCard.textContent)
console.log("== firstPhotoCard.innerHTML:", firstPhotoCard.innerHTML)
