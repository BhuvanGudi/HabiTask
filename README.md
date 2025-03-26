# HabiTask 🏠✅ (From "Habitat" + "Task")
A seamless marketplace connecting property owners with skilled workers for repairs, renovations, and construction projects.

---

### **App Description**  

This app is a **marketplace platform** designed for two types of users: **Property Owners (Proprietors)** and **Workers (Contractors/Laborers)**.  

#### **User Roles & Features:**  

1. **Property Owners (Proprietors)**  
   - Search for properties and list them on the marketplace.  
   - If a property requires **construction, repair, or renovation**, they can create a **work request** specifying the type of work needed.  
   - Review worker applications and hire a suitable worker for the job.  
   - Manage their listed properties and ongoing work requests.  

2. **Workers (Contractors/Laborers)**  
   - Browse available work requests posted by property owners.  
   - Apply for jobs that match their skills (e.g., electrician, plumber, carpenter, painter, etc.).  
   - Complete assigned tasks and receive payments (either through the app or external means).  
   - Manage their job history and receive ratings from property owners.  

#### **Core Features:**  
✅ **User Authentication:** Sign up/login for both property owners and workers.  
✅ **Property Listings:** Owners can list, edit, and remove properties.  
✅ **Work Request System:** Owners can create job posts, and workers can apply for them.  
✅ **Job Management:** Track ongoing and completed work requests.  
✅ **User Profiles & Ratings:** Both owners and workers can view profiles and give feedback.  
✅ **Notifications:** Updates on job applications, approvals, and payments.  

---

### **Prompt for React App Development**  

*"Develop a full-stack web application using React (JavaScript) for the frontend and Node.js with Express.js for the backend. The application will be a **marketplace** connecting Property Owners and Workers. The frontend should have an intuitive UI, while the backend will manage authentication, job postings, user profiles, and notifications. The app should integrate Firebase or JWT for authentication, MongoDB for storing data, and Stripe for payments. The UI should include dashboards for both user roles, job listing pages, and real-time notifications. The system should allow property owners to post work requests and workers to apply for jobs. Additional features include in-app messaging, rating/reviews, and location-based job filtering."*  

---

### **Prompt for Frontend Development (React, HTML, CSS, Tailwind)**  

*"Develop a responsive frontend UI for a property marketplace app using **React (JavaScript)** with **Tailwind CSS** for styling. The app should support two user roles: **Property Owners** and **Workers**.  

#### **Key Features to Implement:**  
✅ **Landing Page:** A visually appealing homepage introducing the platform.  
✅ **Authentication Pages:** Signup/Login forms (UI only, no backend logic).  
✅ **User Dashboards:**  
   - **Property Owner Dashboard:** Allows listing properties and posting work requests.  
   - **Worker Dashboard:** Displays available jobs and allows users to apply.  
✅ **Job Listings Page:** A page where workers can browse and filter job requests.  
✅ **Profile Pages:** Displays user details, job history, and ratings.  
✅ **Notifications UI:** Alerts for new job postings, applications, and status updates.  
✅ **Mobile-Friendly Design:** Fully responsive layout using **Flexbox & Grid**.  
✅ **Dark Mode Support (Optional)**: Implement a toggle switch for light/dark themes.  

The UI should follow a **modern and minimalistic** design with **smooth animations** (Framer Motion for subtle effects). Use **shadcn/ui** for pre-built components (buttons, cards, modals) and **Lucide-react** for icons. No backend integration—just static data for placeholders."*  

---

### **Prompt**  
This ensures the focus is purely on **frontend development** (HTML, CSS, and React components). It also specifies:  
✅ **Styling (Tailwind CSS)**  
✅ **UI Libraries (shadcn/ui, Lucide-react, Framer Motion)**  
✅ **Pages and Components**  
✅ **No backend logic required**  

---

```
property-marketplace/
│
├── index.html                  # Landing page
├── auth/                       # Authentication pages
│   ├── login.html
│   ├── signup.html
│   ├── auth.css
│   └── auth.js
│
├── dashboard/                  # User dashboards
│   ├── owner/
│   │   ├── index.html          # Owner dashboard
│   │   ├── dashboard.css
│   │   └── dashboard.js
│   └── worker/
│       ├── index.html          # Worker dashboard
│       ├── dashboard.css
│       └── dashboard.js
│
├── listings/                   # Job listings
│   ├── index.html
│   ├── listings.css
│   └── listings.js
│
├── profiles/                   # User profiles
│   ├── owner/
│   │   ├── index.html
│   │   ├── profile.css
│   │   └── profile.js
│   └── worker/
│       ├── index.html
│       ├── profile.css
│       └── profile.js
│
├── notifications/              # Notifications
│   ├── index.html
│   ├── notifications.css
│   └── notifications.js
│
├── assets/
│   ├── css/
│   │   ├── styles.css          # Global styles
│   │   ├── components.css      # Reusable components
│   │   └── utilities.css       # Utility classes
│   ├── js/
│   │   ├── main.js             # Global JavaScript
│   │   ├── helpers.js          # Helper functions
│   │   └── theme.js            # Dark mode toggle
│   ├── images/
│   │   ├── hero/
│   │   ├── properties/
│   │   ├── services/
│   │   ├── users/
│   │   └── ui/
│   └── icons/
│       ├── navigation/
│       ├── social/
│       ├── actions/
│       └── status/
│
└── README.md                   # Project documentation
```


