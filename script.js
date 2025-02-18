
document.addEventListener("DOMContentLoaded", () => {
    const menuContainer = document.getElementById('menu-items');
    const categorySelect = document.getElementById('category-select');
    const categories = {};

    menuItems.forEach(item => {
        if (!categories[item.category]) {
            categories[item.category] = [];
            const option = document.createElement('option');
            option.value = item.category;
            option.textContent = item.category;
            categorySelect.appendChild(option);
        }
        categories[item.category].push(item);
    });

    function displayMenuItems(category) {
        menuContainer.innerHTML = '';
    
        if (category === 'all') {
            Object.keys(categories).forEach(categoryName => {
                const categoryHeader = document.createElement('h2');
                categoryHeader.textContent = categoryName;
                categoryHeader.className = 'category-header'; // ใช้คลาสที่เพิ่มไว้
                menuContainer.appendChild(categoryHeader);
    
                categories[categoryName].forEach(item => {
                    const menuItem = document.createElement('div');
                    menuItem.className = 'menu-item';
    
                    menuItem.innerHTML = `
                        <h3>${item.name}</h3>
                        <p class="price">${item.price}</p>
                        <footer>${item.description}</footer>
                    `;
    
                    menuContainer.appendChild(menuItem);
                });
            });
        } else {
            const categoryHeader = document.createElement('h2');
            categoryHeader.textContent = category;
            categoryHeader.className = 'category-header'; // ใช้คลาสที่เพิ่มไว้
            menuContainer.appendChild(categoryHeader);
    
            categories[category].forEach(item => {
                const menuItem = document.createElement('div');
                menuItem.className = 'menu-item';
    
                menuItem.innerHTML = `
                    <h3>${item.name}</h3>
                    <p class="price">${item.price}</p>
                    <footer>${item.description}</footer>
                `;
    
                menuContainer.appendChild(menuItem);
            });
        }
    }
    

    categorySelect.addEventListener('change', (event) => {
        displayMenuItems(event.target.value);
    });

    displayMenuItems('all');
});
