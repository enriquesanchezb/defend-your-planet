import Player from './Player';

describe('Player', () => {
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
