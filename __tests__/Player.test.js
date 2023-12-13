const {Player} = require('../script')

describe('Player', () => {
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
  const mockGame = { width: 800, height: 600, debug: false };

  test('should be created at the center of the game area', () => {
    const player = new Player(mockGame);
    expect(player.x).toBe(mockGame.width / 2);
    expect(player.y).toBe(mockGame.height / 2);
  });

  test('should have a predefined radius', () => {
    const player = new Player(mockGame);
    expect(player.radius).toBe(40);
  });
});
