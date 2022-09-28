`use strict`

const getStudent = async (matricula) => {
    const url = `http://localhost:8080/aluno/${matricula}`
    const response = await fetch(url)
    const student = await response.json()
    return student
}

const getDisciplines = async (matricula) => {
    const url = `http://localhost:8080/disciplinas/aluno/${matricula}`
    const response = await fetch(url)
    const studentDisciplines = await response.json()
    return studentDisciplines
}

export {
    getStudent,
    getDisciplines
}