document.addEventListener("DOMContentLoaded", () => {
    const menuContainer = document.getElementById('menu-items');
    const categories = {};

    menuItems.forEach(item => {
        if (!categories[item.category]) {
            categories[item.category] = [];
        }
        categories[item.category].push(item);
    });

    for (let category in categories) {
        const categoryHeader = document.createElement('p');
        categoryHeader.textContent = category;
        menuContainer.appendChild(categoryHeader);

        categories[category].forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.className = 'menu-item';

            menuItem.innerHTML = `
                <h2>${item.name}</h2>
                <p class="price">${item.price}</p>
            `;

            menuContainer.appendChild(menuItem);
        });
    }
});
