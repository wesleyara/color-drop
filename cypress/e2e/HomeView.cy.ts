/// <reference types="cypress" />

describe("HomeView e2e tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should render the title", () => {
    cy.get("h1").contains("Color Drop");
  });

  it("should render description", () => {
    cy.get("[data-cy=description]").should("exist");
  });

  it("should render file input", () => {
    cy.get("[data-cy=file-input]").should("exist");
  });
});
