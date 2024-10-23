console.log("== document:", document)
console.log("== document.body:", document.body)

var body = document.body
console.log("== body.childNodes:", body.childNodes)
console.log("== body.children:", body.children)

var firstChild = body.children[0]
console.log("== firstChild.parentNode:", firstChild.parentNode)
console.log("== firstChild.nextSibling:", firstChild.nextSibling)
