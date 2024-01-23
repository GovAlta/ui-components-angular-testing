

describe('Tabs Component', () => {
    
    it('Tabs containing dropdown', () => {

        cy.visit("http://localhost:4200/tabs");
        cy.get("[data-cy='TabsSelector']").should("be.visible");

        cy.get("[data-cy='TabsSelector']").shadow().find("#tab-1").should("be.visible");

        cy.get("[data-cy='TabsSelector']").shadow().find("#tab-1").invoke('attr', 'aria-selected')
                                        .then((tabValue) => {
                                            // if value is true, it's inside Tab-1
                                            if(tabValue === 'true'){
                                                // Dropdown Activity 
                                                cy.get('goa-tab[open="true"]').should('be.visible');
                                                cy.get('goa-tab[open="true"]').find("[data-cy='CountrydropdownSelector']").shadow().
                                                        find('[data-testid="option-list"]').find('.dropdown-input-group input').focus().pressDownArrow(2);
                                            }else{
                                                // test Fails Intentionally as Tab-1 only contains dropdown
                                                assert.equal('true', tabValue);
                                            }
                                        });
    });
  })