## 1. Images Folder (`assets/images/`)

### Essential Images:
1. **Hero Image** (`hero-image.png`)
   - Purpose: Main visual for the homepage hero section
   - Suggested: Illustration or photo showing property owners and workers collaborating

2. **Service Category Icons**:
   - `plumbing.png` - For plumbing services
   - `electrical.png` - For electrical work
   - `cleaning.png` - For cleaning services
   - `carpentry.png` - For carpentry work
   - `landscaping.png` - For gardening/landscaping
   - `painting.png` - For painting services

3. **User Placeholders**:
   - `user-owner.png` - Default property owner avatar
   - `user-worker.png` - Default worker avatar

4. **Property Types**:
   - `house.png` - Single family home
   - `apartment.png` - Apartment building
   - `commercial.png` - Commercial property
   - `vacation.png` - Vacation rental

5. **Miscellaneous**:
   - `how-it-works.png` - Visual for how it works a section
   - `feature-image.png` - Supporting image for a features section
   - `testimonial-bg.jpg` - Background for a testimonials section
   - `cta-bg.jpg` - Background for a call-to-action section

## 2. Icons Folder (`assets/icons/`)

### Essential Icons (SVG or PNG):
1. **Navigation Icons**:
   - `menu.svg` - Hamburger menu icon
   - `close.svg` - Close icon for mobile menu

2. **User Interface Icons**:
   - `search.svg` - Search icon
   - `filter.svg` - Filter icon
   - `location.svg` - Location pin
   - `calendar.svg` - Calendar/scheduling
   - `star.svg` - Ratings/featured
   - `star-filled.svg` - Filled rating star
   - `half-star.svg` - Half rating star

3. **Social Media Icons**:
   - `facebook.svg`
   - `twitter.svg`
   - `instagram.svg`
   - `linkedin.svg`

4. **Feature Icons**:
   - `verified.svg` - Verified professionals
   - `shield.svg` - Safety/security
   - `wallet.svg` - Payments/pricing
   - `chat.svg` - Messaging
   - `review.svg` - Review system

5. **Action Icons**:
   - `edit.svg` - Edit profile
   - `delete.svg` - Delete item
   - `save.svg` - Save/bookmark
   - `share.svg` - Share listing
   - `phone.svg` - Contact number
   - `email.svg` - Email contact

6. **Status Icons**:
   - `check-circle.svg` - Completed jobs
   - `clock.svg` - Pending jobs
   - `alert.svg` - Important notices
   - `info.svg` - Information

## 3. Additional Recommendations:

### For Property Listings:
- Sample property images (`property-1.jpg`, `property-2.jpg`, etc.)
- Before/after images for work examples

### For Worker Profiles:
- Badges for certifications (`badge-certified.png`, `badge-premium.png`)
- Tool icons representing skills (`tool-hammer.png`, `tool-wrench.png`)

### For Notifications:
- Different notification icons (`notification-job.png`, `notification-message.png`, `notification-alert.png`)

## Implementation Notes:

1. **Format Recommendations**:
   - Use SVG for icons where possible (scalable, small file size)
   - Use WebP format for photos (better compression than JPG/PNG)
   - Optimize all images (recommended tools: TinyPNG, Squoosh)

2. **Fallbacks**:
   - Include alt text for all images
   - Consider using CSS-based icons for simple shapes
   - Have fallback PNG versions for SVG icons if supporting ancient browsers

3. **Accessibility**:
   - Use descriptive file names (not just `image1.png`)
   - Add `aria-hidden="true"` to decorative icons
   - Provide text alternatives for meaningful icons


---


#### Key Features of This Structure:
**Modular Organization**: Each major section has its own folder with dedicated HTML, CSS, and JS files.

**Separation of Concerns**:

- Global styles and scripts in the assets folder

- Page-specific styles and scripts with their respective pages

**Scalability**: Easy to add new pages or sections without cluttering.

#### Reusability:

- components.css for reusable UI components

- utilities.css for utility classes

- helpers.js for shared functions

- No Dependencies: Pure HTML, CSS, and JavaScript as requested.

#### Implementation Notes:
- For dark mode, you'd use the theme.js to handle the toggle and apply classes to the root element.

- All mock data can be stored in the respective JavaScript files (or in a separate mockData.js if you prefer).

- Navigation between pages would be handled with standard anchor tags since we're not using a SPA framework.

- For responsive design, use media queries in each CSS file or in the global styles.css.


---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Run the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launch the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified, and the filenames include the hashes.\
Your app is ready to be deployed!

- See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead,
it will copy all the configuration files and the transitive dependencies
(webpack, Babel, ESLint, etc.) right into your project so you have full control over them.
All the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them.
At this point, you're on your own.

You don't have to ever use `eject`.
The curated feature set is suitable for small and middle deployments,
and you shouldn't feel obligated to use this feature.
However, we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

##### `npm run build` fails to minify

- This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
