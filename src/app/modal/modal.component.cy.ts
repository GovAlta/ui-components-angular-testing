

describe('Modal Component', () => {
    
    it('Scrolling Page after closing Modal', () => {
    cy.visit("http://localhost:4200/modal");
    cy.get("[data-cy='InformationCallout']").should("be.visible");

    let initialScrollPosition: any;
    cy.window().then((win) => {
      initialScrollPosition = win.scrollY;
    });

    cy.get("[data-cy='InformationCallout']").shadow().find("button").click({force: true});
    cy.wait(1000);
    cy.get("[data-cy='ModalCloseSecondaryButton']").shadow().find("button").click({force: true});
    cy.wait(1000);
    cy.window().scrollTo('bottom');

    cy.window().should((win) => {
      expect(win.scrollY).to.be.greaterThan(initialScrollPosition);
    });


  })


})