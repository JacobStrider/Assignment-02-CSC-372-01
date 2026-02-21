document.addEventListener("DOMContentLoaded", () => {
    const dishCards = document.querySelectorAll(".dish-card");

    // Favorites Section
    const favoritesSection = document.createElement("section");
    favoritesSection.id = "favorites-section";

    const title = document.createElement("h2");
    title.textContent = "My Favorites";

    const favoritesList = document.createElement("ul");
    favoritesList.id = "favorites-list";

    const totalDisplay = document.createElement("p");
    totalDisplay.id = "favorites-total";
    totalDisplay.textContent = "Total: $0.00";

    favoritesSection.appendChild(title);
    favoritesSection.appendChild(favoritesList);
    favoritesSection.appendChild(totalDisplay);

    document.body.appendChild(favoritesSection);

    let totalPrice = 0;

    dishCards.forEach(card => {

        const name = card.dataset.name;
        const price = parseFloat(card.dataset.price);

        // Price Tag
        const priceTag = document.createElement("p");
        priceTag.textContent = `$${price.toFixed(2)}`;
        priceTag.classList.add("price-tag");

        // Create Button
        const button = document.createElement("button");
        button.textContent = "Add to Favorites";
        button.classList.add("favorite-btn");

        card.appendChild(priceTag);
        card.appendChild(button);

        let isFavorite = false;
        let listItem = null;

        button.addEventListener("click", () => {

            if (!isFavorite) {
                // Add to Favorites
                card.classList.add("favorited");
                button.textContent = "Remove from Favorites";

                listItem = document.createElement("li");
                listItem.textContent = `${name} - $${price.toFixed(2)}`;
                favoritesList.appendChild(listItem);

                totalPrice += price;
                updateTotal();

                isFavorite = true;

            } else {
                // Remove from Favorites
                card.classList.remove("favorited");
                button.textContent = "Add to Favorites";

                favoritesList.removeChild(listItem);

                totalPrice -= price;
                updateTotal();

                isFavorite = false;

            }
        });
    });

    function updateTotal() {
        totalDisplay.textContent = `Total: $${totalPrice.toFixed(2)}`;
    }
});