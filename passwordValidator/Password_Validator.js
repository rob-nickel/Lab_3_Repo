function validate()
{
        if(document.getElementById("password1").value.length < 8)
        {
                document.body.style.backgroundColor = "Tomato";
                alert("Your password is too short!");
        }
        else if (!(document.getElementById("password1").value == document.getElementById("password2").value))
        {
                document.body.style.backgroundColor = "Tomato";
                alert("Your passwords are not identical");
        }
        else
        {
                document.body.style.backgroundColor = "LightGreen";
        }
        //alert("You clicked the button");
}
