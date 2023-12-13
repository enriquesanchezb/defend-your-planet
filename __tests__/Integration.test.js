const {Enemy,Player,Planet,Projectile,Game} = require('../script')

describe('Game Integration Tests', () => {
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
  const canvasMock = {
    width: 800,
    height: 600,
    getContext: () => ({ drawImage: jest.fn() })
  };

  // Test if an enemy is correctly reset when lives drop to zero
  test('Enemy should reset when its lives drop to zero', () => {
    const game = new Game(canvasMock);
    const enemy = new Enemy(game);
    enemy.lives = 1;

    // Simulate the enemy being hit
    enemy.hit(1);

    // Check if the enemy resets after losing all lives
    expect(enemy.free).toBe(true);
  });

  // Test if the game correctly calculates the aim between two points
  test('Game should correctly calculate aim between two points', () => {
    const game = new Game(canvasMock);
    const source = { x: 0, y: 0 };
    const target = { x: 10, y: 10 };

    // Calculate the aim
    const aim = game.calcAim(source, target);

    // Check the calculated aim
    expect(aim).toEqual(expect.any(Array));
    expect(aim.length).toBe(4);
  });

  // Test if projectiles are correctly reset when leaving game bounds
  test('Projectiles should reset when leaving game bounds', () => {
    const game = new Game(canvasMock);
    const projectile = new Projectile(game);
    projectile.start(0, 0, 1000, 1000); // Fast speeds to move out of bounds

    // Update the projectile's position
    projectile.update();

    // Check if the projectile resets after leaving the game bounds
    expect(projectile.free).toBe(true);
  });
});
