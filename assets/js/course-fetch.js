`use strict`

const searchCourse = async () => {
    const url = `http://localhost:8080/cursos`
    const response = await fetch(url)
    const courseList = await response.json()
    return courseList
}

export {
    searchCourse
}