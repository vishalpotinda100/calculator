var result=document.getElementById("result");

var buttons=document.querySelectorAll(".btn");

var cancel=document.getElementById("c");

var backspace=document.getElementById("ce");

var equal=document.getElementById("equal");

cancel.addEventListener('click',function(){
    result.textContent="";
})
backspace.addEventListener('click',function(){
    let back=result.textContent;
    result.textContent=back.substr(0,back.length-1);
})
buttons.forEach(function(button){
    button.addEventListener('click',function(event){
        let selectItem=event.target.id;
        result.textContent +=selectItem;
    })
})
equal.addEventListener('click',function(){
    var output=result.textContent;
    result.textContent=eval(output);
})




















// cancel.addEventListener('click',function(){
//     result.textContent="";
// });

// backspace.addEventListener('click',function(){
// var back=result.textContent;
// result.textContent=back.substr(0,back.length-1);
// });

// buttons.forEach(function(button){
//     button.addEventListener('click',function(e){
//         let sel=e.target.id;
//         result.textContent+=sel;
        
//     })
//   })

//   equal.addEventListener('click',function(){
//       let output=result.textContent;

//       result.textContent=eval(output);
//   })

