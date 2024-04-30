import { generarDatosEmpresa,generarApellidoAleatorio,generarCurp, generarEmailAleatorio, generarNombreAleatorio, generarRfc, generarTelefonoAleatorio} from './globalFunctions';



export function step4 (STEP4SELECTORS, GENERALSELECTORS, options) {
    function generarGeneroAleatorio() {
        const generos = [STEP4SELECTORS.genderOptionMale, STEP4SELECTORS.genderOptionFemale, STEP4SELECTORS.genderOptionOther];
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

    let procederAlPaso5 = false;

    if(options.beneficio){
        cy.get(STEP4SELECTORS.acceptYes).click({force:true});
        cy.get(STEP4SELECTORS.curpInput).type(curp);
        cy.get(STEP4SELECTORS.rfcInput).type(rfc);
        cy.get(STEP4SELECTORS.nameInput).type(nombre + ' ' + apellido);
        cy.get(STEP4SELECTORS.genderDropdown).click();
        cy.get(genero).click(); 
    
        cy.get(STEP4SELECTORS.birthDateInput).click();
        cy.get(STEP4SELECTORS.todayButton).click();
        cy.get(STEP4SELECTORS.nationalityInput).type(nacionalidad);
        cy.get(STEP4SELECTORS.countryBornInput).type(nacionalidad);
        cy.get(STEP4SELECTORS.countryNationalityInput).type(nacionalidad);
    
        cy.get(STEP4SELECTORS.companyNameInput).type(datosEmpresa.empresa);
        cy.get(STEP4SELECTORS.activityInput).type(datosEmpresa.giro);
        cy.get(STEP4SELECTORS.positionInput).type(datosEmpresa.actividad);
        cy.get(STEP4SELECTORS.cellPhoneInput).type(telefono);
        
        cy.get(STEP4SELECTORS.homePhoneInput).type(telefono);
        cy.get(STEP4SELECTORS.emailInput).type(email);


        
        cy.get(STEP4SELECTORS.idTypeDropdown).click();
        if(options.tipoId ===STEP4SELECTORS.idTypeOptionMigrationFormat){
            cy.get(STEP4SELECTORS.idTypeOptionMigrationFormat).click(); 
            cy.get(STEP4SELECTORS.passportNumberInput).type(curp); 
            cy.get(STEP4SELECTORS.idNumberInput).type(curp);
        }else{
            cy.get(options.tipoId).click();
            cy.get(STEP4SELECTORS.idNumberInput).type(curp);
        }

        procederAlPaso5 = true; 
    }
    

    cy.get(GENERALSELECTORS.continueButton).click();
    return procederAlPaso5;
};