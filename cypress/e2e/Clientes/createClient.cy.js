import 'cypress-file-upload';
import { GENERALSELECTORS, STEP1SELECTORS, STEP2SELECTORS, STEP3SELECTORS,STEP4SELECTORS,STEP5SELECTORS,STEP6SELECTORS} from '../../constants/clientSelectors';

describe('Modulo cliente - Creacion', () => {

    beforeEach(() => {
        cy.login();
        cy.contains('li', 'Clientes').click()
        cy.contains(GENERALSELECTORS.addUserButton).click();
        cy.get(GENERALSELECTORS.fisicPerson).click({ force: true });
        cy.get(GENERALSELECTORS.acceptButton).click();
    });

    const step1 = () => {
        cy.get(STEP1SELECTORS.Curp).clear().type('VALJ991024HSRRZN02');
        cy.get(STEP1SELECTORS.RFC).clear().type('VALJ991024A98');
        cy.get(STEP1SELECTORS.AP).clear().type('Juan');
        cy.get(STEP1SELECTORS.AM).clear().type('Juan');
        cy.get(STEP1SELECTORS.Name).clear().type('Juan');
        cy.get(STEP1SELECTORS.GenderInput).click();
        cy.get(STEP1SELECTORS.GenderM).click();
        cy.get(STEP1SELECTORS.birthDate).click();
        cy.get(STEP1SELECTORS.datePickerYear).click();
        cy.get(STEP1SELECTORS.yearPickerFirstYear).click();
        cy.get(STEP1SELECTORS.monthPickerFirstMonth).click();
        cy.get(STEP1SELECTORS.firstDayOfFirstWeek).click();
        cy.get(STEP1SELECTORS.nationality).type('mexicano');
        cy.get(STEP1SELECTORS.countryNationality).type('mexico');
        cy.get(STEP1SELECTORS.countryBorn).type('mexico');
        cy.get(STEP1SELECTORS.maritalStatus).click();
        cy.get(STEP1SELECTORS.casado).click();
        cy.get(STEP1SELECTORS.dependientes).type('12');
        cy.get(STEP1SELECTORS.idFile).attachFile('doc.pdf');
        cy.get(STEP1SELECTORS.addressFile).attachFile('doc.pdf');
        cy.get(STEP1SELECTORS.cedulaFile).attachFile('doc.pdf');
        cy.get(STEP1SELECTORS.company).type('Satoritech');
        cy.get(STEP1SELECTORS.activity).type('Development');
        cy.get(STEP1SELECTORS.position).type('Development');
        cy.get(STEP1SELECTORS.celllPhone).type('6621811782');
        cy.get(STEP1SELECTORS.homePhone).type('6621890292');
        cy.get(STEP1SELECTORS.email).type('test@yopmail.com');
        cy.get(STEP1SELECTORS.idType).click();
        cy.get(STEP1SELECTORS.idMigratori).click();  //INE,PASSAPORTE
        cy.get(STEP1SELECTORS.idNumber).type('1234');
        cy.get(STEP1SELECTORS.passportNumber).type('5678'); // si se eleigio ine o pasaporte, no existe

        cy.get(GENERALSELECTORS.continueButton).click();
    };


    const step2 = () => {
        cy.get(STEP2SELECTORS.street).clear().type('calle');
        cy.get(STEP2SELECTORS.exteriorNum).clear().type('12');
        cy.get(STEP2SELECTORS.innerNum).clear().type('12');
        cy.get(STEP2SELECTORS.colony).clear().type('col');
        cy.get(STEP2SELECTORS.municipality).clear().type('mun');
        cy.get(STEP2SELECTORS.zipCode).clear().type('83105');
        cy.get(STEP2SELECTORS.city).clear().type('ciudad');
        cy.get(STEP2SELECTORS.federalEntity).clear().type('entidad');
        cy.get(STEP2SELECTORS.country).clear().type('pais');

        cy.get(STEP2SELECTORS.siRadio).click(); //es para darle si y llenar mas campos, comentar y no se llena lo de abajo
        cy.get(STEP2SELECTORS.foreignStreet).type('calle');
        cy.get(STEP2SELECTORS.foreignExteriorNum).type('12');
        cy.get(STEP2SELECTORS.foreignInnerNum).type('12');
        cy.get(STEP2SELECTORS.foreignColony).type('colonia');
        cy.get(STEP2SELECTORS.foreignMunicipality).type('municipio');
        cy.get(STEP2SELECTORS.foreignZipCode).type('83102');
        cy.get(STEP2SELECTORS.foreignCity).type('ciudad');
        cy.get(STEP2SELECTORS.foreignFederalEntity).type('entidad');
        cy.get(STEP2SELECTORS.foreignCountry).type('pais');

        cy.get(GENERALSELECTORS.continueButton).click();
    }

    const step3 = () => {
        //checbox uno
        cy.get(STEP3SELECTORS.acceptFirstDeclaration).click({ force: true });
        cy.get(STEP3SELECTORS.nameInput).type('a');
        cy.get(STEP3SELECTORS.positionInput).type('a');
        cy.get(STEP3SELECTORS.periodDropdown).click();
        cy.get(STEP3SELECTORS.periodOption).click();
        cy.get(STEP3SELECTORS.todayButton).click();
        //cheboxdos
        cy.get(STEP3SELECTORS.familyDeclaration).click();
        cy.get(STEP3SELECTORS.familyMemberNameInput).type('a');
        cy.get(STEP3SELECTORS.familyMemberPositionInput).type('w');
        cy.get(STEP3SELECTORS.familyMemberPeriodDropdown).click();
        cy.get(STEP3SELECTORS.familyMemberStartPeriodOption).click();
        cy.get(STEP3SELECTORS.familyMemberEndPeriodOption).click();
        //estos si son requerridos
        cy.get(STEP3SELECTORS.acceptSwornDeclarationCheckbox).click({ force: true });
        cy.get(STEP3SELECTORS.acceptLegalActivityDiv).click();

        cy.get(GENERALSELECTORS.continueButton).click();
    };

    const step4 = () => {
        cy.get(STEP4SELECTORS.acceptYes).click({force:true});
        cy.get(STEP4SELECTORS.curpInput).type('curp12121212121212');
        cy.get(STEP4SELECTORS.rfcInput).type('valj991024a98');
        cy.get(STEP4SELECTORS.nameInput).type('otronombre');
        cy.get(STEP4SELECTORS.genderDropdown).click();
        cy.get(STEP4SELECTORS.genderOptionMale).click(); 
    
        cy.get(STEP4SELECTORS.birthDateInput).click();
        cy.get(STEP4SELECTORS.todayButton).click();
        cy.get(STEP4SELECTORS.nationalityInput).type('mexico');
        cy.get(STEP4SELECTORS.countryBornInput).type('mexico');
        cy.get(STEP4SELECTORS.countryNationalityInput).type('mexico');
    
        cy.get(STEP4SELECTORS.companyNameInput).type('empresa');
        cy.get(STEP4SELECTORS.activityInput).type('giro');
        cy.get(STEP4SELECTORS.positionInput).type('cargo');
        cy.get(STEP4SELECTORS.cellPhoneInput).type('6678787898');
        
        cy.get(STEP4SELECTORS.homePhoneInput).type('8989898989');
        cy.get(STEP4SELECTORS.emailInput).type('otro@hotmail.com');
        cy.get(STEP4SELECTORS.idTypeDropdown).click();
        cy.get(STEP4SELECTORS.idTypeOptionMigrationFormat).click(); // y otros selectores para INE y PASAPORTE según sea necesario
        cy.get(STEP4SELECTORS.passportNumberInput).type('12'); // Solo si se escogió el formato migratorio y no pasaporte o INE
        cy.get(STEP4SELECTORS.idNumberInput).type('12');

        cy.get(GENERALSELECTORS.continueButton).click();
    };
    
    const step5 = () => {
        cy.get(STEP5SELECTORS.zipCode).type('89892');
        cy.get(STEP5SELECTORS.colony).type('col');
        cy.get(STEP5SELECTORS.municipality).type('mun');
        cy.get(STEP5SELECTORS.city).type('ciudad');
        cy.get(STEP5SELECTORS.federalEntity).type('entidad');
        cy.get(STEP5SELECTORS.street).type('calle');
        cy.get(STEP5SELECTORS.innerNum).type('d-2');
        cy.get(STEP5SELECTORS.exteriorNum).type('d-2');
        cy.get(STEP5SELECTORS.country).type('mexico');
    
        // es checbox, si se quita se quita lo de abajo
        cy.get(STEP5SELECTORS.hasCheckbox).click({force:true});
        cy.get(STEP5SELECTORS.foreignZipCode).type('83941');
        cy.get(STEP5SELECTORS.foreignColony).type('col2');
        cy.get(STEP5SELECTORS.foreignMunicipality).type('mun2');
        cy.get(STEP5SELECTORS.foreignCity).type('ciudad2');
        cy.get(STEP5SELECTORS.foreignFederalEntity).type('entidaddos');
        cy.get(STEP5SELECTORS.foreignStreet).type('calledos');
        cy.get(STEP5SELECTORS.foreignInnerNum).type('23-d');
        cy.get(STEP5SELECTORS.foreignExteriorNum).type('23-d');
        cy.get(STEP5SELECTORS.foreignCountry).type('mex');

        //boton para continuar
        cy.get(GENERALSELECTORS.continueButton).click();
    };
    
    const step6 = () => {
        cy.get(STEP6SELECTORS.channelDropdown).click();
        cy.get(STEP6SELECTORS.transferOption).click(); // Add other options for 'efectivo' and 'cheque' as needed
        cy.get(STEP6SELECTORS.amountPaidOtherMethodInput).clear().type('$1,230.00'); // Use for 'cheque' and 'transferencia'
        // cy.get(STEP6SELECTORS.cashAmountInput).clear().type('$1,230.00'); // Uncomment and use if 'efectivo' is selected
    
        cy.get(STEP6SELECTORS.signatureFileInput).attachFile('doc.pdf');
        cy.get(STEP6SELECTORS.consultantNameDropdown).click();
        cy.get(STEP6SELECTORS.consultantNameOption).click();
        cy.get(STEP6SELECTORS.signatureButton).click();
        cy.get(STEP6SELECTORS.signatureCanvas).click();
        cy.get(STEP6SELECTORS.acceptButton).click();
    
        cy.get(STEP6SELECTORS.consultantDateInput).click();
        cy.get(STEP6SELECTORS.todayButton).click();
    };
    



    it('Crear cliente persona fisica todo los datos del formulario', () => {
        step1();
        step2();
        step3();
        step4();
        step5();
        step6();    
    });

    //variaciones paso 1
    it('Crear cliente persona fisica soltero y sin dependientes',()=>{

    })
    it('Crear cliente persona fisica con ine',()=>{
        
    })

    it('Crear cliente persona fisica con pasaporte',()=>{
        
    })

    it('Crear cliente persona fisica con formato migratorio',()=>{
        
    })

    //paso dos
    it('Crear cliente persona fisica sin domicilio extranjero',()=>{
        
    })

    //paso 3
    it('Crear cliente persona sin declaratorias',()=>{
        
    })

    //paso 4
    it('Crear cliente persona fisica sin beneficiarios',()=>{
        
    })

    it('Crear cliente persona fisica con beneficiario ine',()=>{
        
    })
    it('Crear cliente persona fisica con beneficiario pasaporte',()=>{
        
    })
    it('Crear cliente persona fisica con beneficiario migratorio',()=>{
        
    })

    //paso 5
    it('Crear cliente persona fisica con beneficiario sin extranjero',()=>{
        
    })

    //paso 6
    it('Crear cliente persona fisica trnasferencia',()=>{
        
    })
    it('Crear cliente persona fisica cheque',()=>{
        
    })

    it('Crear cliente persona fisica efectivo',()=>{
        
    })


});