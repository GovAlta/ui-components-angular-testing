// import {  } from '@abgov/angular-components';


describe('Accordion Component', () => {
  it('user can expands the accordion', () => {
    cy.visit("http://localhost:4200/accordion");
    cy.get("[data-cy='headingAccordion']").should("be.visible");
    cy.get("[data-cy='headingAccordion']").click();
    cy.get("[data-cy='headingAccordion']").then(($pTag) => {
      const content = $pTag.text().trim();
      console.log("Content Variable: "+content);
      const expectedContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tempora optio illum iste consectetur harum vel voluptatem eos quos deleniti, sequi sapiente porro culpa repellendus eligendi in architecto natus omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, nam corporis. Omnis tempora non aspernatur nostrum pariatur quibusdam magni eum vitae similique, laboriosam reiciendis repellat sapiente. Nobis laudantium facilis incidunt!`;
      expect(content).to.contain(expectedContent.trim());
    });
  })

  it('user can collapsed the accordion', () => {
    cy.visit("http://localhost:4200/accordion");
    cy.get("[data-cy='secondaryAccordion']").should("be.visible");
    cy.get("[data-cy='secondaryAccordion']").shadow().find(".container-small").click();
    cy.get("[data-cy='secondaryAccordion']").shadow().find(".container-small").click();
    cy.get("[data-cy='secondaryAccordion']").shadow().find("details").should('not.have.attr', 'open');
  })

  it('Accordions stays open on page load', () => {
    cy.visit("http://localhost:4200/accordion");
    cy.get("[data-cy='defaultOpenAccordion']").should("be.visible");
    cy.get("[data-cy='defaultOpenAccordion']").shadow().find("details").should('have.attr', 'open');
  })

  it('Accordions Heading size Medium', () => {
    cy.visit("http://localhost:4200/accordion");
    cy.get("[data-cy='defaultOpenAccordion']").should("be.visible");
    cy.get("[data-cy='defaultOpenAccordion']").shadow().find("span").should('have.class', 'heading-medium');
  })

  it('Accordions Heading size Small', () => {
    cy.visit("http://localhost:4200/accordion");
    cy.get("[data-cy='secondaryAccordion']").should("be.visible");
    cy.get("[data-cy='secondaryAccordion']").shadow().find("span").should('have.class', 'heading-small');
  })

    it('Accordions Badges', () => {
      cy.visit("http://localhost:4200/accordion");
      cy.get("[data-cy='defaultOpenAccordion']").should("be.visible");
      cy.get('[data-cy="defaultOpenAccordion"] goa-badge[type="success"]').should('exist');
    })

// it('user can expands the accordion', () => {
//     cy.visit("http://localhost:4200/accordion");
//     cy.get("[data-cy='OpenAccordion']").should("be.visible");
//     // cy.get("[data-cy='OpenAccordion']").click();
//   })

})