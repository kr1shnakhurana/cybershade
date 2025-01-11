<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cyber Shade Documentation</title>
    <style>
        :root {
            --primary: #2563eb;
            --secondary: #1e40af;
            --text: #1f2937;
            --background: #f3f4f6;
            --code-bg: #1f2937;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: var(--text);
            background: var(--background);
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem;
        }

        .banner {
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            color: white;
            padding: 4rem 2rem;
            border-radius: 1rem;
            margin-bottom: 3rem;
            text-align: center;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        .banner h1 {
            font-size: 3rem;
            margin-bottom: 1rem;
        }

        .banner p {
            font-size: 1.2rem;
            opacity: 0.9;
        }

        .container {
            background: white;
            padding: 2rem;
            border-radius: 1rem;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        h2 {
            color: var(--primary);
            margin: 2rem 0 1rem;
            padding-bottom: 0.5rem;
            border-bottom: 2px solid var(--primary);
        }

        .feature-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            margin: 2rem 0;
        }

        .feature-card {
            background: var(--background);
            padding: 1.5rem;
            border-radius: 0.5rem;
            transition: transform 0.2s;
        }

        .feature-card:hover {
            transform: translateY(-5px);
        }

        .tech-stack {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
            margin: 1rem 0;
        }

        .tech-badge {
            background: var(--primary);
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 2rem;
            font-size: 0.9rem;
        }

        code {
            background: var(--code-bg);
            color: white;
            padding: 1rem;
            border-radius: 0.5rem;
            display: block;
            margin: 1rem 0;
            overflow-x: auto;
        }

        .installation-steps {
            list-style: none;
        }

        .installation-steps li {
            margin: 1rem 0;
            padding-left: 2rem;
            position: relative;
        }

        .installation-steps li::before {
            content: "→";
            position: absolute;
            left: 0;
            color: var(--primary);
        }

        .author-section {
            text-align: center;
            margin-top: 3rem;
            padding: 2rem;
            background: var(--background);
            border-radius: 1rem;
        }

        .author-section img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            margin-bottom: 1rem;
        }

        .social-links {
            display: flex;
            justify-content: center;
            gap: 1rem;
            margin-top: 1rem;
        }

        .social-links a {
            color: var(--primary);
            text-decoration: none;
            padding: 0.5rem 1rem;
            border: 1px solid var(--primary);
            border-radius: 2rem;
            transition: all 0.2s;
        }

        .social-links a:hover {
            background: var(--primary);
            color: white;
        }

        @media (max-width: 768px) {
            body {
                padding: 1rem;
            }

            .banner {
                padding: 2rem 1rem;
            }

            .banner h1 {
                font-size: 2rem;
            }
        }
    </style>
</head>
<body>
    <div class="banner">
        <h1>🌒 Cyber Shade Web</h1>
        <p>A modern web application built with React, Vite, Tailwind CSS, and GSAP</p>
    </div>

    <div class="container">
        <section>
            <h2>✨ Live Demo</h2>
            <p>Visit the live project: <a href="https://krishnakhurana.us.kg" target="_blank">krishnakhurana.us.kg</a></p>
        </section>

        <section>
            <h2>🚀 Features</h2>
            <div class="feature-grid">
                <div class="feature-card">
                    <h3>Blazing Fast Performance</h3>
                    <p>Built with Vite.js for lightning-quick development and production builds</p>
                </div>
                <div class="feature-card">
                    <h3>Responsive Design</h3>
                    <p>Fully responsive layout using Tailwind CSS</p>
                </div>
                <div class="feature-card">
                    <h3>Smooth Animations</h3>
                    <p>Engaging scroll-triggered animations powered by GSAP</p>
                </div>
                <div class="feature-card">
                    <h3>Modern Architecture</h3>
                    <p>Built with React 18+ using the latest best practices</p>
                </div>
            </div>
        </section>

        <section>
            <h2>🛠️ Tech Stack</h2>
            <div class="tech-stack">
                <span class="tech-badge">React.js</span>
                <span class="tech-badge">Vite</span>
                <span class="tech-badge">Tailwind CSS</span>
                <span class="tech-badge">GSAP</span>
                <span class="tech-badge">ScrollTrigger</span>
            </div>
        </section>

        <section>
            <h2>📦 Installation</h2>
            <ul class="installation-steps">
                <li>Clone the repository:
                    <code>git clone https://github.com/yourusername/cyber-shade.git
cd cyber-shade</code>
                </li>
                <li>Install dependencies:
                    <code>npm install</code>
                </li>
                <li>Start the development server:
                    <code>npm run dev</code>
                </li>
            </ul>
        </section>

        <section>
            <h2>🎨 Project Structure</h2>
            <code>cyber-shade/
├── src/
│   ├── assets/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   ├── animations/
│   ├── styles/
│   ├── App.jsx
│   └── main.jsx
├── public/
├── index.html
└── package.json</code>
        </section>

        <div class="author-section">
            <img src="/api/placeholder/100/100" alt="Krishna Khurana">
            <h2>👤 Author</h2>
            <p>Krishna Khurana</p>
            <div class="social-links">
                <a href="https://krishnakhurana.us.kg" target="_blank">Portfolio</a>
                <a href="https://github.com/yourusername" target="_blank">GitHub</a>
            </div>
        </div>
    </div>
</body>
</html>