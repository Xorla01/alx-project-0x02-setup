<h1>ALX-PROJECT-2</h1>

<h2>Project Description</h2>
<p>
This project introduces <strong>Next.js</strong>, <strong>TypeScript</strong>, and <strong>Tailwind CSS</strong> for building modern web applications.  
It covers project setup, reusable components, routing, API integration, and best practices for structure and styling.
</p>
<hr />

<h2>Learning Objectives</h2>
<ul>
  <li>Scaffold a Next.js app with TypeScript and Tailwind CSS</li>
  <li>Implement basic routing with the Pages Router</li>
  <li>Create reusable components with TypeScript interfaces</li>
  <li>Build interactive UI elements (modals, buttons, etc.)</li>
  <li>Fetch and display data from external APIs</li>
  <li>Design responsive layouts with navigation</li>
</ul>
<hr />

<h2>Requirements</h2>
<ul>
  <li><a href="https://nodejs.org/">Node.js</a> v16 or later</li>
  <li>npm or yarn package manager</li>
  <li>Basic knowledge of React, TypeScript, and HTML/CSS</li>
  <li><a href="https://code.visualstudio.com/">VS Code</a> (recommended editor)</li>
</ul>
<hr />

<h2>Best Practices</h2>
<ul>
  <li>Organize components by domain (e.g., <code>layout/</code>, <code>common/</code>)</li>
  <li>Keep TypeScript interfaces in a <code>types/</code> folder</li>
  <li>Use ESLint + Prettier for consistent code style</li>
  <li>Optimize API calls and use lazy loading where appropriate</li>
</ul>
<hr />

<h2>Getting Started</h2>
<h3>Install dependencies</h3>
<pre><code>npm install # or yarn install</code></pre>

<h3>Run the development server</h3>
<pre><code>npm run dev # or yarn dev</code></pre>

<p>Your app will be running at <a href="http://localhost:3000">http://localhost:3000</a></p>
<hr />

<h2>Project Structure</h2>
<pre>
.
├── components/        # Reusable UI components
│   ├── common/        # Buttons, modals, etc.
│   └── layout/        # Header, Footer, Navbar
├── pages/             # Next.js pages (routes)
│   ├── index.tsx      # Home page
│   ├── about.tsx      # Example route
│   └── api/           # API routes
├── styles/            # Tailwind and global CSS
├── types/             # TypeScript interfaces & types
├── public/            # Static assets (images, icons)
└── utils/             # Helper functions
</pre>
<hr />

<h2>Next Steps</h2>
<ul>
  <li>Add more components (cards, forms, dropdowns)</li>
  <li>Integrate real-world APIs</li>
  <li>Deploy to Vercel or Netlify</li>
</ul>
<hr />
