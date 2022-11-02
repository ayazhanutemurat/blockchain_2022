const axios = require("axios");

function fake_api(data){
    return new Promise((resolve, reject) => {
        axios.post('https://reqres.in/api/users', {
            ...data }).then(function (response) {
            // console.log(response.data);
            resolve(response.data);
        }).catch(function (error) {
            console.log('break');
            resolve(error);
        });
    });

}

module.exports = {
    fake_api
}