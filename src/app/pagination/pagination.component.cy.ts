

describe('Pagination Component', () => {
    
    it('Initail Value for Dropdown in Pagination', () => {

        cy.visit("http://localhost:4200/paginate");
        cy.get("[data-cy='paginationDropdown']").should("be.visible");

        //Verifying Dropdown existence
        cy.get("[data-cy='paginationDropdown']").shadow().find("[data-testid='page-selector']")
                                                .find("goa-dropdown").shadow().find('[data-testid="option-list"]').find('.dropdown-input-group')
                                                .should("exist");

        //Value for dropdown should be 1
        cy.get("[data-cy='paginationDropdown']").shadow().find("[data-testid='page-selector']")
                                                .find("goa-dropdown").shadow().find('[data-testid="option-list"]').find('.dropdown-input-group input')
                                                .invoke('val').should('eq', '1');
                                                
                                                // .then((inputValue) => {
                                                //     console.log("Dropdown Value: ",inputValue);
                                                // });                                     
    
    });
  })