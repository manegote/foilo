// Projects page functionality

document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("search");
  const statusSelect = document.getElementById("status");
  const categorySelect = document.getElementById("category");
  const clearFiltersBtn = document.getElementById("clearFilters");
  const filterResults = document.querySelector(".filter-results");
  const projectCards = document.querySelectorAll(".project-card");

  // Add status icons to existing badges
  addStatusIcons();

  // Filter functionality
  function filterProjects() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedStatus = statusSelect.value;
    const selectedCategory = categorySelect.value;

    let visibleCount = 0;

    projectCards.forEach((card) => {
      const title = card
        .querySelector(".project-title")
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

  function addStatusIcons() {
    document.querySelectorAll(".badge").forEach((badge) => {
      const text = badge.textContent.trim();
      let icon = "";

      if (text === "COMPLETED") {
        icon =
          '<svg class="badge-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>';
      } else if (text === "IN PROGRESS") {
        icon =
          '<svg class="badge-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>';
      } else if (text === "PLANNING") {
        icon =
          '<svg class="badge-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>';
      } else if (text === "PAUSED") {
        icon =
          '<svg class="badge-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>';
      }

      if (icon) {
        badge.innerHTML = icon + text;
      }
    });
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
