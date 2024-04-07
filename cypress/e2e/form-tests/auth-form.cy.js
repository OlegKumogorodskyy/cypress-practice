/// <reference types="cypress" />
describe("HomeWork tests", () => {
  it("First test", () => {
    cy.visit("https://the-internet.herokuapp.com/login");
    cy.get("input#username").type("tomsmith");
    cy.get("input#password").type("WrongPassword");
    cy.get('button[type="submit"]').click();
    cy.get("div#flash.flash.error").should(
      "have.text",
      "\n            Your password is invalid!\n            ×\n          "
    );
  });

  it("Second test", () => {
    cy.visit("https://the-internet.herokuapp.com/login");
    cy.get("input#username").type("incorrectUser");
    cy.get("input#password").type("SuperSecretPassword!");
    cy.get('button[type="submit"]').click();
    cy.get("div#flash.flash.error").should(
      "have.text",
      "\n            Your username is invalid!\n            ×\n          "
    );
  });

  it("Third test", () => {
    cy.visit("https://qauto.forstudy.space", {
      auth: {
        username: "guest",
        password: "welcome2qauto",
      },
      // failOnStatusCode: false
    });
    cy.contains("Sign In").click();

    cy.get("input#signinEmail").type("testgmail.com");
    cy.get("input#signinPassword").type("password");
    cy.get("div.invalid-feedback").should("have.text", "Email is incorrect");
  });
});
