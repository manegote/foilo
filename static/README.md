# Electronics Engineering Portfolio - Static Version

This is a fully static HTML/CSS/JS conversion of the original React Electronics Engineering Portfolio. It maintains 1:1 design parity with the original while being completely self-contained and deployable to any static hosting service.

## Features

- **Complete 1:1 Design Match**: Identical colors, fonts, layout, spacing, and visual elements
- **Fully Functional**: All interactive features work including filtering, search, modals, and forms
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **No Dependencies**: Pure HTML, CSS, and JavaScript - no frameworks required
- **Fast Loading**: Optimized for performance with efficient CSS and minimal JavaScript

## Pages Included

- **Homepage** (`index.html`): Hero section, featured projects, recent posts, what I do
- **Projects** (`projects.html`): Filterable grid of all engineering projects with search
- **Blog** (`blog.html`): Technical articles and project documentation
- **Gallery** (`gallery.html`): Visual documentation with fullscreen modal viewer
- **About** (`about.html`): Detailed information about the portfolio and approach
- **Contact** (`contact.html`): Contact form and information

## Design System

### Colors

- **Dark Theme**: Professional dark background with GOV.UK inspired blue accents
- **Teal Accent**: Engineering-focused accent color for interactive elements
- **Success Green**: Used for completed projects and primary actions
- **Muted Colors**: Carefully chosen muted colors for secondary text and borders

### Typography

- **Font**: Inter font family for clean, professional readability
- **Hierarchy**: Clear heading hierarchy with consistent spacing
- **Responsive**: Text scales appropriately across all device sizes

### Layout

- **Grid System**: CSS Grid for modern, flexible layouts
- **Container**: Max-width containers with consistent padding
- **Responsive**: Mobile-first approach with progressive enhancement

## Interactive Features

### Filtering & Search

- **Real-time Search**: Instant filtering across projects, blog posts, and gallery
- **Category Filters**: Filter by project status, blog categories, gallery types
- **Tag System**: Clickable tags for easy content discovery
- **Clear Filters**: Easy reset functionality with result counts

### Gallery Modal

- **Fullscreen Viewer**: Click any gallery image for fullscreen viewing
- **Download Support**: Direct download links for all images
- **Keyboard Navigation**: ESC key to close modal
- **Mobile Optimized**: Touch-friendly controls

### Forms

- **Contact Form**: Functional contact form with validation
- **Demo Mode**: Shows success messages (no actual email sending)
- **Responsive**: Mobile-optimized form layouts

## File Structure

```
static/
├── index.html          # Homepage
├── projects.html       # Projects listing page
├── blog.html          # Blog listing page
├── gallery.html       # Image gallery page
├── about.html         # About page
├── contact.html       # Contact page
├── styles.css         # Main stylesheet (all styles)
├── script.js          # Main JavaScript functionality
├── projects.js        # Projects page specific JS
├── blog.js           # Blog page specific JS
├── gallery.js        # Gallery page specific JS
└── README.md         # This file
```

## Technology Stack

- **HTML5**: Semantic markup with accessibility considerations
- **CSS3**: Modern CSS with Grid, Flexbox, and custom properties
- **Vanilla JavaScript**: Pure JavaScript with no dependencies
- **Progressive Enhancement**: Works with JavaScript disabled

## Browser Support

- Chrome/Edge 88+
- Firefox 87+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment

This static site can be deployed to any static hosting service:

- **Netlify**: Drag and drop the static folder
- **Vercel**: Upload the folder or connect to Git
- **GitHub Pages**: Push to a repository and enable Pages
- **AWS S3**: Upload files to an S3 bucket with static hosting
- **Traditional Web Hosting**: Upload via FTP to any web server

## Performance

- **Fast Loading**: Minimal CSS and JavaScript
- **Optimized Images**: All images use optimized Unsplash URLs
- **Efficient Code**: Clean, minimal code without unnecessary bloat
- **Caching Friendly**: Static files are easily cacheable

## Customization

### Changing Colors

All colors are defined as CSS custom properties in the `:root` selector at the top of `styles.css`. Simply modify these values to change the color scheme.

### Adding Content

- **Projects**: Add new project cards to `projects.html` following the existing structure
- **Blog Posts**: Add new articles to `blog.html` with the same markup pattern
- **Gallery Images**: Add new gallery items to `gallery.html` and update `gallery.js` data

### Modifying Layout

The CSS uses modern Grid and Flexbox layouts. Modify the grid configurations in `styles.css` to change layouts.

## Original React App

This static version was converted from a React application with the following components:

- React Router for navigation
- Tailwind CSS for styling (converted to vanilla CSS)
- shadcn/ui components (converted to custom CSS)
- TypeScript interfaces (data structures preserved in JS)

The conversion maintains 100% visual and functional parity while removing all framework dependencies for maximum compatibility and performance.

## License

This is a portfolio demonstration project. The code structure and approach can be used as reference for similar projects.
