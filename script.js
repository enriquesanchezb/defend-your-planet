class Lobster extends Enemy {
  constructor(game) {
    super(game);
    this.image = document.getElementById("lobster");
    this.frameX = 0;
    this.frameY = Math.floor(Math.random() * 4);
    this.maxFrame = 14;
    this.lives = 8;
    this.maxLives = this.lives;
  }
}

class Beetle extends Enemy {
  constructor(game) {
    super(game);
    this.image = document.getElementById("beetle");
    this.frameX = 0;
    this.frameY = Math.floor(Math.random() * 4);
    this.maxFrame = 3;
    this.lives = 1;
    this.maxLives = this.lives;
  }
}

class Rhino extends Enemy {
  constructor(game) {
    super(game);
    this.image = document.getElementById("rhino");
    this.frameX = 0;
    this.frameY = Math.floor(Math.random() * 4);
    this.maxFrame = 6;
    this.lives = 4;
    this.maxLives = this.lives;
  }
}

class Game {
  constructor(canvas) {
    // ... (unchanged code)

    window.addEventListener("mousemove", (e) => {
      this.mouse.x = e.offsetX;
      this.mouse.y = e.offsetY;
    });
    window.addEventListener("mousedown", (e) => {
      this.mouse.x = e.offsetX;
      this.mouse.y = e.offsetY;
      this.player.shoot();
    });
    window.addEventListener("keyup", (e) => {
      if (e.key === "d") this.debug = !this.debug;
      else if (e.code === "Space") this.player.shoot();
    });
  }

  // ... (unchanged code)

  drawStatusText(context) {
    // ... (unchanged code)
  }

  calcAim(a, b) {
    // ... (unchanged code)
  }

  checkCollision(a, b) {
    // ... (unchanged code)
  }

  createProjectilePool() {
    // ... (unchanged code)
  }

  getProjectile() {
    // ... (unchanged code)
  }

  createEnemyPool() {
    // ... (unchanged code)
  }

  getEnemy() {
    // ... (unchanged code)
  }
}

function startGame() {
  // ... (unchanged code)
}

function checkPassword() {
  var userInput = document.getElementById("passwordInput").value;
  var encodedPassword = "Y0hIfWczZXhmcVE+";

  if (encodePassword(userInput) === encodedPassword) {
    document.getElementById("gameContainer").style.display = "block";
    document.getElementById("passwordPrompt").style.display = "none";
    startGame();
  } else {
    alert("Incorrect password!");
  }
}

function encodePassword(password) {
  var encoded = btoa(password)
    .split("")
    .map(function (c, i) {
      return String.fromCharCode(c.charCodeAt(0) + (i % 5));
    })
    .join("");
  var aux = btoa(encoded);
  return aux;
}
