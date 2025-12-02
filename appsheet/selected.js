function test2(){
  const id = '1looDMwg_ztAb2tiuRx6Xk3MXFtQ4yLc1vumVbiSnzu0';
  const ss = SpreadsheetApp.openById(id);
  ss.setActiveSheet(ss.getSheets()[1]);
  const sheet = ss.getActiveSheet();
  const range = sheet.getRange('B2:G5');
  const dimArr = [range.getLastRow(),range.getNumRows(),range.getLastColumn(),range.getNumColumns()];
  Logger.log(dimArr);
 
  sheet.setActiveRange(range);
  ///range.setBackground('yellow');
  Logger.log(sheet.getName());
  const selectedSel = sheet.getSelection();
  const selRange = selectedSel.getActiveRange();
  const data = selRange.getValues();
  selRange.setBackground('purple');
  Logger.log(data);
 
}
 
 
 
function test2(){
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getActiveSheet();
  Logger.log(sheet.getName());
  const selectedSel = sheet.getSelection();
  const selRange = selectedSel.getActiveRange();
  const data = selRange.getValues();
  Logger.log(data);
 
}