function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {

}

function increaseRankBy(n) {
  let target = document.querySelector('.ranked-list')
  return target//parseInt(target) + n
}
