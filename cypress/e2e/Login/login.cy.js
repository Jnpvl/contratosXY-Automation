

describe('Login Test', () => {

  beforeEach(()=>{
    cy.visit(Cypress.env('URL'));
  })
  
  it('sin datos', () => {
    cy.get('.p-button-label').click();
    cy.contains('span',"El correo es requerido.").should('be.visible')
    cy.contains('span',"La contraseña es requerida.").should('be.visible')
  })

  it('Login Correcto', () => {
    cy.get('#email').type(Cypress.env('EMAIL'))
    cy.get('#password').type(Cypress.env('PASSWORD'))
    cy.get('.p-button-label').click();
    cy.get('#swal2-title').should('be.visible')
  })

})