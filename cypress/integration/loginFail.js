beforeEach(() => {
  cy.clearLocalStorage()
  cy.clearCookies()
})

describe('Login Fail', () => {

    it('Login fail into app', () => {
      cy.visit('/')
      cy.get("form");

      cy.get('input[id="usernameInput"]')
      .type("UserTest")
      .should("have.value", "UserTest");

      cy.get('input[id="passwordInput"]')
      .type("test")
      .should("have.value", "test");

      cy.get('button[type="submit"]').click()

      if(cy.get('body').find('div[class="usernameOrPasswordError"]').length > 0);
      
    })
    
  })