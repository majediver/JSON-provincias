let informacionApi = document.querySelector('#informacionApi')
function obtener() {
    fetch('provincias.json')
    .then(data => data.json())
    .then(data => {
        console.log(data)
       combobox(data)
    });
}
function combobox(data) {
    //console.log(data)
    informacionApi.innerHTML = ` `
    for (let valor of data.provincias) {
        //console.log(valor.nombre_completo)
        informacionApi.innerHTML += ` 
        <a   class="dropdown-item" href="#">${valor.nombre}</a>
        <option>${valor.nombre}</option>
        `
    }
}

obtener()