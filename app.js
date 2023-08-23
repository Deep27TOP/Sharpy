 //document.addEventListener('DOMContentLoaded', ()=> {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let date = document.getElementById("date").value;
  let time = document.getElementById("time").value;
  
  let submitted = document.getElementById("format");
  
  submitted.addEventListener("submit", showSaved);
  
  
  function showSaved(e) {
    e.preventDefault();
  
    let nameOBJ = e.target.name.value;
    let emailOBJ = e.target.email.value;
    let phoneOBJ = e.target.phone.value;
    let dateOBJ= e.target.date.value;
    let timeOBJ= e.target.time.value;
    
    
    let details = {
      nameOBJ, emailOBJ, phoneOBJ, dateOBJ , timeOBJ
    };
  
    localStorage.setItem(details.emailOBJ,JSON.stringify(details));
  
    let saved = document.getElementById("saved-data");
      // Saved is the ordered list
    let list = document.createElement("li");
     //  List is the li element that will be created in it
    list.className = "saved";
  
    var delbutton = document.createElement("button");
    delbutton.className = "btn-delete";
    delbutton.id = "remove";
    delbutton.appendChild(document.createTextNode("Remove"));
    delbutton.style.cssText= 'border-radius: 18px; margin: 10px; padding:4px 10px; border: 4px solid black; color: white; background: rgb(225 0 40)';
    delbutton.addEventListener("click", removeFunction);
  
    var editbutton = document.createElement("button");
    editbutton.className = "edit-button";
    editbutton.id = "edit";
    editbutton.appendChild(document.createTextNode("Edit Info"));
    editbutton.style.cssText= 'border-radius: 18px; margin: 10px; padding: 4px 10px; border: 4px solid black; color: black; background: rgb(50, 216, 238)';
    editbutton.addEventListener("click", edit);
    
    list.append (nameOBJ+ " "+ emailOBJ, " "+phoneOBJ, " ", dateOBJ, " ", timeOBJ, editbutton, delbutton);
    saved.appendChild(list);
  
  
  function removeFunction(e) {
  
    if(e.target.classList.contains('btn-delete'))
    {
      localStorage.removeItem(details.emailOBJ);
      e.target.parentNode.remove()  
      // (Here parentNode means the
      //  parent of the delete button)
    }
  }
  
  function edit(e){
          // We didn't use if(e.target...)
          // here and still it does the same role
    
          e.target.parentNode.remove(); 
    let retrieve= JSON.parse(localStorage.getItem(details.emailOBJ) );
    localStorage.removeItem(details.emailOBJ)
    
      document.getElementById("name").value= retrieve.nameOBJ;
      document.getElementById("email").value=retrieve.emailOBJ;
      document.getElementById("phone").value=retrieve.phoneOBJ;
      document.getElementById("date").value= retrieve.dateOBJ;
      document.getElementById("time").value= retrieve.timeOBJ;
    
  }
  
  // e.target.name.value='';     e.target.email.value=''; 
  // e.target.phone.value='';    e.target.date.value='';
  // e.target.time.value='';
  
  };
  