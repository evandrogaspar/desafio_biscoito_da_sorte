const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const cardText = document.querySelector(".card-text")
const openCookie = document.querySelector("#openCookie")
const btnReset = document.querySelector("#btnReset")

const phrases = [
  "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
  "A persistência realiza o impossível.",
  "Seus sonhos não precisam de plateia, eles só precisam de você.",
  "As pessoas costumam dizer que a motivação não dura sempre. Bem, nem o efeito do banho, por isso recomenda-se diariamente.",
  "No meio da dificuldade encontra-se a oportunidade.",
  "Lute. Acredite. Conquiste. Perca. Deseje. Espere. Alcance. Invada. Caia. Seja tudo o quiser ser, mas, acima de tudo, seja você sempre.",
  "O que me preocupa não é o grito dos maus. É o silêncio dos bons.",
  "O insucesso é apenas uma oportunidade para recomeçar com mais inteligência",
  "O sucesso é ir de fracasso em fracasso sem perder o entusiasmo.",
  "Lute com determinação, abrace a vida com paixão, perca com classe e vença com ousadia, porque o mundo pertence a quem se atreve e a vida é muito para ser insignificante.",
  "Nossa maior fraqueza está em desistir. O caminho mais certo de vencer é tentar mais uma vez.",
]

let randomPhrases = phrases[Math.floor(Math.random() * phrases.length)]


openCookie.addEventListener("click", openCookiePhrase)
btnReset.addEventListener("click", btnAgain)

function openCookiePhrase() {
  toggleScreen()
  cardText.innerText = `${randomPhrases}`
}

function toggleScreen(){
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function btnAgain(){
  toggleScreen()
  randomPhrases = phrases[Math.floor(Math.random() * phrases.length)]
}


