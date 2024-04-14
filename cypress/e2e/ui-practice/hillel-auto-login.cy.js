/// <reference types="cypress" />

describe("fixtures", () => {
  let userData;

  beforeEach(() => {
    cy.fixture("credentials.json").then((data) => {
      userData = data;
    });
  });

  it("Should log in successfully and verify redirection to the Garage page", () => {
    cy.visit("https://qauto.forstudy.space", {
      auth: {
        username: "guest",
        password: "welcome2qauto",
      },
    });

    cy.fixture("credentials.json").then((userData) => {
      cy.get("button").contains("Sign In").click();
      cy.get("input#signinEmail").type(userData.username);
      cy.get("input#signinPassword").type(userData.password);
      cy.get("button").contains("Login").click();
      cy.contains("h1", "Garage").should("be.visible");
    });
  });
});
