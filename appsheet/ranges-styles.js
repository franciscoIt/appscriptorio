/**
 * Select ranges, add styles
 */
function test1() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange('A1').activate();
  spreadsheet.getCurrentCell().setValue('Hello');
  spreadsheet.getRange('B1').activate();
  spreadsheet.getCurrentCell().setValue('World');
  spreadsheet.getRange('A1:B1').activate();
  spreadsheet.getActiveRangeList().setFontWeight('bold')
  .setFontSize(20)
  .setBackground('#0000ff');
  spreadsheet.getRange('D1').activate();
  spreadsheet.getCurrentCell().setValue('Done');
};