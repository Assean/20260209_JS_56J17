let actGame;
function receiveGameRusult(data){
    $("#G_Title").text(data.game);
    $("#G_Status").text(data.data.result);
    $("#G_Time").text(data.game.time);
    $("#R_Block").removeClass("d-none");
    $("#R_Block").addClass("d-block");
    $("#S_N").modal("show");
    $("#S_N").one("click...");
}