var playlist = {
  tomPetty: 'learningToFly'
}
function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle
  return playlist
}
function removeFromPlaylist(playList, artistName){
  delete playList.artistName
  return playList
}

