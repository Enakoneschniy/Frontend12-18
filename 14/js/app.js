async function getUsers() {
    return await (await fetch('https://jsonplaceholder.typicode.com/users')).json();
}
function renderUsersTable(users, selector) {
    const rootElement = document.querySelector(selector);
    const table = document.createElement('table');
    table.innerHTML = `
    <tr class="header">
        <th data-column="name" data-sort="asc">Name</th>
        <th data-column="username" data-sort="asc">Username</th>
        <th data-column="email" data-sort="asc">Email</th>
        <th data-column="website" data-sort="asc">Website</th>
    </tr>`;
    table.innerHTML += '<tbody class="body">' + users.reduce((resHtml, user) => {
        return resHtml + `
        <tr>
            <td>${user.name}</td>
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td>${user.website}</td>
        </tr>
        `;
    }, '') + '</tbody>';
    rootElement.innerHTML = '';
    rootElement.appendChild(table);
}
//(await axios.get('https://jsonplaceholder.typicode.com/users')).data
function renderSortedUsers(users, selector) {
    const rootElement = document.querySelector(selector);
    rootElement.innerHTML = users.reduce((resHtml, user) => {
        return resHtml + `
        <tr>
            <td>${user.name}</td>
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td>${user.website}</td>
        </tr>
        `;
    }, '');
}
function onHeaderClick(event) {
    if(event.target.tagName.toLowerCase() === 'th') {
        const key = event.target.getAttribute('data-column');
        const sort = event.target.getAttribute('data-sort');
        let users = this.slice();
        if(sort === 'asc' ) {
            event.target.setAttribute('data-sort', 'desc');
            users = users.sort((a, b) => { return a[key] > b[key] ? 1 : -1 });
        } else {
            event.target.setAttribute('data-sort', 'asc');
            users = users.sort((a, b) => { return a[key] < b[key] ? 1 : -1 });
        }

        renderSortedUsers(users, '.body');
    }
}
(async () => {
    const users = await getUsers();
    renderUsersTable(users, '#app');

    document.querySelector('.header').addEventListener('click', onHeaderClick.bind(users));
})();
