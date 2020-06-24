
const copy = (txt,succes,error) => {
    navigator.clipboard 
        ? asycCopy(txt,succes,error)
        : fallbackCopy(txt,succes,error);
}

const asycCopy = (txt,succes,error) => {
    console.log('async copy')
    navigator.clipboard.writeText(txt)
        .then(() =>{
            succes()
        },(err) =>{
            fallbackCopy(txt,succes,error)
        });
}

const fallbackCopy = (txt,succes,error) => {
    console.log('fallback copy')
    const textArea = document.createElement("textarea");
    textArea.value = txt;
    textArea.classList.add('js-text-area')
    document.body.appendChild(textArea);

    textArea.focus()
    textArea.select();
    
    document.execCommand('copy');
    try {
        let successful = document.execCommand('copy');
        successful ? succes() : error()
    }catch(err){
        error()
    }
    document.body.removeChild(textArea);
}


export {copy,asycCopy,fallbackCopy}