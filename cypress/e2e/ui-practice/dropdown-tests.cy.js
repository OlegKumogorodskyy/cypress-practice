/// <reference types="cypress" />
describe("Dropdown tests", () => {
  beforeEach(() => {
    cy.visit("https://the-internet.herokuapp.com/dropdown");
  });

  it('verifies that the default selected option is "Please select an option"', () => {
    cy.get("select#dropdown").should("have.value", null);
  });

  it('select "Option 2" and verifies that it is selected', () => {
    cy.get("select#dropdown").select("Option 2");
    cy.get("select#dropdown").should("have.value", "2");
  });
});
