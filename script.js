// bold,italic,underline

document.getElementById('btn-bold').addEventListener('click',function(){
    const textArea = document.getElementById('text-input');
    textArea.style.fontWeight= 'bold';
})
document.getElementById('btn-italic').addEventListener('click',function(){
    const textArea = document.getElementById('text-input');
    textArea.style.fontStyle='italic';
})
document.getElementById('btn-underline').addEventListener('click',function(){
    const textArea = document.getElementById('text-input');
    textArea.style.textDecoration = "underline";
})

// Text Align :

document.getElementById('btn-left').addEventListener('click',function(){
    const textArea = document.getElementById('text-input');
    textArea.style.textAlign='left';
})
document.getElementById('btn-right').addEventListener('click',function(){
    const textArea = document.getElementById('text-input');
    textArea.style.textAlign='right';
})
document.getElementById('btn-center').addEventListener('click',function(){
    const textArea = document.getElementById('text-input');
    textArea.style.textAlign='center';
})
document.getElementById('btn-justify').addEventListener('click',function(){
    const textArea = document.getElementById('text-input');
    textArea.style.textAlign='justify';
})


// font size change

document.getElementById('font-input').addEventListener('input',function(){
    const textArea = document.getElementById('text-input');
    const fontInput = document.getElementById('font-input');
    const fontInputValue = fontInput.value ;
    textArea.style.fontSize=fontInputValue+'px';
})

// font color change

document.getElementById('color-input').addEventListener('input',function(){
    const textArea = document.getElementById('text-input');
    const fontInput = document.getElementById('color-input');
    const colorInputValue = fontInput.value ;
    textArea.style.color=colorInputValue;
})