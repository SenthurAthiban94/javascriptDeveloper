const GRAPHQL_URL = 'http://localhost:9000/';

async function createUser() {
    const response = await fetch(GRAPHQL_URL, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            query: `
            mutation($firstname:String!,$lastname:String!) {
                createUser(firstName:$firstname, lastName:$lastname){
                    id
                    firstName
                    lastName
                }
            }`,
            variables: {
                "firstname": 'senthur',
                "lastname": 'athiban'
            }
        }),
    }).then(res=>res.json());
    console.log(response);
    const newUser = document.createElement('div');
    newUser.innerHTML = `<br/><div>${response.data.createUser.id} - ${response.data.createUser.firstName} ${response.data.createUser.lastName}</div></br>`;
    document.getElementsByClassName('userList')[0].appendChild(newUser);
};

async function fetchUsers() {
    const response = await fetch(GRAPHQL_URL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query {
            users {
                id
                firstName
                lastName
            }
          }
        `,
      }),
    }).then(res=>res.json());
    document.getElementsByClassName('userList')[0].innerHTML=response.data.users.map(u=>`<div>${u.id} - ${u.firstName} ${u.lastName}</div>`).join('<br/>')
    console.log(response);
}
fetchUsers();