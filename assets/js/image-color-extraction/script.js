(function() {
  $(document).ready(function() {
    $("li").each((function(_this) {
      return function(i, o) {
        var len, src;
        len = i + 1;
        src = "/assets/img/image-color-extraction/" + len + ".jpg";
        return RGBaster.colors(src, {
          exclude: ['rgb(0,0,0)', 'rgb(255,255,255)'],
          success: function(payload) {
            console.log("id: " + len);
            console.log("dominant: " + payload.dominant);
            console.log("secondary: " + payload.secondary);
            console.log("palette: " + payload.palette);
            $(o).find(".msk").css({
              "background-color": payload.dominant
            });
            return $(o).find(".txt").html(payload.dominant);
          }
        });
      };
    })(this));
  });

}).call(this);
