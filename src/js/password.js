
const getRandomCharacters = () => {
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+'.split('')
const randomCharacter = Math.floor(Math.random() * characters.length);
return characters[randomCharacter];
}

const simbolos = ['!','@','#','$','%','^','&','*','(',')','-','_','=','+']
console.log(simbolos[3]);

const generatePassword = (length) => {
    let result = '';
    const arr = [["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],[0, 1, 2, 3, 4, 5, 6, 7, 8, 9],['!','@','#','$','%','^','&','*','(',')','-','_','=','+']]
        for (let i = 0; i < arr.length; i++) {
            console.log(arr[i].length);
            const charactersLength = arr[i].length;
            const randomNumber = Math.floor(Math.random() * charactersLength);
            result += arr[i][randomNumber]
        }
        
        console.log(result)
    
    for (let i = 4; i < length; i++) {
        result += getRandomCharacters();
    }
    return result;
}


/*console.log(generatePassword(12,50));*/


const generatePasswordBtn = document.getElementById('generator');

generatePasswordBtn.addEventListener('click', () => {
    const lengthInput = document.getElementById('number').value;
    const length = parseInt(lengthInput);
    if (length < 12 || length > 50) {
        return
    }
     const password = generatePassword(length);
     document.getElementById('passwordDisplay').innerHTML = `<p class="password-text">Contraseña Generada: </p> 
     <p class="password-result"> ${password} </p>`;
 
});


const pics = [
    "https://images.unsplash.com/photo-1542224566-6e85f2e6772f?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1536649986370-e623f6c7c1e1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1536649986370-e623f6c7c1e1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1720163275578-06b7e2bfc4e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1720519610178-141f9777e9de?q=80&w=1954&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1720508809884-a970ac71aaca?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1720491591781-93404ad84f43?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1667912186734-67897f1db55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1696975228576-f528d748f5a6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1720446983011-676d6db92a03?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1720312550294-db7104f96a6c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1720210613441-7c5e33beaa01?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1719370281932-299f40a5d8ee?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ]; 
        const pic = document.querySelector('body'); 
  
        function showImage() { 
            const a = Math.floor(Math.random() * pics.length); 
            const img = pics[a]; 
            document.body.style.backgroundImage = `url(${img})`; 
        } 
  
        setInterval(showImage, 15000); 