var i=Math.floor(2*Math.random())+1;
var j=i;

var red=["the red"];
var green=["the green"];

if(i === 1)
    document.querySelector("h2").textContent="Player 2 start with ❌";

else    
    document.querySelector("h2").textContent="Player 1 start with 🟢";  

for(var a=0; a<9; a++)
{
    var hld=document.querySelectorAll("button");

    hld[a].addEventListener("click", function()
    {
        if(j === 1)
        {       
            if(this.id!="cross" && this.id!=="o")
                {
                    this.style.backgroundImage="url('./cross2 (1).jpeg')";
                    console.log(this.id);
                    red.push(this.id);
                    this.id="cross";
                    j=2;
                    
                    if(red.includes('1') && red.includes('4') && red.includes('7'))
                    {   
                        red_win(1,4,7,'red');
                    }
                    else if(red.includes('1') && red.includes('5') && red.includes('9'))
                    {
                        red_win(1,5,9,'red');
                    }
                    else if(red.includes('1') && red.includes('2') && red.includes('3'))
                    {
                        red_win(1,2,3,'red');
                    }
                    else if(red.includes('7') && red.includes('8') && red.includes('9'))
                    {
                        red_win(7,8,9,'red');
                    }
                    else if(red.includes('2') && red.includes('5') && red.includes('8'))
                    {
                        red_win(2,5,8,'red');
                    }
                    else if(red.includes('3') && red.includes('6') && red.includes('9'))
                    {
                        red_win(3,6,9,'red');
                    }
                    else if(red.includes('3') && red.includes('5') && red.includes('7'))
                    {
                        red_win(3,5,7,'red');
                    }
                    else if(red.includes('4') && red.includes('5') && red.includes('6'))
                    {
                        red_win(4,5,6,'red');
                    }
                }
            
            else
                alert(" That place was tken away, like your ex!!");
        }
        else
        {
            if(this.id!=="o" && this.id!=="cross")
            {
                this.style.backgroundImage="url('./o\ \(1\).jpeg')";
                console.log(this.id);
                green.push(this.id);
                this.id="o";
                j=1;

                if(green.includes('1') && green.includes('4') && green.includes('7'))
                    {
                        red_win(1,4,7,'green');
                    }
                else if(green.includes('1') && green.includes('5') && green.includes('9'))
                    {
                        red_win(1,5,9,'green');
                    }
                else if(green.includes('1') && green.includes('2') && green.includes('3'))
                    {
                        red_win(1,2,3,'green');
                    }
                else if(green.includes('7') && green.includes('8') && green.includes('9'))
                    {
                        red_win(7,8,9,'green');
                    }
                else if(green.includes('2') && green.includes('5') && green.includes('8'))
                    {
                        red_win(2,5,8,'green');
                    }
                else if(green.includes('3') && green.includes('6') && green.includes('9'))
                    {
                        red_win(3,6,9,'green');
                    }
                else if(green.includes('3') && green.includes('5') && green.includes('7'))
                    {
                        red_win(3,5,7,'green');
                    }
                else if(green.includes('4') && green.includes('5') && green.includes('6'))
                    {
                        red_win(4,5,6,'green');
                    }
                
            }

            else
                alert(" That place was taken away, like your ex!!");
        }
    })
}

function red_win(a,b,c,d)
{
    var temp0=document.querySelector(".b"+a);
    var temp1=document.querySelector(".b"+b);
    var temp2=document.querySelector(".b"+c);

    temp0.classList.add("pressed");
    temp1.classList.add("pressed");
    temp2.classList.add("pressed");

    setTimeout(function(){
        temp0.classList.remove("pressed");
        temp1.classList.remove("pressed");
        temp2.classList.remove("pressed");
    },"0.5 second");
    if(d === "red")
        setTimeout(function(){alert("PLAYER 2 wins")},"1 second");
    else if(d==="green")   
        setTimeout(function(){alert("PLAYER 1 wins")},"1 second");
    history.go();
}

