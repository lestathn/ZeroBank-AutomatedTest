
    before(() => {
        
        cy.visit('/')
        cy.get("form");
    
        cy.get('input[id="usernameInput"]')
        .type("eldergodoy54")
        .should("have.value", "eldergodoy54");
    
        cy.get('input[id="passwordInput"]')
        .type("password1")
        .should("have.value", "password1");
    
        cy.get('button[type="submit"]').click()
    })

    beforeEach( () => {
        
        Cypress.Cookies.defaults({
            whitelist: 'session_id'
          })
    })
    


    describe('Modify the Data', () => {

        it('create story', () => {
            cy.get("body");
    
            cy.get('button[id="create-story-button"]').click();
            cy.get('input[value="scifi"]').check();
            //hero
            cy.get('#root > div > div > div > div:nth-child(2) > div > div.twelve.wide.column > div > div > div > div > form > div.create-characters > div:nth-child(2) > div.fields > div:nth-child(1) > input[type=text]')
            .type("Anakin")
            .should("have.value","Anakin");        
            cy.get('#root > div > div > div > div:nth-child(2) > div > div.twelve.wide.column > div > div > div > div > form > div.create-characters > div:nth-child(2) > div.fields > div.four.wide.field.genderField > div:nth-child(2) > label > input[type=radio]').check();
            //shadowman
            cy.get('#root > div > div > div > div:nth-child(2) > div > div.twelve.wide.column > div > div > div > div > form > div.create-characters > div:nth-child(3) > div.fields > div:nth-child(1) > input[type=text]')
            .type("Duku")
            .should("have.value","Duku");        
            cy.get('#root > div > div > div > div:nth-child(2) > div > div.twelve.wide.column > div > div > div > div > form > div.create-characters > div:nth-child(3) > div.fields > div.four.wide.field.genderField > div:nth-child(2) > label > input[type=radio]').check();
            //friend
            cy.get('#root > div > div > div > div:nth-child(2) > div > div.twelve.wide.column > div > div > div > div > form > div.create-characters > div:nth-child(4) > div.fields > div:nth-child(1) > input[type=text]')
            .type("R2D2")
            .should("have.value","R2D2");        
            cy.get('#root > div > div > div > div:nth-child(2) > div > div.twelve.wide.column > div > div > div > div > form > div.create-characters > div:nth-child(4) > div.fields > div.four.wide.field.genderField > div:nth-child(2) > label > input[type=radio]').check();
            //lover
            cy.get('#root > div > div > div > div:nth-child(2) > div > div.twelve.wide.column > div > div > div > div > form > div.create-characters > div:nth-child(5) > div.fields > div:nth-child(1) > input[type=text]')
            .type("Padme")
            .should("have.value","Padme");        
            cy.get('#root > div > div > div > div:nth-child(2) > div > div.twelve.wide.column > div > div > div > div > form > div.create-characters > div:nth-child(5) > div.fields > div.four.wide.field.genderField > div:nth-child(3) > label > input[type=radio]').check();
            //mentor
            cy.get('#root > div > div > div > div:nth-child(2) > div > div.twelve.wide.column > div > div > div > div > form > div.create-characters > div:nth-child(6) > div.fields > div:nth-child(1) > input[type=text]')
            .type("Obi Wan")
            .should("have.value","Obi Wan");        
            cy.get('#root > div > div > div > div:nth-child(2) > div > div.twelve.wide.column > div > div > div > div > form > div.create-characters > div:nth-child(6) > div.fields > div.four.wide.field.genderField > div:nth-child(2) > label > input[type=radio]').check();
            //Trickster
            cy.get('#root > div > div > div > div:nth-child(2) > div > div.twelve.wide.column > div > div > div > div > form > div.create-characters > div:nth-child(7) > div.fields > div:nth-child(1) > input[type=text]')
            .type("Palpatine")
            .should("have.value","Palpatine");        
            cy.get('#root > div > div > div > div:nth-child(2) > div > div.twelve.wide.column > div > div > div > div > form > div.create-characters > div:nth-child(7) > div.fields > div.four.wide.field.genderField > div:nth-child(2) > label > input[type=radio]').check();
            //save
            cy.get('button[class="ui fluid primary button"]').click()
    
            
            cy.get('#root > div > div > div > div:nth-child(1) > div > a.yellow.active.item').click();
 
            //edit
            cy.get('#root > div > div > div > div:nth-child(2) > div > div.twelve.wide.column > div > div:nth-child(2) > ul > div:nth-child(1) > div > div.extra.content > div > button.ui.green.basic.button').click();
            
            cy.get('body > div.ui.page.modals.dimmer.transition.visible.active').children()
            .should('be.visible');
    
            cy.get('button[class="ui green basic button"]').contains('Edit Story')
            .click();
            
            const todaysDate = Cypress.moment().format('MMM DD, YYYY')
            cy.get('#EditStoryForm > div.sixteen.wide.field > input')
            .type(' updated '+ todaysDate);
    
            cy.get('#EditStoryForm > div:nth-child(8) > div > div > button').click()
    
    
            cy.get('button[class="ui basic right floated button"]').contains('Close')
            .click();
    
            //delete
            /* get text
            const total = cy.get('#root > div > div > div > div:nth-child(2) > div > div.twelve.wide.column > div > div.AllStories-header > div > div > h3').invoke('text').then((text) => {
                console.log("+++++++++++++ " + total);
            });*/
            
            cy.get('#root > div > div > div > div:nth-child(2) > div > div.twelve.wide.column > div > div:nth-child(2) > ul > div:nth-child(1) > div > div.extra.content > div > button.ui.red.basic.button').click();
            cy.reload();
    
        })
    })