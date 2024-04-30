const STEP1SELECTORS={
    Curp: '#generalData\\.curp',
    RFC: '#generalData\\.rfc',
    AP: '#generalData\\.first_last_name',
    AM: '#generalData\\.second_last_name',
    Name: '#generalData\\.name',
    GenderInput: '#generalData\\.gender_id',
    GenderM: '[aria-label="Masculino"]', 
    GenderF: '[aria-label="Femenino"]', 
    GenderO: '[aria-label="Otro"]', 

    birthDate: '#generalData\\.birth_date',
    datePickerYear: '.p-datepicker-year',
    yearPickerFirstYear: '.p-yearpicker > :nth-child(1)',
    monthPickerFirstMonth: '.p-monthpicker > :nth-child(1)',
    firstDayOfFirstWeek: 'tbody > :nth-child(1) > :nth-child(4) > span',
    nationality: '#generalData\\.nationality',
    countryBorn: '#generalData\\.country_born',
    countryNationality: '#generalData\\.country_nationality',
    maritalStatus:'#generalData\\.marital_status',
    casado:'[aria-label="Casado"]', 
    soltero:'[aria-label="Soltero"]', 
    dependientes: '#generalData\\.economic_dependents',
    idFile: '#generalData_id_file',
    addressFile: '#generalData_address_file',
    cedulaFile: '#generalData_tax_id_file',
    company: '#generalData\\.company_name',
    activity: '#generalData\\.activity',
    position:'#generalData\\.position',
    celllPhone:'#generalData\\.cell_phone',
    homePhone: '#generalData\\.home_phone',
    email:'#generalData\\.email',
    idType:'#generalData\\.id_type_authority',
    idMigratori: '[aria-label="Formato migratorio"]',
    idINE: '[aria-label="INE"]', //INE,PAASAPORTE
    idPassport: '[aria-label="Pasaporte"]', //INE,PAASAPORTE
    passportNumber: '#generalData\\.passport_number',
    idNumber: '#generalData\\.id_number',
}

const STEP2SELECTORS ={
    street: '#homeAddress\\.street',
    exteriorNum: '#homeAddress\\.exterior_num',
    innerNum: '#homeAddress\\.inner_num',
    colony: '#homeAddress\\.colony',
    municipality: '#homeAddress\\.municipality',
    zipCode: '#homeAddress\\.zip_code',
    city: '#homeAddress\\.city',
    federalEntity: '#homeAddress\\.federal_entity',
    country: '#homeAddress\\.country',
    siRadio: ':nth-child(1) > .p-radiobutton > .p-radiobutton-box',
    noRadio: ':nth-child(2) > .p-radiobutton > .p-radiobutton-box',
    foreignStreet: '#homeAddress\\.foreignAddress\\.street',
    foreignExteriorNum: '#homeAddress\\.foreignAddress\\.exterior_num',
    foreignInnerNum: '#homeAddress\\.foreignAddress\\.inner_num',
    foreignColony: '#homeAddress\\.foreignAddress\\.colony',
    foreignMunicipality: '#homeAddress\\.foreignAddress\\.municipality',
    foreignZipCode: '#homeAddress\\.foreignAddress\\.zip_code',
    foreignCity: '#homeAddress\\.foreignAddress\\.city',
    foreignFederalEntity: '#homeAddress\\.foreignAddress\\.federal_entity',
    foreignCountry: '#homeAddress\\.foreignAddress\\.country'
}

const STEP3SELECTORS = {
    acceptFirstDeclaration: '#yes', 
    nameInput: '#declarations\\.name',
    positionInput: '#declarations\\.position',
    periodDropdown: '#declarations\\.period',
    periodOption: ':nth-child(3) > :nth-child(2) > span', 
    todayButton: '.p-datepicker-today > span', 
    //es otro boton de is, pero no acepta
    familyDeclaration: ':nth-child(3) > .complete > .form-radiobutton-section > :nth-child(1) > .p-radiobutton > .p-radiobutton-box', 
    familyMemberNameInput: '#declarations\\.familyMember\\.name',
    familyMemberPositionInput: '#declarations\\.familyMember\\.position',
    familyMemberPeriodDropdown: '#declarations\\.familyMember\\.period',
    familyMemberStartPeriodOption: ':nth-child(4) > :nth-child(2) > span', 
    familyMemberEndPeriodOption: ':nth-child(4) > :nth-child(6) > span', 

    acceptSwornDeclarationCheckbox: '#yesSwornDeclaration', 
    acceptLegalActivityDiv: 'div#declarations\\.accept_legal_activity' 
}

