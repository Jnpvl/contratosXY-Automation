import 'cypress-file-upload';
import { GENERALSELECTORS, STEP1SELECTORS, STEP2SELECTORS, STEP3SELECTORS,STEP4SELECTORS,STEP5SELECTORS,STEP6SELECTORS} from '../../constants/clientSelectors';
import { step1,step2,step3,step4,step5,step6 } from '../../support/modulo_clientes/indexSteps';

describe('Modulo cliente - Creacion', () => {

    beforeEach(() => {
        cy.login();
        cy.cliente();
       
    });

    it('Crear cliente persona fisica con todo', () => {
        const options = {
            estadoCivil: STEP1SELECTORS.casado, //se puede quitar
            dependientes: '2', //se puede quitar
            tipoId: STEP1SELECTORS.idINE, //IdMigratori IdPassport
            passportNumber: true  //este dejarlo activo, no afecta
        };
        const options2 = {
            direccionExtranjera: true
        };
        const options3 = {
            seleccionarPrimeraDeclaracion: true, 
            seleccionarDeclaracionFamiliar: true 
        };
        const options4={
            beneficio:true, //se false o true
            tipoId: STEP4SELECTORS.idTypeOptionMigrationFormat, //idTypeOptionINEFormat idTypeOptionPassportFormat
            
        }
    
        step1(STEP1SELECTORS, GENERALSELECTORS, options);
        step2(STEP2SELECTORS, GENERALSELECTORS, options2);
        step3(STEP3SELECTORS,GENERALSELECTORS,options3);

        const procederAlPaso5 = step4(STEP4SELECTORS, GENERALSELECTORS, options4);

        if (procederAlPaso5) {
            const options5 = {
                extranjero:true
            };
            step5(STEP5SELECTORS, GENERALSELECTORS, options5);
        } else{
            cy.get(GENERALSELECTORS.continueButton).click();
        }
        
        const options6={
            channel:STEP6SELECTORS.cashOption //   transferOption chequeOption',
            
        }

        step6(STEP6SELECTORS,GENERALSELECTORS,options6);
    });

});