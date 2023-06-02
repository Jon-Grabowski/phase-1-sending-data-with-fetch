// Add your code here
const destinationURL = "http://localhost:3000/users";

// const bodyData = {
//     name: userName,
//     email: userEmail
// };
// const configurationObj = {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//     },
//     body: JSON.stringify(bodyData)
// };

function submitData (userName, userEmail) {
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail
        })
    })
    .then(res => res.json())
    .then(data => {
        document.querySelector('body').append(data.id);
    })
    .catch(error => {
        document.querySelector('body').append(error.message);
    })
}
// fetch(destinationURL, configurationObj)
//     .then(res => res.json())
//     .then(responseData => console.log(responseData))
//     .catch(error => {
//         alert(`We've got a problem!`);
//         console.log(error);
//     })