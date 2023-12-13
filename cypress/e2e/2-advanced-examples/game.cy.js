describe("Game Interaction", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should enter the correct password and start the game", () => {
    cy.get("#passwordInput").type("password"); // replace 'your_password' with your actual password
    cy.get("button").click();
    cy.get("#gameContainer").should("exist");
  });

  it("Should lose the game", () => {
    cy.get("#passwordInput").type("wrong_password");
    cy.get("button").click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal("Incorrect password!");
    });
  });

  it("Should shoot projectiles", () => {
    cy.get("#passwordInput").type("password");
    cy.get("button").click();

    // Assuming you have a shooting mechanism that involves mouse clicks
    // You should adjust the coordinates based on your game mechanics
    cy.get("#canvas1").click(400, 400); // Replace with your actual coordinates
  });

  describe("Game Initialization", () => {
    it("Launch the game", () => {
      // Step 1: Open the game webpage.
      cy.visit("https://enriquesanchezb.github.io/defend-your-planet/");

      // Step 2: Ensure the game canvas is displayed.
      cy.get("#canvas1").should("be.visible");

      // Step 3: Verify the game starts without errors.
      // You may need to add additional verification steps based on your game's behavior.

      // Add a wait for the game to start, for example, by waiting for a specific element to be present.
      cy.get("#some_element_in_your_game").should("exist");

      // Optionally, you can capture a screenshot for further analysis if the test fails.
      cy.screenshot("game_screenshot");

      // Expected Result: The game initializes successfully without any visible errors.
    });
  });
});
