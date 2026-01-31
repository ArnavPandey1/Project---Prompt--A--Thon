import { useState } from 'react'

function App() {
  const [deployed, setDeployed] = useState(false)

  return (
    <div className="container">
      <div style={{ paddingTop: '5rem', paddingBottom: '3rem' }}>
        <h1>Ready for Vercel</h1>
        <p>
          Your client application is set up and ready to be deployed.
          Built with Vite, React, and modern CSS.
        </p>

        <div className="card">
          <div style={{ marginBottom: '1rem', fontSize: '3rem' }}>🚀</div>
          <h2 style={{ marginBottom: '1rem', color: 'white' }}>Deploy in Seconds</h2>
          <p style={{ fontSize: '1rem' }}>
            Push this folder to GitHub/GitLab/Bitbucket and import it into Vercel. 
            It will automatically detect the build settings.
          </p>
          <button 
            className="btn" 
            onClick={() => setDeployed(!deployed)}
          >
            {deployed ? 'Deployment Simulated!' : 'Simulate Deployment'}
          </button>
        </div>

        <div className="grid">
          <div className="feature">
            <h3>⚡ Blazing Fast</h3>
            <p>Powered by Vite for instant server start and lightning fast HMR.</p>
          </div>
          <div className="feature">
            <h3>🎨 Premium Design</h3>
            <p>Includes a clean, dark-mode first design system out of the box.</p>
          </div>
          <div className="feature">
            <h3>☁️ Cloud Ready</h3>
            <p>Optimized for edge deployment with zero configuration needed.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
