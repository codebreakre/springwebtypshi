export function changemode(){
    let currentColor=getComputedStyle(document.documentElement).getPropertyValue('--background-color').trim();
    if(currentColor==='whitesmoke'){
        currentColor='black';
        document.documentElement.style.setProperty('--background-color', currentColor);
        document.documentElement.style.setProperty('--text-color', 'white');  
    }else{
        currentColor='whitesmoke';
        document.documentElement.style.setProperty('--background-color', currentColor);
        document.documentElement.style.setProperty('--text-color', 'black');   
    }
}