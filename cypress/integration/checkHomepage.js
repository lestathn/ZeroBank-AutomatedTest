
before(() => {
        
  cy.visit('/')
  cy.get("form");

})

beforeEach(()=>{
  Cypress.Cookies.defaults({
    whitelist: 'session_id'
  })
})

describe('Check HomePage', () => {

    it('Check the HomePage without login', () => {
      cy.get("form");
      cy.get('a[class="brand"]')
      .contains('Zero Bank');
      cy.get('div[class="custom carousel-caption"]')
      .contains('Online Banking');
      cy.get('div[class="span3"]')
      .contains('Online Banking');
      cy.get('div[class="span3"]')
      .contains('Checking Account Activity');
      cy.get('div[class="span3"]')
      .contains('Transfer Funds');
      cy.get('div[class="span3"]')
      .contains('My Money Map');
      
    })

    it('Check the Carousel',()=>{
      cy.get('form');
      cy.get('div[class="custom carousel-caption"]')
      .contains('Online Banking');
      cy.get('a[class="carousel-control custom right"]').click({force: true});
      cy.get('div[class="item active"]').find('img').should('have.attr', 'src').should('include','/resources/img/main_carousel_2.jpg')
      
    })

    it('Check FooterPage',()=>{
      cy.get('form');
      cy.get('div[class="row"]')
      .contains('Download WebInspect');
      cy.get('div[class="row"]')
      .contains('Terms of Use');
      cy.get('div[class="row"]')
      .contains('Contact Micro Focus');
      cy.get('div[class="row"]')
      .contains('Privacy Statement');
      cy.get('div[class="disclaimer span12"]')
      .contains('The Free Online Bank Web');
    })
    
  })

