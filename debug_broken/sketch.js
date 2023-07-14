function setup()
{
    createCanvas(400,600);
}


function draw()
{
    background(0);
    
    fill(128,0,128);
    
    for(var i = 0; i < 10 ; i++)
    {
        ellipse(50 + 30 * i, 50 + 30 * i, 30);
    }
    
    fill(255,155,0);
    
    for(var i = 0; i < 10; i++)
    {
        ellipse(50 + 30 * i, 120 + 30 * i,30);
    }
    
    fill(0,155,0);
    
    for(var i = 0; i < 10; i++)
    {
        ellipse(50 + 30 * i, 190 + 30 * i,30);
    }
    
    fill(205,55,55);
    
    for(var i = 0; i < 10; i++)
    {
        ellipse(50 + 30 * i, 260 + 30 * i, 30);
    }
    
     
}