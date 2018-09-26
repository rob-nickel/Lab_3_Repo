function go()
{
        let textTag = document.getElementById("paragraph");
        let redBorder = document.getElementById("borderRed").value;
        let blueBorder = document.getElementById("borderBlue").value;
        let greenBorder = document.getElementById("borderGreen").value;
        let widthBorder = document.getElementById("borderWidth").value;
        let redBack = document.getElementById("backRed").value;
        let blueBack = document.getElementById("backBlue").value;
        let greenBack = document.getElementById("backGreen").value;
        if (!checkLarge(redBorder))
        {
                redBorder = 255;
        }
        else if (!checkLarge(redBorder))
        {
                redBorder = 0;
        }
        if (!checkLarge(blueBorder))
        {
                blueBorder = 255;
        }
        else if (!checkLarge(blueBorder))
        {
                blueBorder = 0;
        }
        if (!checkLarge(greenBorder))
        {
                greenBorder = 255;
        }
        else if (!checkLarge(greenBorder))
        {
                greenBorder = 0;
        }
        if (!checkLarge(redBack))
        {
                redBack = 255;
        }
        else if (!checkLarge(redBack))
        {
                redBack = 0;
        }
        if (!checkLarge(greenBack))
        {
                greenBack = 255;
        }
        else if (!checkLarge(greenBack))
        {
                greenBack = 0;
        }
        if (!checkLarge(blueBack))
        {
                blueBack = 255;
        }
        else if (!checkLarge(blueBack))
        {
                blueBack = 0;
        }
        if(widthBorder > 300){
                widthBorder = 300;
        }
        else if (widthBorder < 0){
                widthBorder= 0;
        }
        document.getElementById("paragraph").style.borderWidth = [widthBorder+"px"];
        document.getElementById("paragraph").style.backgroundColor = rgb(redBack, greenBack, blueBack);
        document.getElementById("paragraph").style.borderColor = rgb(redBorder, greenBorder, blueBorder);

}


function checkLarge(color)
{
        if (color > 255){
                return false;
        }
        return true;
}


function checkSmall(color)
{
        if (color < 0){
                return false;
        }
        return true;
}

function rgb(r, g, b){
        r = Math.floor(r);
        g = Math.floor(g);
        b = Math.floor(b);
        return ["rgb("+r+","+g+","+b+")"];
}
