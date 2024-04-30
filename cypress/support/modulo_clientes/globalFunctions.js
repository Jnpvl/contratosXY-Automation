
function generarCurp() {
    const consonantes = 'BCDFGHJKLMNPQRSTVWXYZ';
    const vocales = 'AEIOU';
    const estados = ['AS', 'BC', 'BS', 'CC', 'CS', 'CH', 'CL', 'CM', 'DF', 'DG', 'GT', 'GR', 'HG', 'JC', 'MC', 'MN', 'MS', 'NT', 'NL', 'OC', 'PL', 'QT', 'QR', 'SP', 'SL', 'SR', 'TC', 'TS', 'TL', 'VZ', 'YN', 'ZS'];
    const nombre = vocales[Math.floor(Math.random() * vocales.length)] + consonantes[Math.floor(Math.random() * consonantes.length)];
    const apPaterno = consonantes[Math.floor(Math.random() * consonantes.length)] + vocales[Math.floor(Math.random() * vocales.length)];
    const apMaterno = consonantes[Math.floor(Math.random() * consonantes.length)];
    const fechaNacimiento = Math.floor(Math.random() * (99 - 50) + 50) + Math.floor(Math.random() * 12 + 1).toString().padStart(2, '0') + Math.floor(Math.random() * 28 + 1).toString().padStart(2, '0');
    const sexo = Math.random() > 0.5 ? 'H' : 'M';
    const estado = estados[Math.floor(Math.random() * estados.length)];
    const homoclave = Math.random().toString(36).substring(2, 6).toUpperCase();

    return apPaterno + apMaterno + nombre + fechaNacimiento + sexo + estado + homoclave;
}

function generarRfc() {
    const consonantes = 'BCDFGHJKLMNPQRSTVWXYZ';
    const vocales = 'AEIOU';
    let apPaterno = consonantes[Math.floor(Math.random() * consonantes.length)] + vocales[Math.floor(Math.random() * vocales.length)];
    let apMaterno = consonantes[Math.floor(Math.random() * consonantes.length)];
    let nombre = vocales[Math.floor(Math.random() * vocales.length)];
    const año = Math.floor(Math.random() * (99 - 50) + 50).toString(); 
    const mes = Math.floor(Math.random() * 12 + 1).toString().padStart(2, '0');
    const dia = Math.floor(Math.random() * 28 + 1).toString().padStart(2, '0'); 
    const homoclave = Math.random().toString(36).substring(2, 5).toUpperCase();

    // Ajustando el apellido paterno para obtener la primera vocal después de la primera letra.
    let primeraVocalApPaterno = '';
    for (let i = 1; i < apPaterno.length; i++) {
        if (vocales.includes(apPaterno[i])) {
            primeraVocalApPaterno = apPaterno[i];
            break;
        }
    }

    // Asegurarse de que el apellido paterno y materno y el nombre tengan al menos una letra para evitar errores
    apPaterno = apPaterno.padEnd(2, 'X');
    apMaterno = apMaterno.padEnd(1, 'X');
    nombre = nombre.padEnd(1, 'X');

    // Construyendo el RFC para persona física
    return apPaterno[0] + primeraVocalApPaterno + apMaterno[0] + nombre[0] + año + mes + dia + homoclave;
}


function generarNombreAleatorio() {
    const nombres = ['Alex', 'Jamie', 'Chris', 'Taylor', 'Jordan', 'Casey', 'Drew', 'Patricia', 'Luis', 'Roberto', 'Andrea', 'Sofía', 'Eduardo', 'Fernanda', 'Ricardo', 'Daniela'];
    return nombres[Math.floor(Math.random() * nombres.length)];
}

function generarApellidoAleatorio() {
    const apellidos = ['Hernández', 'García', 'Martínez', 'López', 'González', 'Pérez', 'Rodríguez', 'Sánchez', 'Ramírez', 'Cruz', 'Flores', 'Gómez', 'Morales', 'Vázquez', 'Jiménez', 'Ruiz', 'Álvarez', 'Moreno', 'Muñoz', 'Alvarado'];
    return apellidos[Math.floor(Math.random() * apellidos.length)];
}

function generarEmailAleatorio(nombre) {
    return `${nombre.toLowerCase()}${Math.floor(Math.random() * 100)}@yopmail.com`;
}

function generarTelefonoAleatorio() {
    let telefono = '';
    for (let i = 0; i < 10; i++) {
        telefono += Math.floor(Math.random() * 10);
    }
    return telefono;
}

function generarDatosEmpresa() {
    const empresas = [
        { empresa: "Tecnologías Innovadoras", giro: "Tecnología", actividad: "Desarrollo de software" },
        { empresa: "Construcciones Modernas", giro: "Construcción", actividad: "Construcción de infraestructura" },
        { empresa: "Eco Soluciones", giro: "Energía", actividad: "Soluciones de energía renovable" },
        { empresa: "AgroExportaciones", giro: "Agricultura", actividad: "Exportación de productos agrícolas" },
        { empresa: "Logística Internacional", giro: "Logística", actividad: "Servicios de logística y transporte" },
        { empresa: "Alimentos Nutritivos", giro: "Alimentación", actividad: "Producción de alimentos orgánicos" },
        { empresa: "Diseño y Moda", giro: "Moda", actividad: "Diseño y venta de ropa" },
        { empresa: "Mecánica Avanzada", giro: "Automotriz", actividad: "Fabricación de autopartes" },
        { empresa: "Bienes Raíces del Futuro", giro: "Inmobiliaria", actividad: "Venta y renta de propiedades" },
        { empresa: "Entretenimiento Digital", giro: "Entretenimiento", actividad: "Producción de videojuegos" }
    ];

    const seleccion = empresas[Math.floor(Math.random() * empresas.length)];
    return seleccion;
}

function generarDatosDireccionExtranjera() {
    return {
        calle: 'Calle Extranjera ' + Math.floor(Math.random() * 100),
        exterior: Math.floor(Math.random() * 100).toString(),
        interior: Math.floor(Math.random() * 10).toString(),
        colonia: 'Colonia Extranjera',
        municipio: 'Municipio Extranjero',
        codigoPostal: Math.floor(10000 + Math.random() * 90000).toString(),
        ciudad: 'Ciudad Extranjera',
        entidad: 'Entidad Extranjera',
        pais: 'País Extranjero'
    };
}



export {generarDatosDireccionExtranjera,generarDatosEmpresa,generarApellidoAleatorio,generarCurp,generarEmailAleatorio,generarNombreAleatorio,generarRfc,generarTelefonoAleatorio};