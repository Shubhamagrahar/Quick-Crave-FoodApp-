function showItems(category) {
    // Hide all menu items
    var menuItems = document.querySelectorAll('.restaurant-menu .menu-item');
    menuItems.forEach(item => item.style.display = 'none');

    // Show items based on the selected category
    var selectedItems = document.getElementById(category);
    if (selectedItems) {
        selectedItems.style.display = 'block';
    }

    // Calculate translation value for sliding effect
    var index = Array.from(document.querySelectorAll('.category li')).findIndex(item => item.textContent.toLowerCase() === category);
    var translationValue = -index * 100 + '%';

    // Apply sliding effect
    document.querySelector('.restaurant-menu').style.transform = 'translateX(' + translationValue + ')';
}