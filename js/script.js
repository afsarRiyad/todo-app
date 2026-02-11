let btn = document.querySelector('.btn')
let input = document.querySelector('.input')
let list = document.querySelector('.list')
let updateBtn = document.querySelector('.update')
let listItems = []
let uindex;

input.addEventListener('keydown', function(e){
    if(e.key === 'Enter'){
        if(btn.style.display === 'none'){
            update.click()
        }else{
            btn.click()
        }
}
})

btn.addEventListener('click', function(){
    let data = input.value 
    if(!data.trim()) return
    listItems.push(data)
  
    display()
  

    
})

function display(){
    
   list.innerHTML = ''
    for(let i = 0; i < listItems.length; i++){
        
        let items = listItems[i]
        list.innerHTML += `<li>${items} <button class= 'edit'>Edit</button> <button class= 'dlt'>Delete</button></li>`
         
        edit = document.querySelectorAll('.edit')
        let dlt = document.querySelectorAll('.dlt')

        Array.from(dlt).map((dltBtn, index) => {
          dltBtn.addEventListener('click', function(){
            listItems.splice(index, 1)
             display()
          })
         }) 
       
     Array.from(edit).map((editBtn, index) =>{
      editBtn.addEventListener('click', function(){
       input.value = listItems[index] 
        input.focus()
        updateBtn.style.display = 'inline-block'
         btn.style.display = 'none'
         uindex = index;
     })
  })

        input.value = '';
         
    }
}

updateBtn.addEventListener('click', function(){
     if(!input.value.trim()) return
         listItems[uindex] = input.value
         updateBtn.style.display = 'none'
         btn.style.display = 'inline-block'
         display()
     })
