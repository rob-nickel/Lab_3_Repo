let pics = ["kiliman1.jpeg", "kiliman2.jpeg", "kiliman3.jpeg", "kiliman4.jpg", "kiliman5.jpeg"];
let index = 0;

function previous()
{

        index = index-1;
        if (index < 0)
        {
                index = 4;
        }
        document.getElementById("myImg").src = pics[index];

}
function next()
{
        index = index+1;
        if (index > 4)
        {
                index = 0;
        }
        document.getElementById("myImg").src = pics[index];
}
