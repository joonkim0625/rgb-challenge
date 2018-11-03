// 변수 선언
let score = 0
let answer
const rightModalEl = document.querySelector('.modal-right')
const wrongModalEl = document.querySelector('.modal-wrong')
const optionsEl = document.querySelectorAll('.option')

// ---------------------------
// 이벤트리스너

// rgb color들 중 하나를 클릭했을 때의 이벤트 발생
document.querySelectorAll('.option').forEach((optionEl, index) => {
  optionEl.addEventListener('click', e => {
    optionEl.classList.add('extend')
    if (answer === index) {
      score++
      rightModalEl.classList.add('show')
    } else {
      document.querySelector('.final-score').textContent = 'SCORE: ' + score
      score = 0
      wrongModalEl.classList.add('show')
    }
    document.querySelector('.current-score').textContent = score
  })
})

// NEXT COLOR 버튼을 눌렀을 때
document.querySelector('.next-btn').addEventListener('click', e => {
  
  newStage()
  optionsEl.forEach(e => {
    // color들을 하나씩 순회하면서 extend class가 붙어있다면 제거해준다.
    e.classList.remove('extend')
  })
  rightModalEl.classList.remove('show')
  
})

// PLAY AGAIN 버튼을 눌렀을 때 
document.querySelector('.restart-btn').addEventListener('click', e => {
  newStage()
  
  optionsEl.forEach(e => {
    e.classList.remove("extend");
  });
  wrongModalEl.classList.remove('show')
})

// ---------------------------


// 임의의 rgb color 값을 생성하기 위한 함수
function randomColor() {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)
  return `rgb(${r}, ${g}, ${b})`
}

// 게임 상황 함수
function newStage() {
  const options = [randomColor(), randomColor(), randomColor()];

  document.querySelectorAll('.option').forEach((optionEl, index) => {
    optionEl.style.backgroundColor = options[index]
  })

  answer = Math.floor(Math.random() * 3)

  document.querySelector('.rgbs').textContent = options[answer]

}

newStage()