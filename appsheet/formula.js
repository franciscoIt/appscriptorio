function SELVALA1(){
  return SpreadsheetApp.getActive().getActiveRange().getA1Notation();
}
 
function addForm(){
  const ss = SpreadsheetApp.getActive();
  const sheet = ss.getSheetByName('test');
  const range = sheet.getRange('C1:C15');
  range.setFormula('=SUM(A1:B1)');
  range.setFontColor('red');
  range.setBackground('pink');
}