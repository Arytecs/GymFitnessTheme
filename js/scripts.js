jQuery(document).ready($ => {
    $(function () {
        $('.site-header .menu-principal .menu').slicknav({
            label: '',
            appendTo: '.site-header'
        });
    });

    //Mapa de leaflet
    const lat = document.querySelector('#lat'),
    lng = document.querySelector('#lng'),
    direccion = document.querySelector('#direccion');

    if(lat && lng && direccion){
        var map = L.map('mapa').setView([lat.value, lng.value], 15);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([lat.value, lng.value]).addTo(map)
        .bindPopup(direccion.value)
        .openPopup();
    }
    

    
})