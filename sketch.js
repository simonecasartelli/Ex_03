function setup() {
createCanvas(500,500);
colorMode(RGB);

      for(var x = -40; x < width; x += 30)
  {
      for(var y = -35; y < height; y += 30)
    {
      strokeWeight(2);
      if(random()<0.5)
      {
        fill(0);
      } else 
      {
        fill(29,112,183);
      }
    triangle(x,y,x+100,y,x+50,y+50);
    }
  }
}
function draw() {
 
}