import Projectile from './Projectile';

describe('Projectile', () => {
  const mockGame = { width: 800, height: 600 };

  test('should be initially marked as free', () => {
    const projectile = new Projectile(mockGame);
    expect(projectile.free).toBe(true);
  });

  test('should update its position when active', () => {
    const projectile = new Projectile(mockGame);
    const initialX = 100;
    const initialY = 100;
    projectile.start(initialX, initialY, 5, 5);
    projectile.update();
    expect(projectile.x).not.toBe(initialX);
    expect(projectile.y).not.toBe(initialY);
  });
});
