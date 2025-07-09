// Gallery page functionality

// Gallery data for modal functionality
const galleryData = {
  "bms-pcb-top": {
    title: "BMS PCB Top Layer",
    description:
      "Top layer view of custom Battery Management System PCB with protection circuits and balancing",
    url: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
    tags: ["#PCB", "#BMS", "#Battery", "#Protection"],
  },
  "load-tester-board": {
    title: "Load Tester Control Board",
    description:
      "Arduino-based control board for the lithium battery pack load tester",
    url: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop",
    tags: ["#PCB", "#Arduino", "#Testing", "#Control"],
  },
  "welder-controller-pcb": {
    title: "Spot Welder Controller PCB",
    description:
      "High-voltage isolation PCB for spot welder timing control with optoisolated drivers",
    url: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800&h=600&fit=crop",
    tags: ["#PCB", "#Welding", "#Isolation", "#Safety"],
  },
  "battery-assembly-station": {
    title: "Battery Pack Assembly Station",
    description:
      "Complete workstation setup for lithium battery pack assembly with spot welder and testing equipment",
    url: "https://images.unsplash.com/photo-1609392553633-ba5e73b09cca?w=800&h=600&fit=crop",
    tags: ["#Assembly", "#Workstation", "#Battery", "#Tools"],
  },
  "reflow-oven-interior": {
    title: "Reflow Oven Interior View",
    description:
      "Interior view of converted toaster oven showing temperature sensor placement and heating elements",
    url: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=800&h=600&fit=crop",
    tags: ["#Reflow", "#Temperature", "#SMD", "#Assembly"],
  },
  "cell-testing-setup": {
    title: "Battery Cell Testing Setup",
    description:
      "Individual cell testing and characterization setup with load tester and data logging",
    url: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=800&h=600&fit=crop",
    tags: ["#Testing", "#Battery", "#Characterization", "#Data"],
  },
  "lithium-cells-18650": {
    title: "High-Quality 18650 Lithium Cells",
    description:
      "Premium 18650 lithium-ion cells used in custom battery pack construction",
    url: "https://images.unsplash.com/photo-1609392553633-ba5e73b09cca?w=800&h=600&fit=crop",
    tags: ["#Battery", "#18650", "#Lithium", "#Components"],
  },
  "nickel-strips-pure": {
    title: "Pure Nickel Welding Strips",
    description:
      "0.15mm pure nickel strips for battery pack interconnection and spot welding",
    url: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
    tags: ["#Nickel", "#Welding", "#Strips", "#Components"],
  },
  "mosfet-modules": {
    title: "High-Power MOSFET Modules",
    description:
      "Power MOSFET modules used in load tester for high-current discharge applications",
    url: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop",
    tags: ["#MOSFET", "#Power", "#Electronics", "#Components"],
  },
};

document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("search");
  const categorySelect = document.getElementById("category");
  const tagSelect = document.getElementById("tag");
  const galleryItems = document.querySelectorAll(".gallery-item");
  const modal = document.getElementById("imageModal");

  // Filter functionality
  function filterImages() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = categorySelect.value;
    const selectedTag = tagSelect.value;

    let visibleCount = 0;

    galleryItems.forEach((item) => {
      const title = item
        .querySelector(".gallery-title")
        .textContent.toLowerCase();
      const description = item
        .querySelector(".gallery-description")
        .textContent.toLowerCase();
      const tags = item.dataset.tags.split(",");
      const category = item.dataset.category;

      const matchesSearch =
        searchTerm === "" ||
        title.includes(searchTerm) ||
        description.includes(searchTerm) ||
        tags.some((tag) => tag.toLowerCase().includes(searchTerm));

      const matchesCategory =
        selectedCategory === "" || category === selectedCategory;
      const matchesTag = selectedTag === "" || tags.includes(selectedTag);

      const isVisible = matchesSearch && matchesCategory && matchesTag;

      item.style.display = isVisible ? "block" : "none";

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

  // Event listeners for filtering
  searchInput.addEventListener("input", filterImages);
  categorySelect.addEventListener("change", filterImages);
  tagSelect.addEventListener("change", filterImages);

  // Tag click functionality
  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("tag") && e.target.dataset.tag) {
      tagSelect.value = e.target.dataset.tag;
      filterImages();
    }
  });

  // Make gallery items clickable to open modal
  document.addEventListener("click", function (e) {
    const galleryItem = e.target.closest(".gallery-item");
    if (galleryItem) {
      const imageId = galleryItem.dataset.imageId;
      if (imageId) {
        openModal(imageId);
      }
    }
  });

  console.log("Gallery page functionality loaded");
});

// Modal functionality - global functions
function openModal(imageId) {
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  const modalTitle = document.getElementById("modalTitle");
  const modalDescription = document.getElementById("modalDescription");
  const modalTags = document.getElementById("modalTags");
  const modalDownload = document.getElementById("modalDownload");

  const imageData = galleryData[imageId];
  if (!imageData) return;

  modalImage.src = imageData.url;
  modalImage.alt = imageData.title;
  modalTitle.textContent = imageData.title;
  modalDescription.textContent = imageData.description;

  modalTags.innerHTML = "";
  imageData.tags.forEach((tag) => {
    const tagElement = document.createElement("span");
    tagElement.className = "tag";
    tagElement.textContent = tag;
    modalTags.appendChild(tagElement);
  });

  modalDownload.onclick = () =>
    downloadImage(imageData.url, `${imageData.title}.jpg`);

  modal.classList.add("show");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const modal = document.getElementById("imageModal");
  modal.classList.remove("show");
  document.body.style.overflow = "auto";
}

function downloadImage(url, filename) {
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Keyboard navigation for modal
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal();
  }
});
