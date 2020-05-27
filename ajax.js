
var startbutton = document.getElementById("startbutton");
var photo = document.getElementById("photo");
startbutton.addEventListener('click', function(){
    setTimeout(ImgUpload,300);
  }, false);

function ImgUpload(){
    let img = photo.src;

  $.ajax({
    url: "ajax.php",
    data: { imgupload: true,baseimg:img },
    method: "POST",

    success: function (data) {
       console.log(data);
    },

    error: function (x, sts) {
      alert("Error...");
    },
  });
}
