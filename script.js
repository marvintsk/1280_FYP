function search(){
    var lookfor = document.getElementById("txtlookfor").value;

    if (lookfor.length > 0)
    {
        var query = "http://www.google.com/search?q=" + encodeURIComponent(lookfor) + " wig";
        window.open(query, '_blank');                
    }
    else
    {
        alert('Please input the styles of wig which you want to seek.');
    } 
}

function searchHair(){
    var ddchoice = document.getElementById('dropdown').value;

    if (ddchoice == 1)
    {
        document.getElementById("p1").style.display = "block";
        document.getElementById("p2").style.display = "block";
        document.getElementById("p3").style.display = "block";
        document.getElementById("p4").style.display = "block";
        document.getElementById("p5").style.display = "block";
        document.getElementById("p6").style.display = "block";
        document.getElementById("p7").style.display = "block";
        document.getElementById("p8").style.display = "block";
        document.getElementById("p9").style.display = "block";
        document.getElementById("p10").style.display = "block";
        document.getElementById("p11").style.display = "block";
        document.getElementById("p12").style.display = "block";
    }
    else if (ddchoice == 2)
    {
        document.getElementById("p1").style.display = "flex";
        document.getElementById("p2").style.display = "flex";
        document.getElementById("p3").style.display = "flex";
        document.getElementById("p4").style.display = "flex";
        document.getElementById("p5").style.display = "none";
        document.getElementById("p6").style.display = "none";
        document.getElementById("p7").style.display = "none";
        document.getElementById("p8").style.display = "none";
        document.getElementById("p9").style.display = "none";
        document.getElementById("p10").style.display = "none";
        document.getElementById("p11").style.display = "none";
        document.getElementById("p12").style.display = "none";
    }
    else if (ddchoice == 3)
    {
        document.getElementById("p1").style.display = "none";
        document.getElementById("p2").style.display = "none";
        document.getElementById("p3").style.display = "none";
        document.getElementById("p4").style.display = "none";
        document.getElementById("p5").style.display = "flex";
        document.getElementById("p6").style.display = "flex";
        document.getElementById("p7").style.display = "flex";
        document.getElementById("p8").style.display = "flex";
        document.getElementById("p9").style.display = "none";
        document.getElementById("p10").style.display = "none";
        document.getElementById("p11").style.display = "none";
        document.getElementById("p12").style.display = "none";
    }
    else if (ddchoice == 4)
    {
        document.getElementById("p1").style.display = "none";
        document.getElementById("p2").style.display = "none";
        document.getElementById("p3").style.display = "none";
        document.getElementById("p4").style.display = "none";
        document.getElementById("p5").style.display = "none";
        document.getElementById("p6").style.display = "none";
        document.getElementById("p7").style.display = "none";
        document.getElementById("p8").style.display = "none";
        document.getElementById("p9").style.display = "flex";
        document.getElementById("p10").style.display = "flex";
        document.getElementById("p11").style.display = "flex";
        document.getElementById("p12").style.display = "flex";
    }
}

function initMap() {
    const myLatLng = { lat: 49.2036866, lng: -122.9153588 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: myLatLng,
    });
  
    new google.maps.Marker({
      position: myLatLng,
      map,
      title: "Hello World!",
    });
  }
