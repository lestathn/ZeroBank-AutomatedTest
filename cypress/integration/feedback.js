before(() => {        
    cy.visit('/')
    cy.get("form");
  
  })
  
  beforeEach(()=>{
    Cypress.Cookies.defaults({
      whitelist: 'session_id'
    })
  })
  
  describe('Check the Feedback Tab', () => {
  
    it('Check feedback info', () => {   
        cy.get('li[id="feedback"]').click();
        cy.get('h3[id="feedback-title"]')
        .contains('Feedback');
        cy.get('div[id="description"]')
        .contains('Frequently Asked Questions');
    })

    it('Send Feedback', () => {   
        cy.get('input[id="name"]')
        .type('Elder David Godoy');
        cy.get('input[id=email]')
        .type('eldergodoy54@gmail.com');
        cy.get('input[id="subject"')
        .type('Testing the feedback');
        cy.get('textarea[name="comment"]')
        .type('This is a testing message');
        cy.get('input[class="btn-signin btn btn-primary"]').click();
        cy.get('div[class="offset3 span6"]')
        .contains('Thank you for your comments, ');
    })


})