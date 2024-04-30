import { 
    generarNombreAleatorio,
    generarDatosEmpresa,
    generarApellidoAleatorio
} from './globalFunctions';

export function step3(STEP3SELECTORS, GENERALSELECTORS, options) {
    const nombreAleatorio = generarNombreAleatorio() + " " + generarApellidoAleatorio();
    const posicionAleatoria = generarDatosEmpresa(); 

    if (options.seleccionarPrimeraDeclaracion) {
        
        cy.get(STEP3SELECTORS.acceptFirstDeclaration).click({ force: true });

        cy.get(STEP3SELECTORS.nameInput).type(nombreAleatorio);
        cy.get(STEP3SELECTORS.positionInput).type(posicionAleatoria.actividad);
        cy.get(STEP3SELECTORS.periodDropdown).click();
        cy.get(STEP3SELECTORS.periodOption).click();
        cy.get(STEP3SELECTORS.todayButton).click();
    }

    if (options.seleccionarDeclaracionFamiliar) {
        cy.get(STEP3SELECTORS.familyDeclaration).click();
        cy.get(STEP3SELECTORS.familyMemberNameInput).type(nombreAleatorio);
        cy.get(STEP3SELECTORS.familyMemberPositionInput).type(posicionAleatoria.actividad);
        cy.get(STEP3SELECTORS.familyMemberPeriodDropdown).click();
        cy.get(STEP3SELECTORS.familyMemberStartPeriodOption).click();
        cy.get(STEP3SELECTORS.familyMemberEndPeriodOption).click();
    }

    
    cy.get(STEP3SELECTORS.acceptSwornDeclarationCheckbox).click({ force: true });
    cy.get(STEP3SELECTORS.acceptLegalActivityDiv).click();

    cy.get(GENERALSELECTORS.continueButton).click();
}
