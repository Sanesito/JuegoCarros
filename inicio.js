function ingresar(){
    player_name = document.getElementById("player").value;
    localStorage.setItem("player",player_name)
    window.location = "index.html"
}