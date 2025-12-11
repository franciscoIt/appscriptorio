function getDetails(){
  const id = '1hGsVI-FJ3fcsNsNE7lFSMvHwV04k352m';
  const folder = DriveApp.getFolderById(id);
  const files = folder.getFiles();
  const ss = SpreadsheetApp.create(folder.getName());
  const sheet = ss.insertSheet('File Info');
  const ssid = ss.getId();
  ss.appendRow(['URL','Size','Download','id']);
  while (files.hasNext()){
    const file = files.next();
    const fileInfo = [];
    fileInfo.push(file.getUrl());
    fileInfo.push(file.getSize());
    fileInfo.push(file.getDownloadUrl());
    fileInfo.push(file.getId());
    Logger.log(fileInfo);
    ss.appendRow(fileInfo);
  }
}