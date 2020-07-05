function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
function emojis()
{
    document.getElementById("emoticons").style.display="block";
    
}
function emoclose()
{
    document.getElementById("emoticons").style.display="none";
    
}
function emotes(id)
{
    
    var but=document.getElementById("emhead");
    // var ics=document.getElementById("icon");
    if(id=="like")
    { 
      but.innerHTML="Like";
      but.style.color="blue";
      document.getElementById("icon").className = "fa fa-thumbs-o-up";
    }
    else if(id=="applause")
    {
        but.innerHTML="Applause" ;
        but.style.color="green";
        document.getElementById("icon").className = "fa fa-hand-peace-o";
    }
    else if(id=="heart")
    {
        but.innerHTML="Love" ;
        but.style.color="red";
        document.getElementById("icon").className = "fa fa-heart-o";   
    }
    else if(id=="lightbulb")
    {
        but.innerHTML="Innovative" ;
        but.style.color="orangered";
        document.getElementById("icon").className = "fa fa-lightbulb-o";  
    }
    else if(id=="smile")
    {
        but.innerHTML="Curious" ;
        but.style.color="orange";
        document.getElementById("icon").className = "fa fa-smile-o"; 
    }
    emoclose();
}
function search()
{
    document.getElementById("sp").style.visibility="hidden";
    document.getElementById("search").style.marginLeft="250px";
    document.getElementById("sinp").placeholder="Search";
}
function normal(){
    document.getElementById("sp").style.visibility="visible";
    document.getElementById("search").style.marginLeft="30px";
    document.getElementById("sinp").placeholder="";
}

function likeUnlike()
{
    var but=document.getElementById("emhead");
        but.innerHTML="Like";
        but.style.color="gray";
        document.getElementById("icon").className = "fa fa-thumbs-o-up";
        // document.getElementById("icon").style.color="gray";
   emoclose();
}
