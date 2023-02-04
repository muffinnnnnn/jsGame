const canvas = document.getElementById('myCanvas');
    const c = canvas.getContext('2d');

    const CANVAS_WIDTH =  canvas.width = 1024;
    const CANVAS_HEIGHT = canvas.height = 576;

    c.fillStyle = "pink";
    c.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    const gravity = 0.2

    class sprite {
      constructor({position, velocity}) {
        this.position = position
        this.velocity = velocity
        this.height = 150
      }

      draw() {
        c.fillStyle = 'black'
        c.fillRect(this.position.x, this.position.y, 50, this.height)
      }

      update() {
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y

        if(this.position.y + this.height +this.velocity.y >= canvas.height){
          this.velocity.y = 0
        }else {
          this.velocity.y += gravity
        }
      }
    }


    const player = new sprite ({
    position:  {
      x: 0,
      y: 0
    },
    velocity: {
      x: 0,
      y: 0
    }
  })



    const enemy = new sprite ({
    position:  {
      x: 400,
      y: 100
    },
    velocity: {
      x: 0,
      y: 0
    }
  })




    console.log(player);


    function animate() {
      window.requestAnimationFrame(animate);
      c.fillStyle = 'pink'
      c.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
      player.update()
      enemy.update()

    }
    animate();

   window.addEventListener('keydown', event => {
  switch (event.key) {
    case 'd':
      player.velocity.x = 1
      break

    case 'a':
      player.velocity.x = -1
      break

    case 'w':
      player.velocity.y = -10
      break

    case 'z':
      player.velocity.y = -1
      break
  }
})

  window.addEventListener('keyup', event => {
  switch (event.key) {
    case 'd':
      player.velocity.x = 0
      break

    case 'a':
      player.velocity.x = 0
      break

    case 'w':
      player.velocity.y = 0
      break

    case 'z':
      player.velocity.y = 0
      break
  }
})

