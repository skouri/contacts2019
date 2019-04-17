describe("Contact Add", () => {
    beforeEach(() => {
      cy.visit("/");
    });
  
    it("allows a contact to be added", () => {
      cy.get("span.badge").contains("5");
      cy.get("input[placeholder=Name]").type("user X");
      cy.get("input[placeholder=Address]").type("22 main street");
      cy.get('input[placeholder="Phone No."]').type("055 123456");
      cy.get("button")
        .contains("Add Contact")
        .click();
      cy.get("span.badge").contains("6");
    });
  });