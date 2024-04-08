/// <reference types="cypress" />

describe("Social Links Verification", () => {
  it("Facebook link should have the correct href", () => {
    cy.visit("https://qauto.forstudy.space", {
      auth: {
        username: "guest",
        password: "welcome2qauto",
      },
    });

    cy.get("a.socials_link")
      .eq(0)
      .invoke("attr", "href")
      .should("contain", "facebook.com");
  });

  it("Telegram link should have the correct href", () => {
    cy.visit("https://qauto.forstudy.space", {
      auth: {
        username: "guest",
        password: "welcome2qauto",
      },
    });

    cy.get("a.socials_link")
      .eq(1)
      .invoke("attr", "href")
      .should("contain", "t.me");
  });

  it("Youtube link should have the correct href", () => {
    cy.visit("https://qauto.forstudy.space", {
      auth: {
        username: "guest",
        password: "welcome2qauto",
      },
    });

    cy.get("a.socials_link")
      .eq(2)
      .invoke("attr", "href")
      .should("contain", "youtube.com");
  });

  it("Instagram link should have the correct href", () => {
    cy.visit("https://qauto.forstudy.space", {
      auth: {
        username: "guest",
        password: "welcome2qauto",
      },
    });

    cy.get("a.socials_link")
      .eq(3)
      .invoke("attr", "href")
      .should("contain", "instagram.com");
  });

  it("LinkedIn link should have the correct href", () => {
    cy.visit("https://qauto.forstudy.space", {
      auth: {
        username: "guest",
        password: "welcome2qauto",
      },
    });

    cy.get("a.socials_link")
      .eq(4)
      .invoke("attr", "href")
      .should("contain", "linkedin.com");
  });

  it('Clicking on "Sign In" button opens the login form', () => {
    cy.visit("https://qauto.forstudy.space", {
      auth: {
        username: "guest",
        password: "welcome2qauto",
      },
    });

    cy.contains("Sign In").click();
    cy.get(".modal-title").should("be.visible");  
    //Searches for the "Log in" title on the opening login form 
  });

  it('Clicking on "Sign Up" button opens the registration form', () => {
    cy.visit("https://qauto.forstudy.space", {
      auth: {
        username: "guest",
        password: "welcome2qauto",
      },
    });

    cy.contains("Sign up").click();
    cy.get(".modal-title").should("be.visible");  
    //Searches for the "Registration" title on the opening registration form
  });
});
