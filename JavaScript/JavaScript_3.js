function displayType(player) {
    var playerType = player.getAttribute("data-player-type");
    alert(playerType + " is the star of the " + player.innerHTML + "!");
}