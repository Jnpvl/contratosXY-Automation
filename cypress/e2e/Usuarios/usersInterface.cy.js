import { USERSELECTORS } from '../../constants/userSelectors';

describe('Modulo usuario - Creacion', () => {

    beforeEach(() => {
        cy.login();
    });

    it('Modal de creacion presente', () => {
        cy.contains(USERSELECTORS.addUserButton).click();
        cy.get('#modal-user').should('be.visible')
    });

    it('Modal de edicion presente', () => {
        cy.get('img.edit-icon').should('be.visible')

    });

    it('Funcion para activar/desactivar presente', () => {
        cy.get(' :nth-child(5) > .toggle-btn-icon').should('be.visible');
    });

    it('Filtro de busqueda presente y funcional', () => {
        cy.get('input[name="search"]').type('test {enter}')
        cy.get('table[role="table"] tr').filter((index, element) => {
            return Cypress.$(element).text().includes('test');
        }).then(filteredRows => {
            expect(filteredRows).to.have.length.of.at.least(1);
        });

    });

    it('Filtro de perfil presente y funcional', () => {
        cy.get('#role_input').click();
        cy.get('[aria-label="Administrador"]').click()
        cy.get('table[role="table"] tr').filter((index, element) => {
            return Cypress.$(element).text().includes('Administrador');
        }).then(filteredRows => {
            expect(filteredRows).to.have.length.of.at.least(1);
        });
    });

    it('Funcionalidad de paginado', () => {
        cy.get('[data-pc-name="paginator"]').should('be.visible');
        const verificarDatosEnTabla = () => {
            cy.get('table[role="table"] tr').then(rows => {
                expect(rows.length).to.be.greaterThan(0);
            });
        };

        verificarDatosEnTabla();

        cy.get('.p-paginator-next').should('be.visible').click().then(() => {
            verificarDatosEnTabla();
        });

        cy.get('.p-paginator-prev').should('be.visible').click().then(() => {
            verificarDatosEnTabla();
        });
    });


});





