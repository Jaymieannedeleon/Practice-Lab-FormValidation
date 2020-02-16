function formValidation(){
    var evenType = document.forms["formValid"]["eType"].value;
    var evenTitle = document.forms["formValid"]["event"].value;
    var eventDate = document.forms["formValid"]["date"].value;
    var endDate = document.forms["formValid"]["enDate"].value;
    var postDate = document.forms["formValid"]["postingDate"].value;
    var a = true;


    switch( a == true)
    {

        case (evenType == "none"): alert("Event must be filled out");
                        return false;

        case (evenTitle == ""): alert("Title must be filled out");
                        return false;

        case (eventDate == ""): alert("Start date must be filled out");
                        return false;

        case (endDate == ""): alert(" End date must be filled out");
                        return false;

        case (postDate == ""): alert("Posting date must be filled out");
                        return false;

        default: alert("Form Submitted!!");
                document.forms["formValid"]["evenType"].value = "none";
                document.forms["formValid"]["evenTitle"].value = "";
                document.forms["formValid"]["eventDate"].value = "";
                document.forms["formValid"]["endDate"].value = "";
                document.forms["formValid"]["postDate"].value = "";
                return false;
    }

}