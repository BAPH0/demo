(function() {
  $(document).ready(function() {
    $("li").each((function(_this) {
      return function(i, o) {
        var len, src;
        len = i + 1;
        src = "/demo/assets/img/image-color-extraction/" + len + ".jpg";
        return RGBaster.colors(src, {
          exclude: ['rgb(0,0,0)', 'rgb(255,255,255)'],
          success: function(payload) {
            var _b, _g, _r, _rgb, _rgbtotal;
            _rgb = payload.dominant.slice(4);
            _rgb = _rgb.slice(0, -1);
            _rgb = _rgb.split(",");
            _r = Number(_rgb[0]);
            _g = Number(_rgb[1]);
            _b = Number(_rgb[2]);
            _rgbtotal = _r + _g + _b;
            if (_rgbtotal < 100) {
              _r += 50;
              _g += 50;
              _b += 50;
            }
            console.log("id: " + len);
            console.log("_rgb: " + _r + "," + _g + "," + _b);
            console.log("_rgbtotal: " + _rgbtotal);
            console.log("dominant: " + payload.dominant);
            console.log("secondary: " + payload.secondary);
            console.log("palette: " + payload.palette);
            $(o).find(".msk").css({
              "background-color": "rgb(" + _r + "," + _g + "," + _b + ")"
            });
            return $(o).find(".txt").html("rgb(" + _r + "," + _g + "," + _b + ")");
          }
        });
      };
    })(this));
  });

}).call(this);
