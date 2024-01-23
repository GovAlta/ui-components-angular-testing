
describe('Button Group Component', () => {
    
    context('Gap', () => {
        it('Primary Button Gap', () => {
            cy.visit("http://localhost:4200/button-group");
            cy.get('[data-cy="primaryCompactButton"]').should("be.visible");
            cy.get('[data-cy="primaryCompactButton"]').should('have.attr', 'type', 'primary');
            cy.get('[data-cy="primaryCompactButton"]').shadow().find('button').should('have.class','compact')
        })

        it('Submit Button Gap', () => {
            cy.visit("http://localhost:4200/button-group");
            cy.get('[data-cy="submitCompactButton"]').should("be.visible");
            cy.get('[data-cy="submitCompactButton"]').should('have.attr', 'type', 'submit');
            cy.get('[data-cy="submitCompactButton"]').shadow().find('button').should('have.class','compact')
        })

        it('Secondary Button Gap', () => {
            cy.visit("http://localhost:4200/button-group");
            cy.get('[data-cy="secondaryCompactButton"]').should("be.visible");
            cy.get('[data-cy="secondaryCompactButton"]').should('have.attr', 'type', 'secondary');
            cy.get('[data-cy="secondaryCompactButton"]').shadow().find('button').should('have.class','compact')
        })
    })

    // Alignment Validation

})
