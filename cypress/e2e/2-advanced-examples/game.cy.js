describe('Game Interaction', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('Should enter the correct password and start the game', () => {
      cy.get('#passwordInput').type('password'); // replace 'your_password' with your actual password
      cy.get('button').click();
      cy.get('#gameContainer').should('exist');
    });
  
    it('Should lose the game', () => {
      cy.get('#passwordInput').type('wrong_password');
      cy.get('button').click();
      cy.on('window:alert', (str) => {
        expect(str).to.equal('Incorrect password!');
      });
    });
  
    it('Should shoot projectiles', () => {
      cy.get('#passwordInput').type('password');
      cy.get('button').click();
  
      // Assuming you have a shooting mechanism that involves mouse clicks
      // You should adjust the coordinates based on your game mechanics
      cy.get('#canvas1').click(400, 400); // Replace with your actual coordinates
    });
  
    // Add more test cases as needed
  });