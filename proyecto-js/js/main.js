'use strict'

$(document).ready(function(){

    if(window.location.href.indexOf('index') > -1){
    // Slider
    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200,
        responsive: true
    });

    // Posts
    var posts = [
        {
            title: 'Prueba de titulo 1',
            date: 'Publicado el dia '+moment().format("dddd ")+moment().date()+' de '+moment().format("MMMM, YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu felis id mauris euismod condimentum eget sed leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum felis est, cursus sed urna vel, sodales ultrices purus.  Aliquam vitae dapibus leo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis sit amet enim nisl.  Aenean nec massa consectetur, viverra arcu in, posuere urna. Cras imperdiet erat vel ullamcorper eleifend. Mauris convallis interdum erat, ac mattis turpis pellentesque ut. Etiam aliquam ex turpis, eget tincidunt lorem scelerisque a. Maecenas id odio risus. Proin sit amet finibus purus, eget egestas ex. Vestibulum lobortis eros maximus, accumsan est at, blandit diam. Maecenas et est sit amet odio semper pellentesque. Proin rutrum ultricies malesuada.'
        },
        {
            title: 'Prueba de titulo 2',
            date: 'Publicado el dia '+moment().format("dddd ")+moment().date()+' de '+moment().format("MMMM, YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu felis id mauris euismod condimentum eget sed leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum felis est, cursus sed urna vel, sodales ultrices purus.  Aliquam vitae dapibus leo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis sit amet enim nisl.  Aenean nec massa consectetur, viverra arcu in, posuere urna. Cras imperdiet erat vel ullamcorper eleifend. Mauris convallis interdum erat, ac mattis turpis pellentesque ut. Etiam aliquam ex turpis, eget tincidunt lorem scelerisque a. Maecenas id odio risus. Proin sit amet finibus purus, eget egestas ex. Vestibulum lobortis eros maximus, accumsan est at, blandit diam. Maecenas et est sit amet odio semper pellentesque. Proin rutrum ultricies malesuada.'
        },
        {
            title: 'Prueba de titulo 3',
            date: 'Publicado el dia '+moment().format("dddd ")+moment().date()+' de '+moment().format("MMMM, YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu felis id mauris euismod condimentum eget sed leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum felis est, cursus sed urna vel, sodales ultrices purus.  Aliquam vitae dapibus leo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis sit amet enim nisl.  Aenean nec massa consectetur, viverra arcu in, posuere urna. Cras imperdiet erat vel ullamcorper eleifend. Mauris convallis interdum erat, ac mattis turpis pellentesque ut. Etiam aliquam ex turpis, eget tincidunt lorem scelerisque a. Maecenas id odio risus. Proin sit amet finibus purus, eget egestas ex. Vestibulum lobortis eros maximus, accumsan est at, blandit diam. Maecenas et est sit amet odio semper pellentesque. Proin rutrum ultricies malesuada.'
        },
        {
            title: 'Prueba de titulo 4',
            date: 'Publicado el dia '+moment().format("dddd ")+moment().date()+' de '+moment().format("MMMM, YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu felis id mauris euismod condimentum eget sed leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum felis est, cursus sed urna vel, sodales ultrices purus.  Aliquam vitae dapibus leo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis sit amet enim nisl.  Aenean nec massa consectetur, viverra arcu in, posuere urna. Cras imperdiet erat vel ullamcorper eleifend. Mauris convallis interdum erat, ac mattis turpis pellentesque ut. Etiam aliquam ex turpis, eget tincidunt lorem scelerisque a. Maecenas id odio risus. Proin sit amet finibus purus, eget egestas ex. Vestibulum lobortis eros maximus, accumsan est at, blandit diam. Maecenas et est sit amet odio semper pellentesque. Proin rutrum ultricies malesuada.'
        },
        {
            title: 'Prueba de titulo 5',
            date: 'Publicado el dia '+moment().format("dddd ")+moment().date()+' de '+moment().format("MMMM, YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu felis id mauris euismod condimentum eget sed leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum felis est, cursus sed urna vel, sodales ultrices purus.  Aliquam vitae dapibus leo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis sit amet enim nisl.  Aenean nec massa consectetur, viverra arcu in, posuere urna. Cras imperdiet erat vel ullamcorper eleifend. Mauris convallis interdum erat, ac mattis turpis pellentesque ut. Etiam aliquam ex turpis, eget tincidunt lorem scelerisque a. Maecenas id odio risus. Proin sit amet finibus purus, eget egestas ex. Vestibulum lobortis eros maximus, accumsan est at, blandit diam. Maecenas et est sit amet odio semper pellentesque. Proin rutrum ultricies malesuada.'
        }
    ];
    
    posts.forEach((item, index) => {
        var post = `
        <article class="post">
            <h2>${item.title}</h2>
            <span class="date">${item.date}</span>
            <p>
                ${item.content}
            </p>
            <a href="#" class="button-more">Leer más</a>
        </article>
        `;

        $("#posts").append(post);
    });
}
    // Selector de tema
    var theme = $("#theme")
    $("#to-green").click(function(){
        theme.attr("href", "css/green.css")
    });
    $("#to-red").click(function(){
        theme.attr("href", "css/red.css")
    });
    $("#to-blue").click(function(){
        theme.attr("href", "css/blue.css")
    });

    // Scroll arriba de la web
    $('.subir').click(function(e){
        e.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    // Login falso
    $("#login form").submit(function(){
        var formName = $("#formName").val();

        localStorage.setItem("formName", formName);
    });

    var formName = localStorage.getItem("formName");

    if(formName != null && formName != "undefined"){
        var aboutParrafo = $("#about p")
        aboutParrafo.html("<br><strong>Bienvenido, "+formName+"</strong>");
        aboutParrafo.append("<a href='#' id='logout'>Cerrar sesión</a>");

        $("#login").hide();

        $("#logout").click(function(){
            localStorage.clear();
            location.reload();
        });
    } 
    
    // Acordeon
    if(window.location.href.indexOf('about') > -1){
        $("#acordeon").accordion();
    }

    // Reloj
    if(window.location.href.indexOf('reloj') > -1){

        setInterval(function(){
            var reloj = moment().format("h:mm:ss");
            $("#reloj").html(reloj);
        }, 1000);
        
    }

    // Validacion
    if(window.location.href.indexOf('contact') > -1){

        $("form input[name='date']").datepicker({
            dateFormat: 'dd-mm-yy'
        });

        $.validate({
            lang: 'es',
            errorMessagePosition: 'top',
            scrollToTopOnError: true
        });
    }
});