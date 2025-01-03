<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="William Adebisi's Personal Portfolio Website showcasing skills, projects, and professional experience.">
  <title>William Adebisi - Portfolio</title>
  <link rel="stylesheet" href="styles.css"> <!-- External stylesheet for better styling -->
  <style>
    body {
      font-family: 'Arial', sans-serif;
      line-height: 1.6;
      margin: 0;
      padding: 0;
      background-color: #f8f9fa;
      color: #343a40;
    }
    header {
      background: #007bff;
      color: #fff;
      padding: 1rem 0;
      text-align: center;
    }
    nav ul {
      list-style: none;
      padding: 0;
      display: flex;
      justify-content: center;
      background: #343a40;
    }
    nav ul li {
      margin: 0 10px;
    }
    nav ul li a {
      color: #fff;
      text-decoration: none;
      padding: 10px 15px;
      display: block;
      transition: background 0.3s;
    }
    nav ul li a:hover {
      background: #007bff;
    }
    section {
      margin: 2rem auto;
      max-width: 800px;
      padding: 1rem;
      background: #fff;
      border-radius: 5px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }
    section h2 {
      border-bottom: 2px solid #007bff;
      padding-bottom: 0.5rem;
    }
    footer {
      text-align: center;
      padding: 1rem;
      background: #343a40;
      color: #fff;
    }
    code {
      background: #e9ecef;
      padding: 2px 4px;
      border-radius: 3px;
    }
  </style>
</head>
<body>
  <header>
    <h1>William Adebisi - Portfolio</h1>
    <p>Explore my projects, skills, and experiences as a computer science student and aspiring software engineer.</p>
  </header>

  <nav>
    <ul>
      <li><a href="#about">About</a></li>
      <li><a href="#features">Features</a></li>
      <li><a href="#technologies-used">Technologies</a></li>
      <li><a href="#installation">Installation</a></li>
      <li><a href="#usage">Usage</a></li>
      <li><a href="#contributing">Contributing</a></li>
      <li><a href="#license">License</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>

  <main>
    <section id="about">
      <h2>About</h2>
      <p>This portfolio highlights my projects, technical skills, and professional experiences. Designed to offer a professional and engaging introduction to my work, it demonstrates my passion for software   
 development.</p>
    </section>

    <section id="features">
      <h2>Features</h2>
      <ul>
        <li>Responsive Design optimized for all devices.</li>
        <li>Interactive components built with React.js.</li>
        <li>Detailed project showcases and contact options.</li>
        <li>Fast loading with performance optimizations.</li>
      </ul>
    </section>

    <section id="technologies-used">
      <h2>Technologies Used</h2>
      <ul>
        <li><strong>Frontend:</strong> React.js, JavaScript, HTML5, CSS3</li>
        <li><strong>Deployment:</strong> Hosted on GitHub Pages</li>
        <li><strong>Tools:</strong> Visual Studio Code, Git</li>
      </ul>
    </section>

    <section id="installation">
      <h2>Installation</h2>
      <p>Follow these steps to run the site locally:</p>
      <ol>
        <li>Clone the repository: <code>git clone https://github.com/WillAdebisi/personal-portfolio.git</code></li>
        <li>Navigate to the directory: <code>cd personal-portfolio</code></li>
        <li>Install dependencies: <code>npm install</code></li>
        <li>Run the server: <code>npm start</code></li>
      </ol>
      <p>Access at <a href="http://localhost:3000/" target="_blank">http://localhost:3000/</a>.</p>
    </section>

    <section id="usage">
      <h2>Usage</h2>
      <p>Explore my work through:</p>
      <ul>
        <li>Project showcases like <em>Reactive Gym</em>, <em>Google Clone</em>, and <em>Tic Tac Toe</em>.</li>
        <li>Highlighting my skills, certifications, and education.</li>
        <li>Connecting via the contact form.</li>
      </ul>
    </section>

    <section id="contributing">
      <h2>Contributing</h2>
      <p>I welcome contributions! Please:</p>
      <ol>
        <li>Fork the repository.</li>
        <li>Create a feature branch: <code>git checkout -b feature-name</code></li>
        <li>Commit changes: <code>git commit -m \"Description of changes\"</code></li>
        <li>Push changes: <code>git push origin feature-name</code></li>
        <li>Open a pull request.</li>
      </ol>
    </section>

    <section id="license">
      <h2>License</h2>
      <p>Licensed under the MIT License. See the LICENSE file for more information.</p>
    </section>

    <section id="contact">
      <h2>Contact</h2>
      <ul>
        <li>Email: <a href="mailto:william.adebisi03@gmail.com">william.adebisi03@gmail.com</a></li>
        <li>LinkedIn: <a href="https://linkedin.com/in/willade" target="_blank">linkedin.com/in/willade</a></li>
        <li>GitHub: <a href="https://github.com/WillAdebisi" target="_blank">github.com/WillAdebisi</a></li>
      </ul>
    </section>
  </main>

  <footer>
    <p>&copy; 2025 William Adebisi. All rights reserved.</p>
  </footer>
</body>
</html>
