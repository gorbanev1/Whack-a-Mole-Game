window.onload=function(){
    setGame()
}
function setGame() {
    for (i=0;i<9;i++){
        let tile=document.createElement("div")
        tile.id=i.toString()
        document.getElementById("board").appendChild(tile);
    }
}
