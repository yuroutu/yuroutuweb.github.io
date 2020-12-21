var helloDiv = document.getElementById("helloDiv")
var charArray = helloDiv.innerHTML.split("")

helloDiv.innerHTML= move(charArray)

function move(charArray) {
  let result = []
  
  for(var i = 0 ; i < charArray.length ; i++){
  result.push(`<div class="hello" style="animation-delay:${i*(1/2)}s">${charArray[i]}</div>`)
  }
  return result.join("")
  
}
console.log(move(charArray))

///https://i.imgur.com/ejnVmw7.jpg