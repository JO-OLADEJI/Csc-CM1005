
var tamagotchi;

function setup()
{
    
    createCanvas(500,500);
    noStroke();
    
    tamagotchi = {
        
        points: [],
        size: 100,
        
        setup: function()
        {
            //console.log("setup");
            
            for(var i = 0; i < 36; i++)
            {
                var v = createVector(0,random(0.75,1));
                var r = (PI * 2 * i)/36; 
                v.rotate(r);
                this.points.push(v);
            }
        },
        
        draw: function(eyeDirection)
        {
            //console.log("draw");
            fill(128,0,128);
            
            beginShape();
            for(var i = 0; i < this.points.length; i++)
            {
                var v = p5.Vector.mult(this.points[i], this.size);
                
                curveVertex(v.x,v.y);
            }
            endShape();
            
            //var v = createVector(0,1);
            
            eyeDirection.mult((this.size * 0.07)/2);
            
            fill(255);
            ellipse(-this.size * 0.2, -this.size * 0.1, this.size * 0.15);
            ellipse(this.size * 0.2, -this.size * 0.1, this.size * 0.15);
            
            fill(0);
            ellipse(
                -this.size * 0.2 + eyeDirection.x, 
                -this.size * 0.1 + eyeDirection.y, 
                this.size * 0.05);
            ellipse(
                this.size * 0.2 + eyeDirection.x, 
                -this.size * 0.1 + eyeDirection.y, 
                this.size * 0.05);
            
        },
        
        grow: function()
        {
            this.size *= random(1,1.001);
            
            var rot = random(-0.01,0.01);
            
            for(var i = 0; i < this.points.length; i++)
            {
                this.points[i].rotate(rot);
            }
        },
        
        shrink: function()
        {
            this.size *= random(0.9995,1);
            this.size = max(this.size, 30);
        }
        
    };
    
    tamagotchi.setup();
}

function draw()
{
    
    background(0,0,0);
    
    translate(width/2,height/2);

    var v = createVector(mouseX - width/2, mouseY - height/2);
    v.normalize();
    
    tamagotchi.draw(v);
    
    tamagotchi.shrink();
    
}

function mouseDragged()
{
    tamagotchi.grow();
}



