const {Planet} = require('../script')

describe('Planet', () => {
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
  test('should be instantiated with correct properties', () => {
    const mockGame = { width: 800, height: 600, debug: false };
    const planet = new Planet(mockGame);

    expect(planet.x).toBe(400);
    expect(planet.y).toBe(300);
    expect(planet.radius).toBe(80);
  });
});
