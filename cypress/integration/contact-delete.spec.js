describe("Contact Delete", () => {
    beforeEach(() => {
      cy.visit("/");
    });
  
    it("allows a contact to be deleted", () => {
      cy.get("div.panel-body").should("have.length", 5);
      cy.get(":nth-child(2) > .panel")
        .find(".panel-footer")
        .find("button")
        .contains("Delete")
        .click();
      cy.get(":nth-child(2) > .panel")
        .find(".panel-footer")
        .find("button")
        .contains("Confirm")
        .click();
      cy.get("div.panel-body").should("have.length", 4);
    });
  
    it("allows a delete operation to be cancelled", () => {
      cy.get("div.panel-body").should("have.length", 5);
      cy.get(":nth-child(2) > .panel")
        .find(".panel-footer")
        .find("button")
        .contains("Delete")
        .click();
      cy.get(":nth-child(2) > .panel")
        .find(".panel-footer")
        .find("button")
        .contains("Undo")
        .click();
        cy.get("div.panel-body").should("have.length", 5);
    });
  });