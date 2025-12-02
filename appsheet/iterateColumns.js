function addColors(){
  const id = '1looDMwg_ztAb2tiuRx6Xk3MXFtQ4yLc1vumVbiSnzu0';
  const ss = SpreadsheetApp.openById(id);
  const sheet = ss.getSheets()[0];
  let counter = 0;
  for(let i=1;i<51;i++){
    let backColor = 'green';
    for(let x=0;x<5;x++){
      let val = 'A'.charCodeAt()+x;
      let letterVal = String.fromCharCode(val);
      Logger.log(letterVal);
      counter++;
      if((counter%2)==0){
        backColor = 'pink';
      }else{
        backColor = 'yellow';
      }
      sheet.getRange(letterVal+i).setBackground(backColor);
    }
  }
}
