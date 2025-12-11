function listMyFiles(folder) {
  const files = folder.getFiles();
  while (files.hasNext()){
    const file = files.next();
    Logger.log(file.getName());
  }
}
 
function filesinFolder(){
  const id = '1VqomA-OF_Gd8j20fZB1f5YiddQdIyuzL';
  const folder = DriveApp.getFolderById(id);
  listMyFiles(folder);
 
}
