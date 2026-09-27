const datos = {
    "Junín": {
        "Huancayo": {
            "Huancayo": [
                "Colegio Salesiano Santa Rosa"
            ]
        }
    }
};


const region = document.getElementById("region");
const provincia = document.getElementById("provincia");
const distrito = document.getElementById("distrito");
const lugar = document.getElementById("lugar");

const guardar = document.getElementById("guardar");
const mensaje = document.getElementById("mensaje");

const imagen = document.getElementById("imagenMapa");


// ==========================
// REGIÓN
// ==========================

for (const r in datos) {

    const o = document.createElement("option");

    o.value = r;
    o.textContent = r;

    region.appendChild(o);
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


    for (const p in datos[region.value]) {

        const o = document.createElement("option");

        o.value = p;
        o.textContent = p;

        provincia.appendChild(o);
    }


    mensaje.textContent =
        "Seleccione una provincia.";
};


// ==========================
// PROVINCIA
// ==========================

provincia.onchange = () => {

    distrito.innerHTML =
        '<option value="">Seleccione...</option>';

    lugar.innerHTML =
        '<option value="">Seleccione...</option>';


    distrito.disabled = false;
    lugar.disabled = true;

    guardar.disabled = true;


    for (
        const d in datos[region.value][provincia.value]
    ) {

        const o = document.createElement("option");

        o.value = d;
        o.textContent = d;

        distrito.appendChild(o);
    }


    mensaje.textContent =
        "Seleccione un distrito.";
};


// ==========================
// DISTRITO
// ==========================

distrito.onchange = () => {

    lugar.innerHTML =
        '<option value="">Seleccione...</option>';


    lugar.disabled = false;
    guardar.disabled = true;


    datos[
        region.value
    ][
        provincia.value
    ][
        distrito.value
    ].forEach(n => {

        const o = document.createElement("option");

        o.value = n;
        o.textContent = n;

        lugar.appendChild(o);
    });


    mensaje.textContent =
        "Seleccione un lugar.";
};


// ==========================
// LUGAR
// ==========================

lugar.onchange = () => {

    guardar.disabled = !lugar.value;


    if (
        lugar.value ===
        "Colegio Salesiano Santa Rosa"
    ) {
        imagen.src =
            "Gemini_Generated_Image_n2uqnfn2uqnfn2uq.jpeg";


        mensaje.textContent =
            "Mapa del Colegio Salesiano Santa Rosa listo.";

    } else {

        imagen.src =
            "assets/no-map.svg";

        mensaje.textContent =
            "No hay mapas (aún).";
    }
};


// ==========================
// GUARDAR
// ==========================

guardar.onclick = () => {

    localStorage.setItem(
        "hostold-lugar",
        lugar.value
    );


    mensaje.textContent =
        "✔ Ubicación guardada correctamente.";
};


// ==========================
// VISOR DEL MAPA
// ==========================

const visor =
    document.getElementById("visorMapa");

const grande =
    document.getElementById("mapaGrande");


document.getElementById("verMapa").onclick = () => {

    if (!lugar.value) {

        mensaje.textContent =
            "Primero selecciona un lugar.";

        return;
    }


    grande.src = imagen.src;

    visor.classList.add("activo");
};


// ==========================
// CERRAR VISOR
// ==========================

document.getElementById("cerrarMapa").onclick = () => {

    visor.classList.remove("activo");
};


// ==========================
// DESCARGAR
// ==========================

document.getElementById("descargarMapa").onclick = () => {

    if (!lugar.value) {

        mensaje.textContent =
            "Primero selecciona un lugar.";

        return;
    }


    const a =
        document.createElement("a");


    a.href =
        imagen.src;


    a.download =
        "Hostold-Colegio-Salesiano-Santa-Rosa.png";


    document.body.appendChild(a);

    a.click();

    document.body.removeChild(a);
};
