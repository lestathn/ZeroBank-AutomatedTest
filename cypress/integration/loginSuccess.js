
  
  describe('Login Success', () => {
  
      it('Login Success into app', () => {
        cy.visit('/')
        cy.get("form");
  
        cy.get('input[id="usernameInput"]')
        .type("eldergodoy54")
        .should("have.value", "eldergodoy54");
  
        cy.get('input[id="passwordInput"]')
        .type("password1")
        .should("have.value", "password1");
  
        cy.get('button[type="submit"]').click()
  
        if(cy.get('body').find('div[class="header"]').lenght > 0);
      })  

})
    