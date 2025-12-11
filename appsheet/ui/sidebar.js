const GLVAL = 'Testing Global Value';
let COUNTER = 0;
 
 
function onOpen(){
  PropertiesService.getDocumentProperties().setProperty('cnt',0);
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('adv')
  .addItem('showSide1','side1')
    .addItem('showSide2','side2')
      .addItem('showSide3','side3')
  .addToUi();
}
 
function side1(){
  const ui = SpreadsheetApp.getUi();
  const html = HtmlService.createHtmlOutput('<h1>Hello World</h1><p>Tested</p>');
  ui.showSidebar(html);
}
function side2(){
  const ui = SpreadsheetApp.getUi();
  const html = HtmlService.createHtmlOutputFromFile('temp');
  ui.showSidebar(html);
}
function side3(){
  COUNTER = PropertiesService.getDocumentProperties().getProperty('cnt');
  COUNTER++;
  PropertiesService.getDocumentProperties().setProperty('cnt',COUNTER);
  const ui = SpreadsheetApp.getUi();
  const html = HtmlService.createTemplateFromFile('temp1').evaluate();
  ui.showSidebar(html);
}