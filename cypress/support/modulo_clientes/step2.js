import { generarDatosDireccionExtranjera } from './globalFunctions';

export function step2(STEP2SELECTORS, GENERALSELECTORS, options) {
    cy.get(STEP2SELECTORS.street).clear().type('Calle Principal');
    cy.get(STEP2SELECTORS.exteriorNum).clear().type('100');
    cy.get(STEP2SELECTORS.innerNum).clear().type('2');
    cy.get(STEP2SELECTORS.colony).clear().type('Colonia Central');
    cy.get(STEP2SELECTORS.municipality).clear().type('Municipio Central');
    cy.get(STEP2SELECTORS.zipCode).clear().type('50000');
    cy.get(STEP2SELECTORS.city).clear().type('Ciudad Central');
    cy.get(STEP2SELECTORS.federalEntity).clear().type('Estado Central');
    cy.get(STEP2SELECTORS.country).clear().type('México');

    if (options.direccionExtranjera) {
        cy.get(STEP2SELECTORS.siRadio).click(); 
        const datosExtranjeros = generarDatosDireccionExtranjera();

        cy.get(STEP2SELECTORS.foreignStreet).clear().type(datosExtranjeros.calle);
        cy.get(STEP2SELECTORS.foreignExteriorNum).clear().type(datosExtranjeros.exterior);
        cy.get(STEP2SELECTORS.foreignInnerNum).clear().type(datosExtranjeros.interior);
        cy.get(STEP2SELECTORS.foreignColony).clear().type(datosExtranjeros.colonia);
        cy.get(STEP2SELECTORS.foreignMunicipality).clear().type(datosExtranjeros.municipio);
        cy.get(STEP2SELECTORS.foreignZipCode).clear().type(datosExtranjeros.codigoPostal);
        cy.get(STEP2SELECTORS.foreignCity).clear().type(datosExtranjeros.ciudad);
        cy.get(STEP2SELECTORS.foreignFederalEntity).clear().type(datosExtranjeros.entidad);
        cy.get(STEP2SELECTORS.foreignCountry).clear().type(datosExtranjeros.pais);
    }

    cy.get(GENERALSELECTORS.continueButton).click();
}
