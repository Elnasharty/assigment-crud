var productNameInput =document.getElementById('productNameInput')
var productUrlInput =document.getElementById('productUrlInput')

var productlist=[];


if(localStorage .getItem( "products" )!=null) {
    productlist = JSON.parse( localStorage.getItem( "products" ) )
displayData()
}

function addProduct(){
if(validationName() ,validationUrl()==true){
    var product= {
        name: productNameInput.value ,  
        url: productUrlInput.value,
                       }
       productlist.push(product);
       localStorage.setItem("products", JSON.stringify(productlist))
      clearform();
      displayData();
      console.log(productlist);
      productNameInput.classList.remove("is-valid")
}
}
function clearform(){
    productNameInput.value="";
    productUrlInput.value="";
}

function displayData(){
var cartona="";
for(var i=0 ; i< productlist.length        ;  i++ ){
cartona +=`   <tr>
<td> ${i}</td>
<td> ${productlist[i].name }</td>
<td><button  onclick=' location.href="${productlist[i].url }" ' class=" btn  text-center bg-info">Visit</button>  </td>
<td><button onclick="deletitem(${i})" class=" btn  text-center bg-danger">Delete</button></td>
             </tr>`
}
document.getElementById("tablebody") .innerHTML= cartona;
}
function deletitem(index){ 
    productlist.splice(index,1)
    localStorage.setItem("products", JSON.stringify(productlist))
    displayData()
}
function validationName(){
    var text  = productNameInput.value;
    var regexName =/^[A-a][a-z]{3,8}$/;
    if(  regexName.test(text) ==true){
        productNameInput.classList.add("is-valid");
        productNameInput.classList.remove("is-invalid");
        return true;
    }
    else{
productNameInput.classList.add("is-invalid");
productNameInput.classList.remove("is-valid");
return false;
    }
}


var nameMassage =document.getElementById('nameMassage')



function validationUrl(){
    var text  = productUrlInput.value;
    var regexName =/^https:www\.[a-z]{3,20}\.com$/;
    if(  regexName.test(text) ==true){
        productUrlInput.classList.add("is-valid");
        productUrlInput.classList.remove("is-invalid");
        nameMassage.classList.add('d-none')
        return true;
    }
    else{
productUrlInput.classList.add("is-invalid");
productUrlInput.classList.remove("is-valid");

nameMassage.classList.remove('d-none')
return false;
    }
}

