//var textarea=document.querySelector('.textarea').value;
//var btn=document.querySelector('.btn');
//var textfield=document.querySelector('.textfield')
//var i=1;
function addNotes(){
    //i++;
    //var textfield=document.querySelector('.textfield');
    var noteslist=document.querySelector('.notesList');
    var textarea=document.querySelector('.textarea').value;
    var note=document.createElement('div');
    
   // note.id="div"+i;
    var content=document.createTextNode(textarea);
    console.log(content)
    note.appendChild(content);
    note.style.display="inline-block";
    note.style.width='50%';
    note.style.background="lightblue";
    noteslist.appendChild(note);
    //console
    

  }