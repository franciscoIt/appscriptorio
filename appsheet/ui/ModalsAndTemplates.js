const GLVAL = 'Testing Global Value';
 
 
function onOpen(){
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('adv')
  .addItem('showModal1','modal1')
  .addItem('showModal2','modal2')
    .addItem('showModal3','modal3')
  .addToUi();
}
 
function modal3(){
  const ui = SpreadsheetApp.getUi();
  const html = HtmlService.createHtmlOutput('<h1>Hello World</h1><p>Tested</p>');
  html.setHeight(500);
  html.setWidth(800);
  ui.showDialog(html);
}
 
function modal2(){
  const ui = SpreadsheetApp.getUi();
  //const html = HtmlService.createHtmlOutput('<h1>Hello World</h1><p>Tested</p>');
  const html = HtmlService.createHtmlOutputFromFile('temp');
  html.setHeight(500);
  html.setWidth(800);
  ui.showModelessDialog(html,'Modeless');
}
 
function modal1(){
  const ui = SpreadsheetApp.getUi();
  //const html = HtmlService.createHtmlOutput('<h1>Hello World</h1><p>Tested</p>');
  const html = HtmlService.createTemplateFromFile('temp1').evaluate();
  ui.showModalDialog(html,'test 1');
}