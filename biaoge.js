window.onload=function(){
    let table=document.querySelector('tbody');
    let add= document.querySelector('.add');
    let student=[
        {name:'张一',age:18,sex:'男',tel:123456,address:'山西'},
        {name:'张二',age:18,sex:'男',tel:123456,address:'山西'},
        {name:'张三',age:18,sex:'男',tel:123456,address:'山西'},
        {name:'张四',age:18,sex:'男',tel:123456,address:'山西'}
    ]

    add.onclick=function(){
        student.forEach((element,index)=>{
        let trs = document.createElement('tr');
        trs.innerHTML=`
         <td>${student[index].name}</td>
         <td>${student[index].age}</td>
         <td>${student[index].sex}</td>
         <td>${student[index].tel}</td>
         <td>${student[index].address}</td>
         <td><button class="del">删除</button></td>
        `
        table.appendChild(trs)
    })

    }



   table.addEventListener('dblclick',function(e){
       let element = e.target;
       let oldv = element.innerText;
       if(element.nodeName=='TD' && element.className!='del'){
           element.innerText=null;
           let input = document.createElement('input');
           input.value=oldv;
           element.appendChild(input)
           input.onblur=function(){
               let newv=input.value;
               element.removeChild(input);
               element.innerHTML=newv;
               if(newv){
                   element.innerHTML=newv;
               }else{
                   element.innerHTML=oldv;

               }
           }
       }



   })


table.addEventListener('click',function(e){

    let element = e.target;
 if (element.className=='del') {
     let trs = element.parentNode.parentNode;
     table.removeChild(trs);
    }
})


}