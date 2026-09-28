// ==========================================
// DATOS DE HOSTOLD
// ==========================================

const datos = {

    "Junín": {

        "Huancayo": {

            "Huancayo": [

                "Colegio Salesiano Santa Rosa"

            ]

        }

    }

};



// ==========================================
// CONECTAR HTML CON JAVASCRIPT
// ==========================================

const region =
    document.getElementById("region");

const provincia =
    document.getElementById("provincia");

const distrito =
    document.getElementById("distrito");

const lugar =
    document.getElementById("lugar");

const guardar =
    document.getElementById("guardar");

const mensaje =
    document.getElementById("mensaje");

const imagen =
    document.getElementById("imagenMapa");



// ==========================================
// REGIÓN
// ==========================================

for (const r in datos) {

    const opcion =
        document.createElement("option");

    opcion.value = r;

    opcion.textContent = r;

    region.appendChild(opcion);

}



region.onchange = () => {


    provincia.innerHTML =
        '<option value="">Seleccione...</option>';

    distrito.innerHTML =
        '<option value="">Seleccione...</option>';

    lugar.innerHTML =
        '<option value="">Seleccione...</option>';


    provincia.disabled = false;

    distrito.disabled = true;

    lugar.disabled = true;

    guardar.disabled = true;


    for (
        const p in datos[region.value]
    ) {

        const opcion =
            document.createElement("option");

        opcion.value = p;

        opcion.textContent = p;

        provincia.appendChild(opcion);

    }


    mensaje.textContent =
        "Seleccione una provincia.";

};



// ==========================================
// PROVINCIA
// ==========================================

provincia.onchange = () => {


    distrito.innerHTML =
        '<option value="">Seleccione...</option>';

    lugar.innerHTML =
        '<option value="">Seleccione...</option>';


    distrito.disabled = false;

    lugar.disabled = true;

    guardar.disabled = true;


    for (
        const d in
        datos[region.value][provincia.value]
    ) {

        const opcion =
            document.createElement("option");

        opcion.value = d;

        opcion.textContent = d;

        distrito.appendChild(opcion);

    }


    mensaje.textContent =
        "Seleccione un distrito.";

};



// ==========================================
// DISTRITO
// ==========================================

distrito.onchange = () => {


    lugar.innerHTML =
        '<option value="">Seleccione...</option>';


    lugar.disabled = false;

    guardar.disabled = true;


    datos
        [region.value]
        [provincia.value]
        [distrito.value]
        .forEach(nombre => {


            const opcion =
                document.createElement("option");


            opcion.value =
                nombre;


            opcion.textContent =
                nombre;


            lugar.appendChild(opcion);

        });


    mensaje.textContent =
        "Seleccione un lugar.";

};



// ==========================================
// LUGAR
// ==========================================

lugar.onchange = () => {


    guardar.disabled =
        !lugar.value;



    // ======================================
    // MAPA DEL COLEGIO SALESIANO
    // ======================================

    if (
        lugar.value ===
        "Colegio Salesiano Santa Rosa"
    ) {


        imagen.src =
            "Gemini_Generated_Image_n2uqnfn2uqnfn2uq.jpeg";


        mensaje.textContent =
            "Mapa del Colegio Salesiano Santa Rosa listo.";


    }

};



// ==========================================
// GUARDAR UBICACIÓN
// ==========================================

guardar.onclick = () => {


    localStorage.setItem(
        "hostold-lugar",
        lugar.value
    );


    mensaje.textContent =
        "✔ Ubicación guardada correctamente.";

};



// ==========================================
// VISOR DEL MAPA
// ==========================================

const visor =
    document.getElementById("visorMapa");

const mapaGrande =
    document.getElementById("mapaGrande");

const botonVerMapa =
    document.getElementById("verMapa");



botonVerMapa.onclick = () => {


    if (!lugar.value) {

        mensaje.textContent =
            "Primero selecciona un lugar.";

        return;

    }


    mapaGrande.src =
        imagen.src;


    visor.classList.add("activo");

};



// ==========================================
// CERRAR MAPA
// ==========================================

const botonCerrar =
    document.getElementById("cerrarMapa");


botonCerrar.onclick = () => {

    visor.classList.remove("activo");

};



// ==========================================
// DESCARGAR MAPA
// ==========================================

const botonDescargar =
    document.getElementById("descargarMapa");


botonDescargar.onclick = () => {


    if (!lugar.value) {

        mensaje.textContent =
            "Primero selecciona un lugar.";

        return;

    }


    const enlace =
        document.createElement("a");


    enlace.href =
        imagen.src;


    enlace.download =
        "Hostold-Colegio-Salesiano-Santa-Rosa.jpeg";


    document.body.appendChild(enlace);


    enlace.click();


    document.body.removeChild(enlace);

};
