const URL ="https://jsonplaceholder.typicode.com/users"
export const fetchUsersList = fetch(URL).then(response=>response.json())