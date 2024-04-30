import 'cypress-file-upload';
import { USERSELECTORS } from '../../constants/userSelectors';

describe('Modulo usuario - Creacion', () => {

    beforeEach(() => {
        cy.login();
    });

    const crearUsuario = (datosUsuario) => {
        cy.contains(USERSELECTORS.addUserButton).click();
        cy.get(USERSELECTORS.dropzoneIconImageProfile).click();
        cy.get(USERSELECTORS.inputFile).attachFile('foto.png');
        cy.get(USERSELECTORS.userName).type(datosUsuario.nombre);
        cy.get(USERSELECTORS.userFirstLastName).type(datosUsuario.apellido);
        cy.get(USERSELECTORS.userSecondLastName).type(datosUsuario.segundoApellido);
        cy.get(USERSELECTORS.userEmail).type(datosUsuario.email);
        cy.get(USERSELECTORS.userPhone).type(datosUsuario.telefono);
        cy.get(USERSELECTORS.userPassword).type('testtest');
        cy.get(USERSELECTORS.userConfirmPassword).type('testtest');
        cy.get(USERSELECTORS.userRoleId).click();
        cy.get(datosUsuario.selectorRol).click();
        cy.get(USERSELECTORS.finishButton).click();

        cy.get(USERSELECTORS.swalContainer).then($container => {
            const messageText = $container.text();
            if (messageText.includes('Error al guardar datos')) {
                cy.log('Error al guardar los datos del usuario.');
            } else if (messageText.includes('El usuario ha sido registrado con éxito en el panel de administración')) {
                cy.log('El usuario ha sido creado con éxito.');
            }
        });
    };

    it('Crear Usuario Administrador', () => {
        crearUsuario({
            nombre: 'Admin Prueba',
            apellido: 'Apellido',
            segundoApellido: 'SegundoApellido',
            email: 'adminprueba@yopmail.com',
            telefono: '6621000001',
            selectorRol: USERSELECTORS.adminRole
        });
    });

    it('Crear Usuario Mesa de Control', () => {
        crearUsuario({
            nombre: 'MesaControl Prueba',
            apellido: 'Apellido',
            segundoApellido: 'SegundoApellido',
            email: 'mesacontrolprueba@yopmail.com',
            telefono: '6621000002',
            selectorRol: USERSELECTORS.mesaRole
        });
    });

    it('Crear Usuario Asesor', () => {
        crearUsuario({
            nombre: 'Asesor Prueba',
            apellido: 'Apellido',
            segundoApellido: 'SegundoApellido',
            email: 'asesorprueba@yopmail.com',
            telefono: '6621000003',
            selectorRol: USERSELECTORS.asesorRole
        });
    });
});
