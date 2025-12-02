function test2(){
  const url = 'https://docs.google.com/spreadsheets/d/1rrORyEVHbvl_8I44q-_iIpO2SuY79qBKo66NEfKwg24/';
  const ss = SpreadsheetApp.openByUrl(url);
  //const sheet = ss.getSheets()[1];
  const sheet = ss.getSheetByName('New 3');
  //sheet.setName('UPDATED 500'); 
  if(sheet != null){
  Logger.log(sheet.getIndex());
  }else{
  Logger.log(sheet);
  }
}
 
 
 
function test1() {
  const id = '1rrORyEVHbvl_8I44q-_iIpO2SuY79qBKo66NEfKwg24';
  const ss = SpreadsheetApp.openById(id);
  const sheets =  ss.getSheets();
  sheets.forEach((sheet,index)=>{
    Logger.log(sheet.getName());
    sheet.setName('Updated '+index); 
  })
  Logger.log(sheets);
}
 
