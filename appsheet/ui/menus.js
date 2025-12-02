function onOpen(){
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('New Opts')
  .addItem('first','first')
  .addItem('two','second')
  .addSeparator()
  .addSubMenu(ui.createMenu('sub')
    .addItem('first','third')
    .addItem('two','fourth')
  )
  .addItem('five','fifth')
  .addToUi();
}
 
function first(){
  logOut('ran first');
}
function second(){
  logOut('ran second');
}
function third(){
  logOut('ran third');
}
function fourth(){
  logOut('ran fourth');
}
function fifth(){
  logOut('ran fifth');
}
 
function logOut(val){
  const ss = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  ss.appendRow([val]);
}
