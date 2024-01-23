
describe('Callout Component', () => {
    
    context('Information Callout', () => {
        it('Validate Information Callout CSS', () => {
            cy.visit("http://localhost:4200/callout");
            cy.get('[data-cy="InformationCallout"]').should("be.visible");
            cy.get('[data-cy="InformationCallout"]').should('have.attr', 'type', 'information');

            cy.get('[data-cy="InformationCallout"]').shadow().find('div').find('span').eq(0).should('have.class','icon information')
            cy.get('[data-cy="InformationCallout"]').shadow().find('div').find('span').eq(1).should('have.class','content')
        })
        
        it('Large Callout Size', () => {
            cy.visit("http://localhost:4200/callout");
            cy.get('[data-cy="InformationCallout"]').should("be.visible");
            cy.get('[data-cy="InformationCallout"]').should('have.attr', 'type', 'information');
            cy.get('[data-cy="InformationCallout"]').shadow().find('div').should('have.class', 'notification')
        })
        it('Medium Callout Size', () => {
            cy.visit("http://localhost:4200/callout");
            cy.get('[data-cy="InformationMediumCallout"]').should("be.visible");
            cy.get('[data-cy="InformationMediumCallout"]').should('have.attr', 'type', 'information');
            cy.get('[data-cy="InformationMediumCallout"]').shadow().find('div').should('have.class', 'notification medium')
        })
    })

    context('Emergency Callout', () => {
        it('Validate Emergency Callout CSS', () => {
            cy.visit("http://localhost:4200/callout");
            cy.get('[data-cy="EmergencyCallout"]').should("be.visible");
            cy.get('[data-cy="EmergencyCallout"]').should('have.attr', 'type', 'emergency');

            cy.get('[data-cy="EmergencyCallout"]').shadow().find('div').find('span').eq(0).should('have.class','icon emergency')
            cy.get('[data-cy="EmergencyCallout"]').shadow().find('div').find('span').eq(1).should('have.class','content')
        })
        
        it('Large Callout Size', () => {
            cy.visit("http://localhost:4200/callout");
            cy.get('[data-cy="EmergencyCallout"]').should("be.visible");
            cy.get('[data-cy="EmergencyCallout"]').should('have.attr', 'type', 'emergency');
            cy.get('[data-cy="EmergencyCallout"]').shadow().find('div').should('have.class', 'notification')
        })
        it('Medium Callout Size', () => {
            cy.visit("http://localhost:4200/callout");
            cy.get('[data-cy="EmergencyMediumCallout"]').should("be.visible");
            cy.get('[data-cy="EmergencyMediumCallout"]').should('have.attr', 'type', 'emergency');
            cy.get('[data-cy="EmergencyMediumCallout"]').shadow().find('div').should('have.class', 'notification medium')
        })
    })

    context('Important Callout', () => {
        it('Validate Important Callout CSS', () => {
            cy.visit("http://localhost:4200/callout");
            cy.get('[data-cy="ImportantCallout"]').should("be.visible");
            cy.get('[data-cy="ImportantCallout"]').should('have.attr', 'type', 'important');

            cy.get('[data-cy="ImportantCallout"]').shadow().find('div').find('span').eq(0).should('have.class','icon important')
            cy.get('[data-cy="ImportantCallout"]').shadow().find('div').find('span').eq(1).should('have.class','content')
        })
        
        it('Large Callout Size', () => {
            cy.visit("http://localhost:4200/callout");
            cy.get('[data-cy="ImportantCallout"]').should("be.visible");
            cy.get('[data-cy="ImportantCallout"]').should('have.attr', 'type', 'important');
            cy.get('[data-cy="ImportantCallout"]').shadow().find('div').should('have.class', 'notification')
        })
        it('Medium Callout Size', () => {
            cy.visit("http://localhost:4200/callout");
            cy.get('[data-cy="ImportantMediumCallout"]').should("be.visible");
            cy.get('[data-cy="ImportantMediumCallout"]').should('have.attr', 'type', 'important');
            cy.get('[data-cy="ImportantMediumCallout"]').shadow().find('div').should('have.class', 'notification medium')
        })
    })

    context('Success Callout', () => {
        it('Validate Success Callout CSS', () => {
            cy.visit("http://localhost:4200/callout");
            cy.get('[data-cy="SuccessCallout"]').should("be.visible");
            cy.get('[data-cy="SuccessCallout"]').should('have.attr', 'type', 'success');

            cy.get('[data-cy="SuccessCallout"]').shadow().find('div').find('span').eq(0).should('have.class','icon success')
            cy.get('[data-cy="SuccessCallout"]').shadow().find('div').find('span').eq(1).should('have.class','content')
        })
        
        it('Large Callout Size', () => {
            cy.visit("http://localhost:4200/callout");
            cy.get('[data-cy="SuccessCallout"]').should("be.visible");
            cy.get('[data-cy="SuccessCallout"]').should('have.attr', 'type', 'success');
            cy.get('[data-cy="SuccessCallout"]').shadow().find('div').should('have.class', 'notification')
        })
        it('Medium Callout Size', () => {
            cy.visit("http://localhost:4200/callout");
            cy.get('[data-cy="SuccessMediumCallout"]').should("be.visible");
            cy.get('[data-cy="SuccessMediumCallout"]').should('have.attr', 'type', 'success');
            cy.get('[data-cy="SuccessMediumCallout"]').shadow().find('div').should('have.class', 'notification medium')
        })
    })

    context('Events Callout', () => {
        it('Validate Events Callout CSS', () => {
            cy.visit("http://localhost:4200/callout");
            cy.get('[data-cy="EventsCallout"]').should("be.visible");
            cy.get('[data-cy="EventsCallout"]').should('have.attr', 'type', 'event');

            cy.get('[data-cy="EventsCallout"]').shadow().find('div').find('span').eq(0).should('have.class','icon event')
            cy.get('[data-cy="EventsCallout"]').shadow().find('div').find('span').eq(1).should('have.class','content')
        })
        
        it('Large Callout Size', () => {
            cy.visit("http://localhost:4200/callout");
            cy.get('[data-cy="EventsCallout"]').should("be.visible");
            cy.get('[data-cy="EventsCallout"]').should('have.attr', 'type', 'event');
            cy.get('[data-cy="EventsCallout"]').shadow().find('div').should('have.class', 'notification')
        })
        it('Medium Callout Size', () => {
            cy.visit("http://localhost:4200/callout");
            cy.get('[data-cy="EventsMediumCallout"]').should("be.visible");
            cy.get('[data-cy="EventsMediumCallout"]').should('have.attr', 'type', 'event');
            cy.get('[data-cy="EventsMediumCallout"]').shadow().find('div').should('have.class', 'notification medium')
        })
    })
})

