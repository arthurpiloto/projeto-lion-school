`use strict`
import { getStudent, getDisciplines } from "./student-fetch.js"

const infoStudent = localStorage.getItem(`student`)
const disciplines = await getDisciplines(infoStudent)
const student = await getStudent(infoStudent)

const createCardStudent = async (json) => {
    const container = document.createElement(`div`)
    container.setAttribute(`id`, `student`)

    const { aluno } = json
    aluno.forEach(element => {
        const img = document.createElement(`img`)
        img.classList.add(`student-img`)
        img.src = element.foto

        const span = document.createElement(`span`)
        span.textContent = element.nome

        container.appendChild(img)
        container.appendChild(span)
    })
    console.log(container)
}
createCardStudent(student)