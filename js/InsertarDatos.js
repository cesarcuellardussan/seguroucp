$(function() {
    $("form").submit(function(e) {
        e.preventDefault();
        var datos_array = $(this).serializeArray();
        var datos = {};
        $.map(datos_array, function(n, i) {
            datos[n['name']] = n['value'];
        });


        var url = "http://segurosucp.azurewebsites.net/api/Clientes";

        var xhr = new XMLHttpRequest();
        xhr.open("GET", url);

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                console.log(xhr.status);
                console.log(xhr.responseText);
            }
        };

        xhr.send();


        // var settings = {
        //     dataType: "jsonp",
        //     url: "http://segurosucp.azurewebsites.net/api/Clientes"
        // }

        // $.ajax(settings).done(function(response) {
        //     console.log(response);
        // });

        // fetch('http://segurosucp.azurewebsites.net/api/Clientes', {
        //         // method: 'GET', // or 'PUT',                
        //         headers: {
        //             'Access-Control-Allow-Origin': 'http://localhost:8090'
        //         },
        //         Vary: Origin
        //     })
        //     .then(response => response.jsonp())
        //     .then(data => console.log(data));

        // fetch('http://segurosucp.azurewebsites.net/api/Clientes')
        //     .then(respuesta => respuesta.json())
        //     .then(datosJSON => {
        //         datosCompletos = datosJSON;
        //         console.log(datosJSON);
        //     });

        // fetch('http://segurosucp.azurewebsites.net/api/Clientes', {
        //         // method: 'GET', // or 'PUT',
        //         mode: 'no-cors', // no-cors
        //         headers: {
        //             'Content-Type': 'Access-Control-Allow-Origin'
        //         }
        //     }).then(response => response.text())
        //     .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
        //     .then(data => console.log(data))
        //     .then(respuesta => respuesta.body())
        //     // .then(function(response) {
        //     //     alert("entro");
        //     //     console.log('response.body =', response.body);
        //     //     console.log('response.bodyUsed =', response.bodyUsed);
        //     //     console.log('response.headers =', response.headers);
        //     //     console.log('response.ok =', response.ok);
        //     //     console.log('response.status =', response.status);
        //     //     console.log('response.statusText =', response.statusText);
        //     //     console.log('response.type =', response.type);
        //     //     console.log('response.url =', response.url);
        //     //     // console.log('response.url =', response.text);
        //     //     // return response.json();
        //     // })
        //     .then(function(data) {
        //         console.log('data = ', data);
        //     })
        //     .catch(function(err) {
        //         console.error(err);
        //     });


        // .then(response => response.text())
        // .catch(error => console.error('Error:', error))
        // .then(response => console.log('Success:', response));

    });
});