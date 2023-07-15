// for redir use 'redirectPlayList.js'
// let redirList = 'all'

(function() {
  if (location.hash == '' || location.hash == '#') {
    if (typeof(redirList) == 'undefined') {
      location.hash = 'public'
    } else {
      location.hash = redirList
    }
  }
  let selectDir = location.hash.replace('#', '')
  let baseScript = document.createElement('script')
  baseScript.src = './dmx/' + selectDir + '/list-data-music.js'
  $('.js').appendChild(baseScript)
  baseScript.onerror = function() {
    $('.player').innerHTML = '<div class="red">LISTA NO ENCONTRADA</div>'
  }
})()