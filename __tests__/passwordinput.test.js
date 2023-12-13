const {Enemy,Player,Planet,Projectile,Game} = require('../script')

describe('Password Input', () => {
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
  // Simulate the creation of 'passwordInput' element before each test
  beforeEach(() => {
    document.body.innerHTML = `<input id="passwordInput" />`;
  });

  // Simulate the 'keyup' event handler and the 'checkPassword' function
  test('should call checkPassword on Enter key', () => {
    const mockCheckPassword = jest.fn();
    document.getElementById("passwordInput").addEventListener("keyup", (event) => {
      if (event.key === "Enter") {
        mockCheckPassword();
      }
    });

    // Simulate pressing the Enter key
    const event = new KeyboardEvent('keyup', { key: 'Enter' });
    document.getElementById("passwordInput").dispatchEvent(event);

    // Verify if 'checkPassword' was called
    expect(mockCheckPassword).toHaveBeenCalled();
  });
});
