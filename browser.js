function searcher(val){
  const id = '1_K6euAToeLOTJqfM1uNtzickbtJi8VIx';
  const folder = DriveApp.getFolderById(id);
  const result = folder.searchFiles('title contains "'+val+'"');
  //const result = DriveApp.searchFiles('title contains "'+val+'"');
  const res = [];
  while (result.hasNext()){
    const file = result.next();
    const results = {};
    results.id = file.getId();
    results.url = file.getName();
    results.size = file.getSize();
    results.owner = file.getOwner();
    results.type = file.getMimeType();
    res.push(results);
  }
  return res;
}
 
 
function startSearch(){
  const searchTerm = 'new';
  const found = searcher(searchTerm);
  Logger.log(found);
}
 