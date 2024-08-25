let myInput = document.querySelector('.inp');
let listcont=document.querySelector('.list-cont')
let Filter=document.querySelector('.Filter')
let span2=document.createElement('span')
let search=document.querySelector('.sear')
let arr=[]

function addtask(){
    if(myInput.value===''){
        alert("please enter something")
    }
    else{
        let li=document.createElement('li')
        li.draggable=true
       
        listcont.appendChild(li)
        let para=document.createElement('p')
        para.textContent=myInput.value
        arr.push(para.textContent)
        console.log(arr)
        li.appendChild(para)
        let div=document.createElement('div')
        div.classList.add('right')
        let span=document.createElement('i')
        let icon=document.createElement('i')
        span.innerHTML = ' \u00d7';
        icon.classList.add('ri-edit-2-fill')
        // span2.innerHTML='<i class="ri-edit-2-fill"></i>' 
        div.appendChild(icon)
        div.appendChild(span)
        li.appendChild(div)
        
       
    }
    myInput.value=""

}



listcont.addEventListener("click",(e)=>{
  
  if(e.target.tagName==="LI"){
    e.target.classList.toggle('checked')
    e.target.querySelector('p').classList.toggle("line")
  }
  else if (e.target.textContent.trim() === '\u00d7') {
    e.target.parentElement.parentElement.remove()
  }
  else if(e.target.classList.contains('ri-edit-2-fill')){
   console.log("hi")
   let pText = e.target.parentElement.parentElement.querySelector('p').textContent;
    myInput.value=pText
    myInput.focus();
   e.target.parentElement.parentElement.remove()
  }
 
})




Filter.addEventListener('click', () => {
    let liElements = listcont.querySelectorAll('li');

    for (let i = 0; i < liElements.length; i++) {
        if (liElements[i].classList.contains("checked")) {
          
            liElements[i].remove();
          listcont.appendChild(liElements[i])        }
    }
});






function dragAndDrop() {
  let draggedElement;
  let draggedIndex;

  listcont.addEventListener('dragstart', (e) => {
    if (e.target.tagName === 'LI') {
      draggedElement = e.target;
    } else if (e.target.closest('LI')) {
      draggedElement = e.target.closest('LI');
    }
    draggedIndex = Array.from(listcont.children).indexOf(draggedElement);
  
  });

  listcont.addEventListener('dragover', (e) => {
    e.preventDefault();
  });

  listcont.addEventListener('drop', (e) => {
    e.preventDefault();
    if (draggedElement) {
      let dropIndex;
      let targetElement = e.target.closest('LI');
      if (targetElement) {
        dropIndex = Array.from(listcont.children).indexOf(targetElement);
      } else {
        // If drop occurs outside any <li>, consider dropping at the end
        dropIndex = listcont.children.length - 1;
       
      }
      if (draggedIndex !== dropIndex) {
        if (dropIndex > draggedIndex) {
          listcont.insertBefore(draggedElement, listcont.children[dropIndex].nextSibling);
        } else {
          listcont.insertBefore(draggedElement, listcont.children[dropIndex]);
        }
      }
      draggedElement = null;
    }
  });
}





dragAndDrop();




