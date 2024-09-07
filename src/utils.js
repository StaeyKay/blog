export function getDatabase () {
    const database = window.localStorage.getItem("DATABASE")
    if (!database) {
        return []
    }
    return JSON.parse(database)
}

export function saveData (blogposts) {
    const blogpostString = JSON.stringify(blogposts)
    window.localStorage.setItem("DATABASE", blogpostString)
}
