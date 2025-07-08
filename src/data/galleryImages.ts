export interface GalleryImage {
  id: string;
  title: string;
  description: string;
  url: string;
  tags: string[];
  category: "Photos" | "Designs" | "PCBs" | "Mockups" | "Parts";
  projectId?: string;
  uploadDate: string;
}

export const galleryImages: GalleryImage[] = [
  // PCB Category
  {
    id: "bms-pcb-top",
    title: "BMS PCB Top Layer",
    description: "Top layer view of custom Battery Management System PCB with protection circuits and balancing",
    url: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
    tags: ["PCB", "BMS", "Battery", "Protection"],
    category: "PCBs",
    projectId: "custom-battery-business",
    uploadDate: "2024-01-15"
  },
  {
    id: "load-tester-board",
    title: "Load Tester Control Board",
    description: "Arduino-based control board for the lithium battery pack load tester",
    url: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop",
    tags: ["PCB", "Arduino", "Testing", "Control"],
    category: "PCBs",
    projectId: "lithium-pack-tester",
    uploadDate: "2024-01-10"
  },
  {
    id: "welder-controller-pcb",
    title: "Spot Welder Controller PCB",
    description: "High-voltage isolation PCB for spot welder timing control with optoisolated drivers",
    url: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800&h=600&fit=crop",
    tags: ["PCB", "Welding", "Isolation", "Safety"],
    category: "PCBs",
    projectId: "spot-welder-controller",
    uploadDate: "2024-01-05"
  },
  
  // Photos Category
  {
    id: "battery-assembly-station",
    title: "Battery Pack Assembly Station",
    description: "Complete workstation setup for lithium battery pack assembly with spot welder and testing equipment",
    url: "https://images.unsplash.com/photo-1609392553633-ba5e73b09cca?w=800&h=600&fit=crop",
    tags: ["Assembly", "Workstation", "Battery", "Tools"],
    category: "Photos",
    projectId: "custom-battery-business",
    uploadDate: "2024-01-20"
  },
  {
    id: "reflow-oven-interior",
    title: "Reflow Oven Interior View",
    description: "Interior view of converted toaster oven showing temperature sensor placement and heating elements",
    url: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=800&h=600&fit=crop",
    tags: ["Reflow", "Temperature", "SMD", "Assembly"],
    category: "Photos",
    projectId: "reflow-oven-build",
    uploadDate: "2023-12-22"
  },
  {
    id: "cell-testing-setup",
    title: "Battery Cell Testing Setup",
    description: "Individual cell testing and characterization setup with load tester and data logging",
    url: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=800&h=600&fit=crop",
    tags: ["Testing", "Battery", "Characterization", "Data"],
    category: "Photos",
    uploadDate: "2024-01-18"
  },
  
  // Designs Category
  {
    id: "case-system-cad",
    title: "Modular Case System CAD",
    description: "3D CAD model of modular battery case system showing component interfaces and assembly",
    url: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=800&h=600&fit=crop",
    tags: ["CAD", "3D Print", "Design", "Mechanical"],
    category: "Designs",
    projectId: "modular-case-system",
    uploadDate: "2024-01-25"
  },
  {
    id: "pack-schematic",
    title: "Battery Pack Schematic",
    description: "Electrical schematic for 7S lithium battery pack with integrated BMS and protection",
    url: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop",
    tags: ["Schematic", "Battery", "BMS", "Design"],
    category: "Designs",
    uploadDate: "2024-01-12"
  },
  
  // Mockups Category
  {
    id: "battery-pack-render",
    title: "Custom Battery Pack Render",
    description: "3D render of completed custom battery pack showing final form factor and connection interfaces",
    url: "https://images.unsplash.com/photo-1609392553633-ba5e73b09cca?w=800&h=600&fit=crop",
    tags: ["Render", "Battery", "3D", "Visualization"],
    category: "Mockups",
    uploadDate: "2024-01-08"
  },
  {
    id: "welder-assembly-render",
    title: "Spot Welder Assembly Render",
    description: "Complete spot welder assembly showing transformer, controller, and safety enclosure",
    url: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800&h=600&fit=crop",
    tags: ["Render", "Welding", "Assembly", "3D"],
    category: "Mockups",
    projectId: "spot-welder-controller",
    uploadDate: "2023-12-15"
  },
  
  // Parts Category
  {
    id: "lithium-cells-18650",
    title: "High-Quality 18650 Lithium Cells",
    description: "Premium 18650 lithium-ion cells used in custom battery pack construction",
    url: "https://images.unsplash.com/photo-1609392553633-ba5e73b09cca?w=800&h=600&fit=crop",
    tags: ["Battery", "18650", "Lithium", "Components"],
    category: "Parts",
    uploadDate: "2024-01-22"
  },
  {
    id: "nickel-strips-pure",
    title: "Pure Nickel Welding Strips",
    description: "0.15mm pure nickel strips for battery pack interconnection and spot welding",
    url: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
    tags: ["Nickel", "Welding", "Strips", "Components"],
    category: "Parts",
    uploadDate: "2024-01-20"
  },
  {
    id: "mosfet-modules",
    title: "High-Power MOSFET Modules",
    description: "Power MOSFET modules used in load tester for high-current discharge applications",
    url: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop",
    tags: ["MOSFET", "Power", "Electronics", "Components"],
    category: "Parts",
    projectId: "lithium-pack-tester",
    uploadDate: "2024-01-15"
  }
];