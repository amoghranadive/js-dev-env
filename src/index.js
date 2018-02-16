import {getUsers, deleteUser} from './api/userApi';

getUsers().then(result => {
	let users = "";

	result.forEach(element => {
		users += `<tr>
			<td><a href="#" data-id="${element.id}" class="deleteUser">Delete</a></td>
			<td>${element.id}</td>
			<td>${element.firstName}</td>
			<td>${element.lastName}</td>
			<td>${element.email}</td>
			</tr>`
	});

	global.document.getElementById('users').innerHTML = users;

	const deleteLinks = global.document.getElementsByClassName('deleteUser');

	Array.from(deleteLinks, link => {
		link.onclick = function(event) {
			const element = event.target;
			event.preventDefault();
			deleteUser(element.attributes["data-id"].value);
			const row = element.parentNode.parentNode;
			row.parentNode.removeChild(row);
		};
	});
});