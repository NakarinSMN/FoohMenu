
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
        const items = category === 'all' ? menuItems : categories[category];
        items.forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.className = 'menu-item';

            menuItem.innerHTML = `
                <h2>${item.name}</h2>
                <p class="price">${item.price}</p>
                <footer>${item.description}</footer>
            `;
            
            menuContainer.appendChild(menuItem);
        });
    }

    categorySelect.addEventListener('change', (event) => {
        displayMenuItems(event.target.value);
    });

    displayMenuItems('all');
});
