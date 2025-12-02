/**
 * useful for routinary jobs, like a daily report.
 */

function makeNewOne(){
  const id = '1looDMwg_ztAb2tiuRx6Xk3MXFtQ4yLc1vumVbiSnzu0';
  const ss = SpreadsheetApp.openById(id);
  const sheets = ss.getSheets();
  Logger.log(sheets);
  const newName = 'Sheet New';
  let sheet = ss.getSheetByName(newName);
  if(sheet == null){
    sheet = ss.insertSheet();
    sheet.setName(newName);
  }
  Logger.log(sheet.getIndex());
 
}