// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --

import { GENERALSELECTORS } from "../constants/clientSelectors";

// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add('login',()=>{
    cy.visit(Cypress.env('URL'))
    cy.get('#email').type(Cypress.env('EMAIL'))
    cy.get('#password').type(Cypress.env('PASSWORD'))
    cy.get('.p-button-label').click();
})
Cypress.Commands.add('cliente',()=>{
    cy.contains('li', 'Clientes').click()
    cy.contains(GENERALSELECTORS.addUserButton).click();
    cy.get(GENERALSELECTORS.fisicPerson).click({ force: true });
    cy.get(GENERALSELECTORS.acceptButton).click();
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })