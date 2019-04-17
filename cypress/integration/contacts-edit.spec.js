describe("Contact Edit", () => {
    beforeEach(() => {
      cy.visit("/");
    });
  
    it("allows a contact's address be edited", () => {
      cy.get("div.panel-body").should("have.length", 5);
      let button = cy
        .get(":nth-child(2) > .panel")
        .find(".panel-footer")
        .find("button")
        .contains("Edit");
      button.click();
      let address = cy.get(":nth-child(2) > .panel").get("input:nth-child(2)");
      address.clear();
      address.type("22 low Street");
      cy.get(":nth-child(2) > .panel")
        .find(".panel-footer")
        .find("button")
        .contains("Save")
        .click();
      cy.get(":nth-child(2) > .panel")
        .get("p:nth-child(2)")
        .should("contain", "22 low Street");
    });
  
    it("allows a contact's address edit be cancelled", () => {
      cy.get("div.panel-body").should("have.length", 5);
      let button = cy
        .get(":nth-child(2) > .panel")
        .find(".panel-footer")
        .find("button")
        .contains("Edit");
      button.click();
      let address = cy.get(":nth-child(2) > .panel").get("input:nth-child(2)");
      address.clear();
      address.type("22 low Street");
      cy.get(":nth-child(2) > .panel")
        .find(".panel-footer")
        .find("button")
        .contains("Cancel")
        .click();
      cy.get(":nth-child(2) > .panel")
        .get("p:nth-child(2)")
        .should("not.contain", "22 low Street");
    });
  });