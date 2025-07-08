// Blog page functionality

document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("search");
  const categorySelect = document.getElementById("category");
  const tagSelect = document.getElementById("tag");
  const blogCards = document.querySelectorAll(".blog-card");

  // Filter functionality
  function filterPosts() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = categorySelect.value;
    const selectedTag = tagSelect.value;

    let visibleCount = 0;

    blogCards.forEach((card) => {
      const title = card
        .querySelector(".blog-title a")
        .textContent.toLowerCase();
      const summary = card
        .querySelector(".blog-summary")
        .textContent.toLowerCase();
      const tags = Array.from(card.querySelectorAll(".tag")).map((tag) =>
        tag.textContent.replace("#", ""),
      );
      const category = card.dataset.category;

      const matchesSearch =
        searchTerm === "" ||
        title.includes(searchTerm) ||
        summary.includes(searchTerm) ||
        tags.some((tag) => tag.toLowerCase().includes(searchTerm));

      const matchesCategory =
        selectedCategory === "" || category === selectedCategory;
      const matchesTag = selectedTag === "" || tags.includes(selectedTag);

      const isVisible = matchesSearch && matchesCategory && matchesTag;

      card.style.display = isVisible ? "block" : "none";

      if (isVisible) {
        visibleCount++;
      }
    });

    // Update stats
    updateStats(visibleCount);
  }

  function updateStats(visibleCount) {
    const statsNumbers = document.querySelectorAll(".stat-number");
    if (statsNumbers.length >= 3) {
      statsNumbers[2].textContent = visibleCount; // Currently Showing
    }
  }

  // Event listeners
  searchInput.addEventListener("input", filterPosts);
  categorySelect.addEventListener("change", filterPosts);
  tagSelect.addEventListener("change", filterPosts);

  // Tag click functionality
  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("tag")) {
      const tagText = e.target.textContent.replace("#", "");
      tagSelect.value = tagText;
      filterPosts();
    }
  });

  console.log("Blog page functionality loaded");
});
