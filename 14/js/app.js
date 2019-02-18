async function getUsers() {
    return await (await fetch('https://jsonplaceholder.typicode.com/users')).json();
}
function renderUsersTable(users, selector) {
    const rootElement = document.querySelector(selector);
    const table = document.createElement('table');
    table.innerHTML = `
    <tr>
        <th>Name</th>
        <th>Username</th>
        <th>Email</th>
        <th>Website</th>
    </tr>`;
    table.innerHTML += users.reduce((resHtml, user) => {
        return resHtml + `
        <tr>
            <td>${user.name}</td>
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td>${user.website}</td>
        </tr>
        `;
    }, '');
    rootElement.appendChild(table);
}
//(await axios.get('https://jsonplaceholder.typicode.com/users')).data
(async () => {
    const users = await getUsers();
    renderUsersTable(users, '#app');
})();
