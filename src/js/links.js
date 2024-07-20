const linkNameInput = document.getElementById('link-name');
const urlAddressInput = document.getElementById('url-path');
const addLinkBtn = document.getElementById('add-link');
const linksContainer = document.getElementById('links-container');




/*addLinkBtn.addEventListener('click', () => {
    const linkName = linkNameInput.value;
    const urlAddress = urlAddressInput.value;
    if (linkName && urlAddress) {
        const newLink = document.createElement('a');
        newLink.href = urlAddress;
        newLink.target = '_blank';
        newLink.textContent = linkName;
        
        const listItem = document.createElement('li');
        listItem.appendChild(newLink);
        linksContainer.appendChild(listItem);

        linkNameInput.value = '';
        urlAddressInput.value = '';
        

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';
        listItem.appendChild(deleteButton);


        deleteButton.addEventListener('click', () => {
        listItem.remove()
        });

        const inputAdded = [
            {
                name: linkName,
                url: urlAddress
            }
        ];

        localStorage.setItem('links',JSON.stringify(inputAdded));

        const displayUserPage = () => {
            const storedLinksData = localStorage.getItem('links')

            if (storedLinksData) {
            const linksData = JSON.parse(storedLinksData) || [];
            linkNameInput.textContent = storedLinksData[0];
            
            } else {
            console.log('User links not found in local storage')
            }
        }

        displayUserPage();

    } else {
        console.log('Please write a name and an URL');
    }
       
});*/

const addLinkToDOM = (linkName, urlAddress) => {
    const newLink = document.createElement('a');
    newLink.href = urlAddress;
    newLink.target = '_blank';
    newLink.textContent = linkName;

    const listItem = document.createElement('li');
    listItem.appendChild(newLink);
    linksContainer.appendChild(listItem);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    listItem.appendChild(deleteButton);

    deleteButton.addEventListener('click', () => {
        listItem.remove();
        // Update localStorage after removal
        let updatedLinks = JSON.parse(localStorage.getItem('links')) || [];
        updatedLinks = updatedLinks.filter(link => link.url !== urlAddress);
        localStorage.setItem('links', JSON.stringify(updatedLinks));
    });
};

// Function to load and display links from localStorage
const displayUserPage = () => {
    const storedLinksData = localStorage.getItem('links');
    if (storedLinksData) {
        const linksData = JSON.parse(storedLinksData) || [];
        linksData.forEach(link => {
            addLinkToDOM(link.name, link.url);
        });
    } else {
        console.log('User links not found in local storage');
    }
};

window.addEventListener('load', displayUserPage);

addLinkBtn.addEventListener('click', () => {
    const linkName = linkNameInput.value;
    const urlAddress = urlAddressInput.value;
    if (linkName && urlAddress) {
        addLinkToDOM(linkName, urlAddress);

        // Retrieve, update, and save to localStorage
        let existingLinks = JSON.parse(localStorage.getItem('links')) || [];
        existingLinks.push({ name: linkName, url: urlAddress });
        localStorage.setItem('links', JSON.stringify(existingLinks));

        // Clear inputs after updating localStorage
        linkNameInput.value = '';
        urlAddressInput.value = '';
    } else {
        console.log('Please write a name and an URL');
    }
});






const pics = [
    "https://images.unsplash.com/photo-1542224566-6e85f2e6772f?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1536649986370-e623f6c7c1e1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1592035659284-3b39971c1107?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvc21vc3xlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1536649986370-e623f6c7c1e1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1720163275578-06b7e2bfc4e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1720519610178-141f9777e9de?q=80&w=1954&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1464802686167-b939a6910659?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvc21vc3xlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1720508809884-a970ac71aaca?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1720491591781-93404ad84f43?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1667912186734-67897f1db55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1516571748831-5d81767b788d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1696975228576-f528d748f5a6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1720446983011-676d6db92a03?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1614926037384-4159c33e196b?q=80&w=1892&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1720312550294-db7104f96a6c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1720210613441-7c5e33beaa01?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1719370281932-299f40a5d8ee?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ]; 
        const pic = document.querySelector('body'); 
  
        function showImage() { 
            const randomPic = Math.floor(Math.random() * pics.length); 
            const img = pics[randomPic]; 
            document.body.style.backgroundImage = `url(${img})`; 
        } 
  
        setInterval(showImage, 15000); 