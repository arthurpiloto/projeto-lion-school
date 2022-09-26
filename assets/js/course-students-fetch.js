`use strict`

const getStudents = async (curso) => {
    const url = `http://localhost:8080/alunos/?curso=${curso}`
    const response = await fetch(url)
    const studentsList = await response.json()
    return studentsList
}

export {
    getStudents
}