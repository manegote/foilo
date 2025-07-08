// Projects page functionality

document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("search");
  const statusSelect = document.getElementById("status");
  const categorySelect = document.getElementById("category");
  const clearFiltersBtn = document.getElementById("clearFilters");
  const filterResults = document.querySelector(".filter-results");
  const projectCards = document.querySelectorAll(".project-card");

  // Filter functionality
  function filterProjects() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedStatus = statusSelect.value;
    const selectedCategory = categorySelect.value;

    let visibleCount = 0;

    projectCards.forEach((card) => {
      const title = card
        .querySelector(".project-title a")
        .textContent.toLowerCase();
      const description = card
        .querySelector(".project-description")
        .textContent.toLowerCase();
      const tags = Array.from(card.querySelectorAll(".tag")).map((tag) =>
        tag.textContent.toLowerCase(),
      );
      const status = card.dataset.status;
      const category = card.dataset.category;

      const matchesSearch =
        searchTerm === "" ||
        title.includes(searchTerm) ||
        description.includes(searchTerm) ||
        tags.some((tag) => tag.includes(searchTerm));

      const matchesStatus = selectedStatus === "" || status === selectedStatus;
      const matchesCategory =
        selectedCategory === "" || category === selectedCategory;

      const isVisible = matchesSearch && matchesStatus && matchesCategory;

      card.style.display = isVisible ? "block" : "none";

      if (isVisible) {
        visibleCount++;
      }
    });

    // Update results display
    const hasFilters =
      searchTerm !== "" || selectedStatus !== "" || selectedCategory !== "";
    const resultsCount = document.querySelector(".results-count");

    if (hasFilters) {
      filterResults.style.display = "flex";
      resultsCount.textContent = `Showing ${visibleCount} of ${projectCards.length} projects`;
    } else {
      filterResults.style.display = "none";
    }

    // Update stats
    updateStats(visibleCount);
  }

  function updateStats(visibleCount) {
    const statsNumbers = document.querySelectorAll(".stat-number");
    if (statsNumbers.length >= 4) {
      statsNumbers[3].textContent = visibleCount; // Currently Showing
    }
  }

  function clearFilters() {
    searchInput.value = "";
    statusSelect.value = "";
    categorySelect.value = "";
    filterResults.style.display = "none";

    projectCards.forEach((card) => {
      card.style.display = "block";
    });

    updateStats(projectCards.length);
  }

  // Event listeners
  searchInput.addEventListener("input", filterProjects);
  statusSelect.addEventListener("change", filterProjects);
  categorySelect.addEventListener("change", filterProjects);
  clearFiltersBtn.addEventListener("click", clearFilters);

  // Tag click functionality
  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("tag")) {
      const tagText = e.target.textContent.replace("#", "");
      searchInput.value = tagText;
      filterProjects();
    }
  });

  console.log("Projects page functionality loaded");
});
