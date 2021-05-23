const fetch = require('node-fetch');

const postToDB = (items) => {
    items.forEach(item => {
        let obj = {
            name:item.name,
            birthday:item.birthday
        }
        fetch("http://localhost:5002/presidents",{
            method:"POST",
            headers:{
              "Accept":"Application/Json",
              "Content-Type":"Application/Json"
            },
            body:JSON.stringify(obj)
        })
        .then(res => res.json())
    })
}

module.exports = postToDB;