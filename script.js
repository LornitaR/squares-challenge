var colourChange = false;

function addRow(){
    var newRow = $("<div class='flex-container' onclick='removeRow(this)'>"
        +"<div class='flex-item'>"
        +"</div><div class='flex-item'>"
        +"</div><div class='flex-item'>"
        +"</div>"
        +"</div>");
    
    console.log(colourChange);
    if(colourChange){
        newRow.addClass("invert");
    }
    
    $("#container").append(newRow);
  
}

function changeColour(){
    $('.flex-container').toggleClass("invert");
    colourChange = !colourChange;
}
  
function removeRow(event){
    if($(event).is(':last-child')){
        $(event).remove();
    }
    else{
      $(event).addClass("hidden");  
    }
}