function addContent(){
  const id = '1looDMwg_ztAb2tiuRx6Xk3MXFtQ4yLc1vumVbiSnzu0';
  const ss = SpreadsheetApp.openById(id);
  const sheet = ss.getSheetByName('test');
  Logger.log(sheet);
  let startPos = 5;
  let startVal = sheet.getRange(startPos,1).getValue();
  sheet.getRange(startPos,1).setValue(startVal + ' START');
  sheet.insertRowAfter(startPos);
  sheet.getRange(startPos+1,1).setValue('AFTER');
  sheet.insertRowBefore(startPos);
  sheet.getRange(startPos,1).setValue('BEFORE');
  let tempArr = [sheet.getLastRow()+1,'test',2,'hello world'];
  sheet.appendRow(tempArr);
}