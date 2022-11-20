/* ATIVIDADE 01
  1 - Solicitar o nome do aluno e as 3 notas do bimestre calcular a média daquele aluno.

  2 - A média positiva deverá ser maior que 6 e deverá consta duas casas decimais

  3 - Se o aluno passou no bimestre, dar os parabéns.

  4 - Se o aluno não passou no bimestre, motivar o aluno a dar seu melhor na prova de recuperação.

  5 - Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota.

---------------------*/
//passo 1
let student = prompt("Qual o seu nome?")
let n1 = prompt("Qual a nota de sua primeira prova?")
let n2 = prompt("Qual a nota de sua segunda prova?")
let n3 = prompt("Qual a nota de sua terceira prova?")

let average = (Number(n1) + Number(n2) + Number(n3)) / 3
//passo 2
let result = average > 6
average = average.toFixed(2)

//passo 3
if (result) {
    //5 -
    alert("Parabéns, " + student + "! Sua média foi de: " + average)
// 4 -
} else if (average < 3) {
    alert("Reprovado!")
} else {
    //5 -
    alert(student + ", estude para sua prova de recuperação! Sua média foi de: " + average + ".")
}



