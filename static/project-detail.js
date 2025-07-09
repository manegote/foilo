// Project detail page functionality

// Project data - exact copy from React app
const projectsData = {
  "custom-battery-business": {
    id: "custom-battery-business",
    title: "Custom Lithium Battery Pack Business",
    description:
      "Building a complete business around custom lithium-ion battery pack design and manufacturing for specialized applications.",
    status: "in-progress",
    category: "Business",
    tags: ["Business", "Battery", "Manufacturing", "Custom"],
    coverImage:
      "https://images.unsplash.com/photo-1609392553633-ba5e73b09cca?w=800&h=600&fit=crop",
    readingTime: 12,
    images: [
      "https://images.unsplash.com/photo-1609392553633-ba5e73b09cca?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
    ],
    startDate: "2023-06-01",
    subprojects: [
      "lithium-pack-tester",
      "spot-welder-controller",
      "modular-case-system",
    ],
    details: `
# Custom Lithium Battery Pack Business

The goal is to create a complete business ecosystem for designing and manufacturing custom lithium-ion battery packs for specialized applications where commercial solutions don't fit.

## Market Analysis

Many applications require battery packs with specific:
- Form factors (unusual shapes/sizes)
- Voltage/capacity combinations
- Temperature ranges
- Discharge characteristics
- Integration requirements

Commercial packs often don't meet these needs, creating opportunity for custom solutions.

## Required Infrastructure

To build this business successfully, several supporting projects are required:
1. Load tester for pack validation and storage prep
2. Spot welder for reliable assembly
3. Modular case system for different form factors
4. Testing and validation procedures
5. Quality control systems

## Business Model

- Custom design consultation
- Prototype development
- Small batch manufacturing
- Testing and validation services
- Maintenance and repair services

## Current Status

Infrastructure projects are underway. The load tester and spot welder are complete, with the case system in development. Initial customer inquiries show strong demand for the service.
        `,
    technologies: [
      "Lithium-ion",
      "BMS Design",
      "CAD",
      "Manufacturing",
      "Testing",
    ],
    challenges: [
      "Regulatory compliance for battery manufacturing",
      "Quality control at small scale",
      "Supply chain management",
      "Safety protocols and insurance",
    ],
    outcomes: [
      "Established testing infrastructure",
      "Developed assembly processes",
      "Created initial customer base",
      "Validated market demand",
    ],
  },
  "lithium-pack-tester": {
    id: "lithium-pack-tester",
    title: "Lithium Battery Pack Load Tester",
    description:
      "Programmable load tester for safely discharging lithium battery packs to storage voltage before long-term storage.",
    status: "completed",
    category: "Tool",
    tags: ["Battery", "Testing", "Arduino", "Safety"],
    coverImage:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
    readingTime: 8,
    images: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop",
    ],
    startDate: "2023-11-01",
    completedDate: "2024-01-15",
    parentProject: "custom-battery-business",
    details: `
# Lithium Battery Pack Load Tester

A critical tool for proper lithium battery storage and validation testing. Enables precise discharge to storage voltage and comprehensive pack analysis.

## Features

- Programmable discharge current (0.1A to 10A)
- Precision voltage monitoring (±0.1V accuracy)
- Temperature monitoring and safety cutoffs
- Data logging for discharge curve analysis
- Multi-chemistry support (Li-ion, LiFePO4, etc.)
- Emergency stop and safety interlocks

## Design Philosophy

Commercial load testers are either too expensive ($1000+) or lack the precision needed for proper battery storage. This design prioritizes:
- Safety above all else
- Precision over speed
- Data collection for analysis
- Cost-effective construction

## Implementation

Built around an Arduino Mega with custom power electronics:
- High-power MOSFET load bank
- Precision voltage dividers
- Current sensing via hall effect sensor
- Temperature monitoring with thermistors
- LCD display with rotary encoder interface
- SD card logging capability

## Safety Systems

Multiple layers of protection:
- Software voltage limits
- Hardware overcurrent protection
- Thermal shutdown
- Emergency stop button
- Automatic cutoff at minimum safe voltage
- Status indicators and alarms

## Results

Successfully tested on packs from 1S to 14S configurations. Discharge accuracy within 0.05V of target. Temperature rise under load stays within safe limits. Data logging enables pack health analysis and capacity verification.

This tool has become essential for proper pack storage and customer validation testing.
        `,
    technologies: [
      "Arduino",
      "Power Electronics",
      "Sensors",
      "Data Logging",
      "Safety Systems",
    ],
    challenges: [
      "Heat dissipation in high-current loads",
      "Precision voltage measurement across wide range",
      "Safety system redundancy",
      "User interface design for complex parameters",
    ],
    outcomes: [
      "Reliable discharge to storage voltage",
      "Comprehensive pack testing capability",
      "Cost savings vs commercial solutions",
      "Foundation for quality control processes",
    ],
  },
  "spot-welder-controller": {
    id: "spot-welder-controller",
    title: "Spot Welder Controller for Battery Assembly",
    description:
      "Precision timing controller for microwave transformer-based spot welder to reliably join nickel strips in battery pack construction.",
    status: "completed",
    category: "Tool",
    tags: ["Welding", "Battery", "Arduino", "Assembly"],
    coverImage:
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800&h=600&fit=crop",
    readingTime: 6,
    images: [
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
    ],
    startDate: "2023-10-15",
    completedDate: "2024-01-08",
    parentProject: "custom-battery-business",
    details: `
# Spot Welder Controller for Battery Assembly

High-quality battery pack assembly requires reliable spot welding of nickel strips to cells. This controller provides the precision timing needed for consistent welds using a microwave transformer-based welder.

## Why Spot Welding?

Soldering directly to battery cells can damage them with excessive heat. Spot welding creates a mechanical and electrical connection without thermal stress, making it the preferred method for professional battery pack assembly.

## Controller Features

- Precise timing control (0.1ms resolution)
- Adjustable current via transformer taps
- Zero-crossing synchronization for consistent energy delivery
- Foot pedal operation for hands-free welding
- Visual and audible feedback
- Safety interlocks and emergency stop

## Safety Considerations

Microwave transformers output lethal voltages and currents. The controller incorporates multiple safety features:
- Optoisolated control circuits
- Emergency stop circuits
- Proper grounding and isolation
- Clear safety warnings and procedures
- Automatic timeout protection

## Weld Quality

Consistent, high-quality welds depend on:
- Proper electrode pressure
- Clean contact surfaces
- Correct timing for material thickness
- Consistent energy delivery

The controller addresses the timing and energy consistency, while proper technique handles the mechanical aspects.

## Performance Results

Testing on 0.1mm and 0.15mm nickel strips shows:
- Consistent weld nugget formation
- Joint strength exceeding strip tensile strength
- Minimal heat-affected zone
- No cell damage during welding process

This tool enables reliable, professional-quality battery pack assembly at a fraction of commercial welder cost.
        `,
    technologies: [
      "Microcontroller",
      "Power Electronics",
      "Zero-crossing Detection",
      "Safety Systems",
    ],
    challenges: [
      "High-voltage safety implementation",
      "Precise timing with AC power",
      "Heat management in transformer",
      "Consistent energy delivery across voltage variations",
    ],
    outcomes: [
      "Professional-quality weld consistency",
      "Significant cost savings vs commercial welders",
      "Reliable battery pack assembly capability",
      "Foundation for scaled manufacturing",
    ],
  },
  "modular-case-system": {
    id: "modular-case-system",
    title: "Modular Battery Case System",
    description:
      "Flexible enclosure system for custom battery packs with standardized mounting and connection interfaces.",
    status: "in-progress",
    category: "Mechanical",
    tags: ["3D Print", "Design", "Mechanical", "Battery"],
    coverImage:
      "https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=800&h=600&fit=crop",
    readingTime: 5,
    images: [
      "https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=800&h=600&fit=crop",
    ],
    startDate: "2024-01-20",
    parentProject: "custom-battery-business",
    details: `
# Modular Battery Case System

Custom battery packs require custom enclosures, but designing a unique case for every project is time-intensive. This modular system provides flexible, standardized components that can be combined to create cases for various pack configurations.

## Design Goals

- Standardized mounting interfaces
- Scalable for different pack sizes
- Professional appearance
- Easy assembly and disassembly
- Integrated cable management
- Standard connector options

## Modular Components

The system consists of standardized modules:
- Base plates in standard sizes
- Side walls with mounting features
- End caps with connector cutouts
- Internal mounting rails
- Cable management clips
- Lid systems with sealing options

## Material Selection

3D printing enables rapid prototyping and customization:
- PETG for structural components (chemical resistance, strength)
- TPU for seals and vibration dampening
- PLA for prototyping and non-critical parts
- Consider injection molding for production volumes

## Connection Standards

Standardized interfaces enable mix-and-match assembly:
- Threaded inserts for strong, reusable connections
- Alignment features for precise assembly
- Gasket grooves for environmental sealing
- Cable entry with strain relief

## Current Progress

Initial prototypes show promising results:
- Strong, lightweight construction
- Easy assembly with hand tools
- Professional appearance suitable for customers
- Flexible enough for various pack configurations

Next steps include finalizing connection details and developing a complete component library.
        `,
    technologies: [
      "3D Printing",
      "CAD Design",
      "Materials Engineering",
      "Manufacturing",
    ],
    challenges: [
      "Balancing flexibility with structural integrity",
      "Standardizing interfaces while maintaining customization",
      "Material selection for various environments",
      "Cost optimization for small production runs",
    ],
    outcomes: [
      "Functional prototype modules completed",
      "Validated assembly and connection concepts",
      "Material testing shows suitable properties",
      "Foundation for standardized product offering",
    ],
  },
  "reflow-oven-build": {
    id: "reflow-oven-build",
    title: "SMD Reflow Oven Conversion",
    description:
      "Converting a standard toaster oven into a precision reflow oven for surface-mount PCB assembly with PID temperature control.",
    status: "completed",
    category: "Tool",
    tags: ["Reflow", "SMD", "Arduino", "Temperature"],
    coverImage:
      "https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=800&h=600&fit=crop",
    readingTime: 10,
    images: [
      "https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
    ],
    startDate: "2023-09-01",
    completedDate: "2023-12-22",
    details: `
# SMD Reflow Oven Conversion

Hand-soldering surface-mount components becomes impractical for complex boards with fine-pitch packages. A reflow oven enables professional-quality PCB assembly at home, and converting a toaster oven is a cost-effective approach.

## Oven Selection

Critical factors for oven selection:
- Adequate chamber size for target boards
- Top and bottom heating elements
- Good insulation for temperature stability
- Manual controls (avoid electronic controls that interfere with modification)
- Reasonable element response time

## Temperature Control System

Precise temperature control is essential for proper reflow:
- K-type thermocouple with cold junction compensation
- PID control algorithm tuned for oven thermal mass
- Solid-state relay for element switching
- Safety cutoffs and alarm systems
- Profile programming capability

## Reflow Profiles

Different solder pastes require specific temperature profiles:
- Lead-free SAC305 (most common modern profile)
- Leaded 63/37 (for older or sensitive components)
- Low-temperature profiles for temperature-sensitive parts
- Custom profiles for specific paste formulations

## Safety Implementation

High-temperature operation requires robust safety systems:
- Multiple temperature monitoring points
- Thermal fuse backup protection
- Door interlock to prevent accidental opening
- Software and hardware temperature limits
- Smoke detection and ventilation

## Performance Validation

Testing with various board types confirms reliable operation:
- 0402 passives solder consistently
- Fine-pitch QFN packages achieve proper wetting
- Temperature uniformity within ±5°C across chamber
- Repeatable profile execution cycle after cycle

This tool has revolutionized PCB prototyping capability, enabling complex designs that would be impossible to assemble by hand while maintaining professional quality standards.
        `,
    technologies: [
      "Temperature Control",
      "PID Control",
      "Thermocouples",
      "Safety Systems",
      "PCB Assembly",
    ],
    challenges: [
      "Achieving temperature uniformity in modified oven",
      "PID tuning for large thermal mass system",
      "Safety system integration without compromising performance",
      "Profile optimization for various solder paste types",
    ],
    outcomes: [
      "Professional-quality SMD assembly capability",
      "Significant cost savings vs commercial reflow ovens",
      "Enabled complex PCB prototype development",
      "Reliable, repeatable reflow process",
    ],
  },
};

