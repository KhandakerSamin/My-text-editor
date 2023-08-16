document.getElementById('btn-bold').addEventListener('click',function(){
    const textArea = document.getElementById('text-input');
    textArea.setAttribute('class','font-bold');
})
document.getElementById('btn-italic').addEventListener('click',function(){
    const textArea = document.getElementById('text-input');
    textArea.setAttribute('class','italic');
})
document.getElementById('btn-underline').addEventListener('click',function(){
    const textArea = document.getElementById('text-input');
    textArea.setAttribute('class','underline');
})
document.getElementById('btn-left').addEventListener('click',function(){
    const textArea = document.getElementById('text-input');
    textArea.setAttribute('class','text-left');
})
document.getElementById('btn-right').addEventListener('click',function(){
    const textArea = document.getElementById('text-input');
    textArea.setAttribute('class','text-right');
})
document.getElementById('btn-center').addEventListener('click',function(){
    const textArea = document.getElementById('text-input');
    textArea.setAttribute('class','text-center');
})
document.getElementById('btn-justify').addEventListener('click',function(){
    const textArea = document.getElementById('text-input');
    textArea.setAttribute('class','text-justify');
})

document.getElementById('font-input').addEventListener('input',function(){
    const textArea = document.getElementById('text-input');
    const fontInput = document.getElementById('font-input');
    const fontInputValue = fontInput.value ;
    console.log(fontInputValue)
    // textArea.setAttribute('class',text(fontInputValue));
})