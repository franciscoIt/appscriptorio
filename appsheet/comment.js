function onOpen(){
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('ADV')
  .addItem('addComment','adder')
  .addToUi();
}
 
function adder(){
  const ui = SpreadsheetApp.getUi();
  const cell = SpreadsheetApp.getActive().getActiveSheet().getActiveCell();
  const rep = ui.prompt('What comment would you like to add?');
  if(rep.getSelectedButton() == ui.Button.OK){
    cell.setComment(rep.getResponseText());
  }
}