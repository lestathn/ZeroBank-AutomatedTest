before(() => {        
    cy.visit('/')
    cy.get("form");
  
  })
  
  beforeEach(()=>{
    Cypress.Cookies.defaults({
      whitelist: 'session_id'
    })
  })
  
  describe('Check Search without login', () => {
  
    it('Searh', () => {   
        cy.get('form');
        cy.get('input[name="searchTerm"]')
        .type('Loan{enter}');
        cy.get('div[class="top_offset"]')
        .contains('Search Results:');
        cy.get('div[class="top_offset"]')
        .contains('Personal Banking - Loans');
    })
  
})