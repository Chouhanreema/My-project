function show() {
    alert('hello');
}
function addRow()
{
   // alert('hello');
    var Name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var website=document.getElementById("website").value;
    var imagelink=document.getElementById("imagelink").value;
    var gender=document.querySelector('input[type="radio"]:checked').value;
    var skill=document.querySelector('input[type="checkbox"]:checked').value;
      /*var skill1=document.getElementById("skill1").value;
      var skill2=document.getElementById("skill2").value;
       var skill3=document.getElementById("skill3").value;
       let checkval = [];
        if (skill1.checked){
        checkval.push(skill1.value);
        }
        if (skill2.checked){
            checkval.push(skill2.value);
        }
        if (skill3.checked){
            checkval.push(skill3.value);
        }*/
    
      

    var x=document.createElement("tr");

    x.innerHTML=`<td><p>${Name}</p><p>${email}</p><p>${gender}</p><p><a href="website" target="_blank">${website}</a></p><p>${x}</p>
    <p>${skill}</p></td>
    <td><img src="${imagelink}"></td>`;

    document.getElementById("table").appendChild(x);
}
function load(){
    console.log("page load finished");
}