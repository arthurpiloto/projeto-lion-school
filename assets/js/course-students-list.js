`use strict`
import { getStudents } from "./course-students-fetch.js"

const data = localStorage.getItem(`course`)
const info = await getStudents(data)

const createCardStudent = async (json) => {
    const container = document.getElementById(`students`)
    const { alunos } = json

    alunos.forEach(element => {
        const card = document.createElement(`div`)
        card.classList.add(`student`)

        const img = document.createElement(`img`)
        img.classList.add(`student-photo`)
        img.src = element.foto

        const span = document.createElement(`span`)
        span.textContent = element.nome

        card.appendChild(img)
        card.appendChild(span)
        card.id = element.matricula

        if (element.status.toLowerCase() == `cursando`) {
            card.classList.add(`blue-block`)
        } else if (element.status.toLowerCase() == `finalizado`) {
            card.classList.add(`yellow-block`)
        }
        container.appendChild(card)
    });
}
createCardStudent(info)