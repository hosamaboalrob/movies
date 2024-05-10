
var title = document.getElementById('title');
var edit = document.getElementById('edit');
var fileImg = document.getElementById('file');
var addMove = document.getElementById('addMove');
  var temp;

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
function upload_image_host() {
  var newProduct ={ 
    title:title.value,
}
  
  var id = idupimage;
   var image = localStorage.getItem("img");
   if (image != "" && newProduct.title != "") {
    var img = document.getElementById("file");
    var pushimage = { id,newProduct, image };
    upload_image.push(pushimage);
    localStorage.setItem("upload_image", JSON.stringify(upload_image));
    idupimage++;
    localStorage.setItem("idupimage", JSON.stringify(idupimage));
 
    console.log(upload_image);
    // print_image();
    img.style.color="white"
    title.value=" ";
     showData();
  } else {
    alert("Please enter full information");
  }
} 
 


 
function showData() {
 
  let table = '';
    var upload_image = JSON.parse(localStorage.getItem("upload_image"));

      for (let i = 0; i < upload_image.length; i++) {
         table +=`
         
                  <tr>
                      <td scope="row">${i+1}</td>
                      <td>${upload_image[i].newProduct.title}</td>
                       <td><img src= ${upload_image[i].image} /></td>
                       <td><button class="btn btn-danger" id="delete" onclick="Deleteimage(${upload_image[i].id})" >delete</button></td>
                       <td><button class="btn btn-light" id="update" onclick="updateMove(${upload_image[i].id})"   >update</button></td>
                  </tr>
 
         `
     
      }
      
      document.getElementById('tbody').innerHTML = table;
      
       
  }
  showData() ;
function Deleteimage(id) {
  for (var i = 0; i < upload_image.length; i++) {
    if (id == upload_image[i].id) {
      upload_image.splice(i, 1);

      localStorage.setItem("upload_image", JSON.stringify(upload_image));
      showData();
    }
  }
}
function updateMove(idedit){
   for (let i = 0; i < upload_image.length; i++) {
    if (idedit == upload_image[i].id) {
       console.log(upload_image[i].newProduct.title)
      title.value=upload_image[i].newProduct.title
      temp=idedit
      edit.style.display='block'
      fileImg.style.display='none'
      addMove.innerHTML= "Update Movie"

    }
 
  }

 }
 
 function newUpdate(id)
{
//   let newval;
  id=temp
//   console.log(id)
 newval = title.value

//  console.log(newval)
//  upload_image[temp]=newval;
for (var i = 0; i < upload_image.length; i++) {
  if (id == upload_image[i].id) {
     var res =upload_image[i].newProduct.title
     res=newval
     upload_image[i].newProduct.title=res
localStorage.setItem("upload_image", JSON.stringify(upload_image));
showData();
title.value = ''
fileImg.style.display="block"
edit.style.display='none'
addMove.innerHTML= "Add Movie"

 console.log(newval);
  }
}
  
}
 
