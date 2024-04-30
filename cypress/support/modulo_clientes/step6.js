


export function step6(STEP6SELECTORS, GENERALSELECTORS, options) {
    cy.get(STEP6SELECTORS.channelDropdown).click();
    if (options.channel === STEP6SELECTORS.cashOption) {
        cy.get(STEP6SELECTORS.cashOption).click();
        cy.get(STEP6SELECTORS.cashAmountInput).clear().type('$1,230.00');
    } else {
        cy.get(options.channel).click();
        cy.get(STEP6SELECTORS.amountPaidOtherMethodInput).clear().type('$1,230.00');
    }

    cy.get(STEP6SELECTORS.signatureFileInput).attachFile('doc.pdf');
    cy.get(STEP6SELECTORS.consultantNameDropdown).click();
    cy.get(STEP6SELECTORS.consultantNameOption).click();
    cy.get(STEP6SELECTORS.signatureButton).click();
    cy.get(STEP6SELECTORS.signatureCanvas).click();
    cy.get(STEP6SELECTORS.acceptButton).click();
    cy.get(STEP6SELECTORS.consultantDateInput).click();
    cy.get(STEP6SELECTORS.todayButton).click();

    cy.get(GENERALSELECTORS.continueButton).click();
}


