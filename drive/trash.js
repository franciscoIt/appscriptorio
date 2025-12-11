function movetoTrashFiles(){
  const files = DriveApp.getFilesByName('New HTML File');
  while (files.hasNext()){
    const file = files.next();
    const today = new Date();
    const fileInfo = {};
    const fileDate = file.getLastUpdated();
    fileInfo.active = today - fileDate;
    fileInfo.nameFile = file.getName();
    fileInfo.fileType = file.getMimeType();
    const hour1 = 1000 * 60 * 60;
    Logger.log(hour1);
      if(fileInfo.active < hour1){
      file.setTrashed(true);
    }
    Logger.log(fileInfo);
  }
}
 
function getFromTrash(){
  const files = DriveApp.getTrashedFiles();
  while (files.hasNext()){
    const file = files.next();
    const today = new Date();
    const fileInfo = {};
    const fileDate = file.getLastUpdated();
    fileInfo.active = today - fileDate;
    const hour1 = 1000 * 60 * 60;
    Logger.log(hour1);
    if(fileInfo.active < hour1){
      file.setTrashed(false);
    }
  }
 
 
 
} 