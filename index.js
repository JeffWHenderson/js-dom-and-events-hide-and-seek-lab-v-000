function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {
  let deepChildren = document.querySelector('#grand-node').querySelectorAll('div')
  return deepChildren[deepChildren.length - 1]
}

function increaseRankBy(n) {
  let target = document.getElementsByClassName('ranked-list')
  return target[0].innerHTML = 4
  // for(let i = 0; i < target.length; i++) {
  //     target[i].innerHTML =  2 //parseInt(target[i]) + 1
  // }
}
