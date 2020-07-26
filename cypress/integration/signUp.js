beforeEach(() => {
    cy.clearLocalStorage()
    cy.clearCookies()
})

describe('Signup Success', () => {

    it('Signup into app', () => {
      cy.visit('/')
      cy.get("body")
      .get('a[class="hoverYellow"]').click();

      cy.get("form")
      .get('input[id="emailAddressInput"]')
      .type("eldergodoy54@gmail.com")//change here for a new sign up
      .should("have.value", "eldergodoy54@gmail.com")//change here for a new sign up
      .get('input[id="usernameInput"]')
      .type("eldergodoy54")//change here for a new sign up
      .should("have.value", "eldergodoy54")//change here for a new sign up
      .get('input[id="passwordInput"]')
      .type("password1")
      .should("have.value", "password1");

      cy.get('button[class="ui green fluid button"]').click()

      if(cy.get('body').find('div[class="header"]').lenght > 0);

      
    })
    
  })