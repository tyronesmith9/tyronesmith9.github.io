$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(100,700,150,15,"black");
    createPlatform(200,600,150,15,"blue");
    createPlatform(100,500,150,15,"black");
    createPlatform(200,600,150,15,"black"); 
    createPlatform(300,600,150,15,"black");
    createPlatform(100,500,150,15,"black")
    createPlatform(300,400,150,15,"black")
    createPlatform(500,300,150,15,"black")
    createPlatform(800,200,150,15,"black")
    createPlatform(800,100,120,15,"yellow") 
    createPlatform(900,400,120,15,"black")
    createPlatform(1000,300,150,15,"black")
    createPlatform(950,500,150,15,"black")
    createPlatform(1100,600,150,15,"black")
    createPlatform(1100,400,190,15,"black")
    createPlatform(1100,500,150,15,"black")
    // TODO 3 - Create Collectables
    createCollectable("diamond",800,30,0.5,0.5)
    createCollectable("diamond",500,30,0.5,0.5)


    
    // TODO 4 - Create Cannons
    createCannon("right",600,1500);
    createCannon("right",700,1800);
    createCannon("right",300,1000)
    createCannon("bottom",800,100)
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }
  }
  registerSetup(setup);

});
