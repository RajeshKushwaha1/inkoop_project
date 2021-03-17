function Toggle(){
    var x = document.getElementById("hideShow");
    if(window.screen.availWidth<=780){
        if (x.style.display === "none") {
            x.style.display = "block";
          } else {
            x.style.display = "none";
          }
    }
}
