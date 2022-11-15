"use strict";

window.onload = function(){
    var btn = document.getElementById('lookup');
    var btn_city = document.getElementById('lookup_city');
    var formInput = document.getElementById('country');
    var result = document.getElementById('result');

    var phpURL = 'http://localhost/info2180-lab5/world.php?country=';

    btn.addEventListener('click', function(event){
        event.preventDefault();
        let query = formInput.value;
        let request = new URL(phpURL + query);

        fetch (request)
            .then(response => {
                if(response.ok){
                    return response.text()
                }
                else{
                    return Promise.reject('something went wrong')
                }
            })
            .then (function (data){
                result.innerHTML = data;
            })
            .catch (error => console.log('There was an error: ' + error))

    })

    btn_city.addEventListener('click', function(event){
        event.preventDefault();
        let query = formInput.value;
        let request = new URL(phpURL + query + '&lookup=cities');

        fetch(request)
            .then(response => {
                if(response.ok){
                    return response.text()
                }
                else{
                    return Promise.reject("something went wrong");
                }
            })
            .then( function(data){
                result.innerHTML = data;
            })
            .catch( error => console.log('There was an error: ' + error))
    })
}