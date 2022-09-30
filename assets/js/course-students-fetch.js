`use strict`

const getStudents = async (curso) => {
    const url = `http://localhost:8080/alunos/?curso=${curso}`
    const response = await fetch(url)
    const studentsList = await response.json()
    return studentsList
}

const getStudentsByFilter = async (curso, status) => {
    const url = `http://localhost:8080/alunos/curso/?curso=${curso}&&filtro=${status}`
    const response = await fetch(url)
    const studentListWithFilter = await response.json()
    return studentListWithFilter
}

export {
    getStudents,
    getStudentsByFilter
}