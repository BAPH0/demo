
# https://github.com/briangonzalez/rgbaster.js/tree/master

$(document).ready ->

  $("li").each (i,o) =>
    len = i + 1
    src = "/assets/img/image-color-extraction/#{len}.jpg"
    RGBaster.colors src,
      # paletteSize: 30
      exclude: [ 'rgb(0,0,0)', 'rgb(255,255,255)' ]
      success: (payload) ->
        console.log "id: #{len}"
        console.log "dominant: #{payload.dominant}"
        console.log "secondary: #{payload.secondary}"
        console.log "palette: #{payload.palette}"
        $(o).find(".msk").css "background-color":payload.dominant
        $(o).find(".txt").html payload.dominant

  return