function moveFiles(){
  const id = '1hGsVI-FJ3fcsNsNE7lFSMvHwV04k352m';
  const srcFolder = DriveApp.getFolderById(id);
  const endFolder = DriveApp.createFolder('moved');
  const files = srcFolder.getFiles();
  while (files.hasNext()){
    const file = files.next();
    endFolder.addFile(file);
  }
}
 
function moveCreate(){
  const ss = SpreadsheetApp.create('New File');
  const folders = DriveApp.getFoldersByName('moved');
  const ssid = ss.getId();
  const file = DriveApp.getFileById(ssid);
  if(folders.hasNext()){
    let folder = folders.next();
    folder.addFile(file);
  }
  Logger.log(file);
}