
var title = document.getElementById('title');

 

var idupimage = JSON.parse(localStorage.getItem("idupimage"));
if (idupimage === null) {
  idupimage = [];
  var idupimage = 0;
  localStorage.setItem("idupimage", JSON.stringify(idupimage));
}

var upload_image = JSON.parse(localStorage.getItem("upload_image"));
if (upload_image === null) {
  upload_image = [];
  localStorage.setItem("upload_image", JSON.stringify(upload_image));
}

document.querySelector("#file").addEventListener("change", function () {
 
  var img = document.getElementById("file");
  const reader = new FileReader();

  reader.addEventListener("load", () => {
    console.log(reader.result);
    localStorage.setItem("img", reader.result);
  });
  reader.readAsDataURL(img.files[0]);
});

document.getElementById("file").addEventListener("change", settime);

function settime() {
  setTimeout(upload_image_host(), 5000);
  console.log("sa");
}
var dataProduct;
 

function showData() {
   document.getElementById("image_grid").innerHTML = " ";
  var upload_image = JSON.parse(localStorage.getItem("upload_image"));
   for (let i = 0; i < upload_image.length; i++) {
    var prinf =
      `
    <div class="box">
    <img src="` +
      upload_image[i].image +
      `" alt="" />
      <p>`+ upload_image[i].newProduct.title +`</p>
     
  </div>`;
    document.getElementById("image_grid").innerHTML += prinf;
  }
}
showData();
 