document.addEventListener("DOMContentLoaded", function () {
  // Get project ID from URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const projectId = urlParams.get("id");

  if (!projectId || !projectsData[projectId]) {
    // Redirect to projects page if invalid ID
    window.location.href = "projects.html";
    return;
  }

  const project = projectsData[projectId];

  // Populate page content
  populateProjectDetail(project);
});

function populateProjectDetail(project) {
  // Update page title
  document.title = `${project.title} - Electronics Engineering Portfolio`;

  // Update breadcrumb
  document.getElementById("project-breadcrumb").textContent = project.title;

  // Update header content
  document.getElementById("project-cover").src = project.coverImage;
  document.getElementById("project-cover").alt = project.title;
  document.getElementById("project-title").textContent = project.title;
  document.getElementById("project-description").textContent =
    project.description;

  // Update status with appropriate badge class and icon
  const statusElement = document.getElementById("project-status");
  statusElement.innerHTML =
    getStatusIcon(project.status) +
    project.status.replace("-", " ").toUpperCase();
  statusElement.className = `badge badge-${getStatusClass(project.status)}`;

  // Update category
  document.getElementById("project-category").textContent = project.category;

  // Update dates
  document.getElementById("project-start-date").textContent = formatDate(
    project.startDate,
  );

  if (project.completedDate) {
    document.getElementById("completed-date-container").style.display = "block";
    document.getElementById("project-completed-date").textContent = formatDate(
      project.completedDate,
    );
  }

  // Update reading time
  document.getElementById("project-reading-time").textContent =
    `${project.readingTime} min read`;

  // Update tags
  const tagsContainer = document.getElementById("project-tags");
  tagsContainer.innerHTML = "";
  project.tags.forEach((tag) => {
    const tagElement = document.createElement("span");
    tagElement.className = "tag";
    tagElement.textContent = `#${tag}`;
    tagsContainer.appendChild(tagElement);
  });

  // Update main content - convert markdown-like content to HTML
  const detailsContainer = document.getElementById("project-details");
  detailsContainer.innerHTML = convertMarkdownToHTML(project.details);

  // Update sidebar lists
  updateSidebarList("project-technologies", project.technologies);
  updateSidebarList("project-challenges", project.challenges);
  updateSidebarList("project-outcomes", project.outcomes);

  // Update gallery if multiple images
  if (project.images && project.images.length > 1) {
    const gallerySection = document.getElementById("project-gallery-section");
    const gallery = document.getElementById("project-gallery");

    gallerySection.style.display = "block";
    gallery.innerHTML = "";

    project.images.forEach((imageUrl) => {
      const imageItem = document.createElement("div");
      imageItem.className = "project-gallery-item";
      imageItem.innerHTML = `<img src="${imageUrl}" alt="${project.title}" class="project-gallery-image">`;
      gallery.appendChild(imageItem);
    });
  }

  // Show related projects if they exist
  if (project.subprojects || project.parentProject) {
    showRelatedProjects(project);
  }
}

