const URL ="https://jsonplaceholder.typicode.com/users"
export const fetchUsersList = fetch(URL).then(response => response.json())

export const fetchUserById = (id) => fetch(`${URL}/${id}`).then(response => response.json())