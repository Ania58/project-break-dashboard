const hour = document.getElementById('hour');
const date = document.getElementById('date');
const message = document.getElementById('message');

const getHour = () => {
    let currentDate = new Date();
    const options = {
        hour: '2-digit',
        minute: '2-digit',
        second : '2-digit',
        hour12: false
    };
    const dateEnglishBritain = currentDate.toLocaleDateString('en-GB');
    
    date.innerHTML = dateEnglishBritain;
    
    return currentDate.toLocaleTimeString('en-GB',options);

}

const updateTime = () => {
    const currentTime = new Date ();
    const update = getHour();
    hour.innerHTML = update

    let currentMessage = '';

    if (currentTime.getHours() >=0 && currentTime.getHours() < 7) {
        currentMessage = 'Es hora de descansar. Apaga y sigue mañana';
    } else if (currentTime.getHours() >=7 && currentTime.getHours() < 12) {
        currentMessage = 'Buenos días, desayuna fuerte y a darle al código';
    } else if (currentTime.getHours() >=12 && currentTime.getHours() < 14) {
        currentMessage = 'Echa un rato más pero no olvides comer';
    } else if (currentTime.getHours() >=14 && currentTime.getHours() < 16) {
        currentMessage = 'Espero que hayas comido';
    } else if (currentTime.getHours() >=16 && currentTime.getHours() < 18) {
        currentMessage = 'Buenas tardes, el último empujón';
    } else if (currentTime.getHours() >=18 && currentTime.getHours() < 20) {
        currentMessage = 'Esto ya son horas extras, ... piensa en parar pronto';
    } else {
        currentMessage = 'Buenas noches, es hora de pensar en parar y descansar';
    }
    message.innerHTML = currentMessage;

}

getHour();
setInterval(updateTime,1000);



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