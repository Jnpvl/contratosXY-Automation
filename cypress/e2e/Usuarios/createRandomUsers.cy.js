import 'cypress-file-upload';
import { ROLE_SELECTORS, USERSELECTORS } from '../../constants/userSelectors';

describe('Modulo usuario - Creacion random', () => {

    beforeEach(() => {
        cy.login();
    });
    const numberOfTests = 5;
    for (let i = 0; i < numberOfTests; i++) {
        it(`Crear usuario #${i + 1}`, () => {
            crearUsuario();
        });
    }

});

function generarNumeroTelefono() {
    let telefono = '';
    for (let i = 0; i < 10; i++) {
        telefono += Math.floor(Math.random() * 10); 
    }
    return telefono;
}

function crearUsuario() {
    const names = ['Alex', 'Jamie', 'Chris', 'Taylor', 'Jordan', 'Casey', 'Drew'];
    const surnames = ['Smith', 'Johnson', 'Brown', 'Williams', 'Jones', 'Miller', 'Davis'];

    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomSurname = surnames[Math.floor(Math.random() * surnames.length)];
    const randomSecondSurname = surnames[Math.floor(Math.random() * surnames.length)];
    const email = `${randomName.toLowerCase()}.${randomSurname.toLowerCase()}@yopmail.com`;

    const roles = ['Administrador', 'Mesa de control', 'Asesor'];
    const randomRole = roles[Math.floor(Math.random() * roles.length)];

    const roleSelector = ROLE_SELECTORS[randomRole];

    const telefonoAleatorio = generarNumeroTelefono();

    cy.contains(USERSELECTORS.addUserButton).click();
    cy.get(USERSELECTORS.dropzoneIconImageProfile).click();
    cy.get(USERSELECTORS.inputFile).attachFile('foto.png');
    cy.get(USERSELECTORS.userName).type(randomName);
    cy.get(USERSELECTORS.userFirstLastName).type(randomSurname);
    cy.get(USERSELECTORS.userSecondLastName).type(randomSecondSurname);
    cy.get(USERSELECTORS.userEmail).type(email);
    cy.get(USERSELECTORS.userPhone).type(telefonoAleatorio);
    cy.get(USERSELECTORS.userPassword).type('testtest');
    cy.get(USERSELECTORS.userConfirmPassword).type('testtest');
    
    cy.get(USERSELECTORS.userRoleId).click();
    cy.get(roleSelector).click();
    
    cy.get(USERSELECTORS.finishButton).click();

    cy.get(USERSELECTORS.swalContainer).then($container => {
        const messageText = $container.text();
        if (messageText.includes('Error al guardar datos')) {
            cy.log('Error al guardar los datos del usuario.');
        } else if (messageText.includes('El usuario ha sido registrado con éxito en el panel de administración')) {
            cy.log('El usuario ha sido creado con éxito.');
        }
    });
}


