/// <reference types="cypress" />
describe("Checkbox Tests", () => {
  beforeEach(() => {
    cy.visit("https://the-internet.herokuapp.com/checkboxes");
  });

  it("Ensure checkbox 2 is checked by default, then uncheck it and verify both are unchecked", () => {
    cy.get('input[type="checkbox"]').eq(1).should("be.checked");
    cy.get('input[type="checkbox"]').eq(1).click().should("not.be.checked");
    cy.get('input[type="checkbox"]').should("not.be.checked");
  });

  it("Check checkbox 1 and verify both ara checked", () => {
    cy.get('input[type="checkbox"]').first().click().should("be.checked");
    cy.get('input[type="checkbox"]').eq(1).should("be.checked");
    cy.get('input[type="checkbox"]').should("be.checked");
  });
});
