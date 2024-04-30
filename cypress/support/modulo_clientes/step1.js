import 'cypress-file-upload';
import { generarDatosEmpresa,generarApellidoAleatorio,generarCurp, generarEmailAleatorio, generarNombreAleatorio, generarRfc, generarTelefonoAleatorio } from './globalFunctions';


export function step1(STEP1SELECTORS, GENERALSELECTORS, options) {
    function generarGeneroAleatorio() {
        const generos = [STEP1SELECTORS.GenderM, STEP1SELECTORS.GenderF, STEP1SELECTORS.GenderO];
        return generos[Math.floor(Math.random() * generos.length)];
    }
    
    const curp = generarCurp();
    const rfc = generarRfc();
    const nombre = generarNombreAleatorio();
    const email = generarEmailAleatorio(nombre);
    const telefono = generarTelefonoAleatorio();
    const apellido = generarApellidoAleatorio();
    const nacionalidad = 'Mexico';
    const datosEmpresa = generarDatosEmpresa();
    const genero = generarGeneroAleatorio();

  

    cy.get(STEP1SELECTORS.Curp).clear().type(curp);
    cy.get(STEP1SELECTORS.RFC).clear().type(rfc);
    cy.get(STEP1SELECTORS.AP).clear().type(apellido);
    cy.get(STEP1SELECTORS.AM).clear().type(apellido);
    cy.get(STEP1SELECTORS.Name).clear().type(nombre);

    //nacimiento
    cy.get(STEP1SELECTORS.birthDate).click();
    cy.get(STEP1SELECTORS.datePickerYear).click();
    cy.get(STEP1SELECTORS.yearPickerFirstYear).click();
    cy.get(STEP1SELECTORS.monthPickerFirstMonth).click();
    cy.get(STEP1SELECTORS.firstDayOfFirstWeek).click();

    //nacionalidad
    cy.get(STEP1SELECTORS.nationality).type(nacionalidad);
    cy.get(STEP1SELECTORS.countryNationality).type(nacionalidad);
    cy.get(STEP1SELECTORS.countryBorn).type(nacionalidad);

    // Estado civil y dependientes
    if (options.estadoCivil) {
        cy.get(STEP1SELECTORS.maritalStatus).click();
        cy.get(options.estadoCivil).click();
    }
    if (options.estadoCivil === STEP1SELECTORS.casado && options.dependientes) {
        cy.get(STEP1SELECTORS.dependientes).clear().type(options.dependientes);
    }

    // Género
    cy.get(STEP1SELECTORS.GenderInput).click();
    cy.get(genero).click();

    //documentos
    cy.get(STEP1SELECTORS.idFile).attachFile('doc.pdf');
    cy.get(STEP1SELECTORS.addressFile).attachFile('doc.pdf');
    cy.get(STEP1SELECTORS.cedulaFile).attachFile('doc.pdf');

    //empresa
    cy.get(STEP1SELECTORS.company).type(datosEmpresa.empresa);
    cy.get(STEP1SELECTORS.activity).type(datosEmpresa.giro);
    cy.get(STEP1SELECTORS.position).type(datosEmpresa.actividad);

    //otros datos
    cy.get(STEP1SELECTORS.email).type(email);
    cy.get(STEP1SELECTORS.homePhone).type(telefono);
    cy.get(STEP1SELECTORS.celllPhone).type(telefono);


    //id type 
    cy.get(STEP1SELECTORS.idType).click();
    if (options.tipoId === STEP1SELECTORS.idMigratori) { 
        cy.get(STEP1SELECTORS.idMigratori).click(); 
        cy.get(STEP1SELECTORS.idNumber).type(generarRfc()); 
        if (options.passportNumber) { 
            cy.get(STEP1SELECTORS.passportNumber).type(generarCurp()); 
        }
    } else {
        cy.get(options.tipoId).click(); 
        cy.get(STEP1SELECTORS.idNumber).type(generarRfc()); 
    }

    cy.get(GENERALSELECTORS.continueButton).click();
}
