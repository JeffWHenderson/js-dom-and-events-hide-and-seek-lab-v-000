function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {
  let deepChilren = document.querySelector('#grand-node').querySelectorAll('div')
  return deepChildren[-1]
}

function increaseRankBy(n) {
  let target = document.querySelector('.ranked-list')
  return target//parseInt(target) + n
}