function getStatusClass(status) {
  switch (status) {
    case "completed":
      return "success";
    case "in-progress":
      return "accent";
    case "planning":
      return "warning";
    case "paused":
      return "muted";
    default:
      return "muted";
  }
}

function getStatusIcon(status) {
  switch (status) {
    case "completed":
      return '<svg class="badge-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>';
    case "in-progress":
      return '<svg class="badge-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>';
    case "planning":
      return '<svg class="badge-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>';
    case "paused":
      return '<svg class="badge-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>';
    default:
      return '<svg class="badge-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>';
  }
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function updateSidebarList(containerId, items) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    container.appendChild(li);
  });
}

function convertMarkdownToHTML(markdown) {
  // Simple markdown-to-HTML conversion
  let html = markdown
    .replace(/^# (.*$)/gm, "<h1>$1</h1>")
    .replace(/^## (.*$)/gm, "<h2>$1</h2>")
    .replace(/^### (.*$)/gm, "<h3>$1</h3>")
    .replace(/^- (.*$)/gm, "<li>$1</li>")
    .replace(/^\d+\. (.*$)/gm, "<li>$1</li>")
    .replace(/\n\n/g, "</p><p>")
    .replace(/^\s*$/gm, "");

  // Wrap paragraphs
  html = "<p>" + html + "</p>";

  // Fix list formatting
  html = html.replace(/(<li>.*<\/li>)/gs, "<ul>$1</ul>");
  html = html.replace(/<\/ul>\s*<ul>/g, "");

  // Clean up empty paragraphs
  html = html.replace(/<p>\s*<\/p>/g, "");
  html = html.replace(/<p>\s*(<h[1-6]>)/g, "$1");
  html = html.replace(/(<\/h[1-6]>)\s*<\/p>/g, "$1");
  html = html.replace(/<p>\s*(<ul>)/g, "$1");
  html = html.replace(/(<\/ul>)\s*<\/p>/g, "$1");

  return html;
}

function showRelatedProjects(project) {
  const relatedSection = document.getElementById("related-projects-section");
  const relatedContainer = document.getElementById("related-projects");

  // Only show if there are actually related projects
  let hasRelated = false;

  // Show parent project if it exists
  if (project.parentProject && projectsData[project.parentProject]) {
    hasRelated = true;
  }

  // Show subprojects if they exist
  if (project.subprojects && project.subprojects.length > 0) {
    hasRelated = true;
  }

  if (!hasRelated) return;

  relatedSection.style.display = "block";
  relatedContainer.innerHTML = "";

  // Add section for parent project
  if (project.parentProject && projectsData[project.parentProject]) {
    const parentProject = projectsData[project.parentProject];

    const parentSection = document.createElement("div");
    parentSection.innerHTML = `
            <h4 style="font-size: 0.875rem; font-weight: 600; color: var(--foreground); margin-bottom: 0.5rem;">Parent Project</h4>
        `;
    relatedContainer.appendChild(parentSection);

    addRelatedProject(relatedContainer, parentProject);
  }

  // Add section for subprojects
  if (project.subprojects && project.subprojects.length > 0) {
    const subprojectsSection = document.createElement("div");
    subprojectsSection.innerHTML = `
            <h4 style="font-size: 0.875rem; font-weight: 600; color: var(--foreground); margin-bottom: 0.5rem; margin-top: 1.5rem;">Required Infrastructure</h4>
        `;
    relatedContainer.appendChild(subprojectsSection);

    project.subprojects.forEach((subprojectId) => {
      if (projectsData[subprojectId]) {
        const subproject = projectsData[subprojectId];
        addRelatedProject(relatedContainer, subproject);
      }
    });
  }
}

function addRelatedProject(container, project) {
  const projectElement = document.createElement("a");
  projectElement.href = `project-detail.html?id=${project.id}`;
  projectElement.className = "related-project-item";

  // Get status icon
  let statusIcon = "";
  let statusClass = "";
  switch (project.status) {
    case "completed":
      statusIcon =
        '<svg class="badge-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>';
      statusClass = "badge-success";
      break;
    case "in-progress":
      statusIcon =
        '<svg class="badge-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>';
      statusClass = "badge-accent";
      break;
    default:
      statusIcon =
        '<svg class="badge-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>';
      statusClass = "badge-muted";
  }

  projectElement.innerHTML = `
        <div class="related-project-title">${project.title}</div>
        <div class="related-project-description">${project.description}</div>
        <div style="margin-top: 0.75rem;">
            <span class="badge ${statusClass}" style="font-size: 0.625rem; padding: 0.125rem 0.375rem;">
                ${statusIcon}${project.status.replace("-", " ").toUpperCase()}
            </span>
        </div>
    `;

  container.appendChild(projectElement);
}

console.log("Project detail page functionality loaded");
