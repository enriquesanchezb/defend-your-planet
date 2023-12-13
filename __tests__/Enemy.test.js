const {Enemy} = require('../script')

describe('Enemy', () => {
    beforeEach(() => {
        document.getElementById = jest.fn().mockImplementation((id) => {
          if (id === 'passwordInput') {
            return {
              addEventListener: jest.fn(),
            };
          }
          return null;
        });
      });
  const mockGame = { width: 800, height: 600 };

  test('should be initially marked as free', () => {
    const enemy = new Enemy(mockGame);
    expect(enemy.free).toBe(true);
  });

  test('should have a random speed modifier', () => {
    const enemy = new Enemy(mockGame);
    expect(enemy.speedModifier).toBeGreaterThanOrEqual(0.1);
    expect(enemy.speedModifier).toBeLessThanOrEqual(0.8);
  });

});