const STEP4SELECTORS = {
    acceptYes: '#yes', 
    curpInput: '#beneficialOwnerIdentification\\.curp',
    rfcInput: '#beneficialOwnerIdentification\\.rfc',
    nameInput: '#beneficialOwnerIdentification\\.name',
    genderDropdown: '#beneficialOwnerIdentification\\.gender_id',
    genderOptionMale: '[aria-label="Masculino"]', 
    genderOptionFemale: '[aria-label="Femenino"]',
    genderOptionOther: '[aria-label="Otro"]',
    birthDateInput: '#beneficialOwnerIdentification\\.birth_date > .p-inputtext',
    todayButton: '.p-datepicker-today > span',
    nationalityInput: '#beneficialOwnerIdentification\\.nationality',
    countryBornInput: '#beneficialOwnerIdentification\\.country_born',
    countryNationalityInput: '#beneficialOwnerIdentification\\.country_nationality',
    companyNameInput: '#beneficialOwnerIdentification\\.company_name',
    activityInput: '#beneficialOwnerIdentification\\.activity',
    positionInput: '#beneficialOwnerIdentification\\.position',
    cellPhoneInput: '#beneficialOwnerIdentification\\.cell_phone',
    homePhoneInput: '#beneficialOwnerIdentification\\.home_phone',
    emailInput: '#beneficialOwnerIdentification\\.email',
    idTypeDropdown: '#beneficialOwnerIdentification\\.id_type_authority',
    idTypeOptionMigrationFormat: '[aria-label="Formato migratorio"]', 
    idTypeOptionINEFormat: '[aria-label="INE"]', 
    idTypeOptionPassportFormat: '[aria-label="Pasaporte"]', 

    passportNumberInput: '#beneficialOwnerIdentification\\.passport_number',
    idNumberInput: '#beneficialOwnerIdentification\\.id_number'
};
const STEP5SELECTORS = {
    zipCode: '#beneficialOwnerAddress\\.zip_code',
    colony: '#beneficialOwnerAddress\\.colony',
    municipality: '#beneficialOwnerAddress\\.municipality',
    city: '#beneficialOwnerAddress\\.city',
    federalEntity: '#beneficialOwnerAddress\\.federal_entity',
    street: '#beneficialOwnerAddress\\.street',
    innerNum: '#beneficialOwnerAddress\\.inner_num',
    exteriorNum: '#beneficialOwnerAddress\\.exterior_num',
    country: '#beneficialOwnerAddress\\.country',
    hasCheckbox: '#has',
    foreignZipCode: '#beneficialOwnerAddress\\.foreignAddress\\.zip_code',
    foreignColony: '#beneficialOwnerAddress\\.foreignAddress\\.colony',
    foreignMunicipality: '#beneficialOwnerAddress\\.foreignAddress\\.municipality',
    foreignCity: '#beneficialOwnerAddress\\.foreignAddress\\.city',
    foreignFederalEntity: '#beneficialOwnerAddress\\.foreignAddress\\.federal_entity',
    foreignStreet: '#beneficialOwnerAddress\\.foreignAddress\\.street',
    foreignInnerNum: '#beneficialOwnerAddress\\.foreignAddress\\.inner_num',
    foreignExteriorNum: '#beneficialOwnerAddress\\.foreignAddress\\.exterior_num',
    foreignCountry: '#beneficialOwnerAddress\\.foreignAddress\\.country'
};
const STEP6SELECTORS = {
    channelDropdown: '#transmissionChannels\\.channel > .p-dropdown-label',
    transferOption: '[aria-label="Transferencia"]',
    cashOption: '[aria-label="Efectivo"]',
    chequeOption: '[aria-label="Cheque"]',

    amountPaidOtherMethodInput: '#transmissionChannels\\.amount_paid_other_method',
    cashAmountInput: '#transmissionChannels\\.cash_amount', 
    signatureFileInput: '#signature_file',
    consultantNameDropdown: '#transmissionChannels\\.consultant\\.name',
    consultantNameOption: '[aria-label="Pedro"]', // Adapt for dynamic names if necessary
    signatureButton: '.input-button-signature > .p-button-label',
    signatureCanvas: '.signature-canvas',
    acceptButton: 'button[aria-label="Aceptar"]',
    consultantDateInput: '#transmissionChannels\\.consultant\\.date',
    todayButton: '.p-datepicker-today > span'
};


const GENERALSELECTORS={
    addUserButton: "Agregar cliente",
    fisicPerson: "#legal-person",
    moralPerson: "legal-entities",
    acceptButton: 'button[name="accept"]',
    continueButton: 'button[name="finish"]',

}

export{ GENERALSELECTORS,STEP1SELECTORS,STEP2SELECTORS,STEP3SELECTORS,STEP4SELECTORS,STEP5SELECTORS,STEP6SELECTORS}