import { generarDatosDireccionExtranjera } from './globalFunctions';


export function step5(STEP5SELECTORS, GENERALSELECTORS, options) {
    const datosExtranjeros = generarDatosDireccionExtranjera();

    cy.get(STEP5SELECTORS.zipCode).type('89892');
    cy.get(STEP5SELECTORS.colony).type('col');
    cy.get(STEP5SELECTORS.municipality).type('mun');
    cy.get(STEP5SELECTORS.city).type('ciudad');
    cy.get(STEP5SELECTORS.federalEntity).type('entidad');
    cy.get(STEP5SELECTORS.street).type('calle');
    cy.get(STEP5SELECTORS.innerNum).type('d-2');
    cy.get(STEP5SELECTORS.exteriorNum).type('d-2');
    cy.get(STEP5SELECTORS.country).type('mexico');

    if(options.extranjero){
        cy.get(STEP5SELECTORS.hasCheckbox).click({force:true});
        cy.get(STEP5SELECTORS.foreignExteriorNum).clear().type(datosExtranjeros.exterior);
        cy.get(STEP5SELECTORS.foreignStreet).clear().type(datosExtranjeros.calle);
        cy.get(STEP5SELECTORS.foreignInnerNum).clear().type(datosExtranjeros.interior);
        cy.get(STEP5SELECTORS.foreignColony).clear().type(datosExtranjeros.colonia);
        cy.get(STEP5SELECTORS.foreignMunicipality).clear().type(datosExtranjeros.municipio);
        cy.get(STEP5SELECTORS.foreignZipCode).clear().type(datosExtranjeros.codigoPostal);
        cy.get(STEP5SELECTORS.foreignCity).clear().type(datosExtranjeros.ciudad);
        cy.get(STEP5SELECTORS.foreignFederalEntity).clear().type(datosExtranjeros.entidad);
        cy.get(STEP5SELECTORS.foreignCountry).clear().type(datosExtranjeros.pais);
    }

    cy.get(GENERALSELECTORS.continueButton).click();
}
