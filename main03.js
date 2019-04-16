var axios;
axios.get('https://api.github.com/users/raymissson')
    .then(function(response){
        console.log(response);
    })
    .catch(function(error){
        console.warn(error);
    });