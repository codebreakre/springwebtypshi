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
//ene theme solidog function bichsen baigaa. ta 2 bichsn css deeree ene variable iig utga hesg deer ni onoogood uguhud l bolno.
//tgeed uursdiin pagetei holbootoi javascript file deer idevhjuuleed ugnu.