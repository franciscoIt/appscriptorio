function testData1(){
  const id = '1looDMwg_ztAb2tiuRx6Xk3MXFtQ4yLc1vumVbiSnzu0';
  const sheet = SpreadsheetApp.openById(id).getSheets()[0];
  const lastCol = sheet.getLastColumn();
  const lastRow = sheet.getLastRow();
  const range = sheet.getRange(1,1,lastRow,lastCol);
  const rangeData = sheet.getDataRange();
  const lastCorner = sheet.getRange(lastRow,lastCol);
  lastCorner.setBackground('red');
  Logger.log(lastCorner.getValue());
  Logger.log(rangeData.getValues());
  Logger.log(lastCol,lastRow);
  Logger.log(range.getValues());
}