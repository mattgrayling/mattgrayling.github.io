// Realistic star field background setup
document.addEventListener('DOMContentLoaded', function() {
  // Only initialize if particles container exists
  if (document.getElementById('star-background')) {
    // Seeded random number generator for consistent star positions across pages
    function seededRandom(seed) {
      var x = Math.sin(seed++) * 10000;
      return x - Math.floor(x);
    }

    // Use time-based seed so stars are at the "correct" position for current time
    // This makes motion continuous across page loads
    var baseTimestamp = 1700000000000;  // Fixed reference point (Nov 2023)
    var timeElapsed = Date.now() - baseTimestamp;
    var timeOffset = Math.floor(timeElapsed / 50000);  // Slow evolution (50 seconds per seed increment)
    var seed = 42 + timeOffset;  // Base seed + time offset
    var originalRandom = Math.random;

    // Temporarily override Math.random with seeded version
    Math.random = function() {
      seed++;
      return seededRandom(seed);
    };

    particlesJS('star-background', {
      particles: {
        number: {
          value: 200,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: ['#FFFFFF', '#F5E5A1', '#A1B8F5']  // White, warm white, blue-white (like real stars)
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0,
            color: '#000000'
          }
        },
        opacity: {
          value: 0.8,
          random: true,  // Different brightness levels
          anim: {
            enable: false  // No twinkling
          }
        },
        size: {
          value: 1.5,
          random: true,  // Variable star sizes
          anim: {
            enable: false  // No size animation for realism
          }
        },
        line_linked: {
          enable: false  // No connecting lines - unrealistic
        },
        move: {
          enable: true,
          speed: 0.4,  // Subtle but noticeable drift
          direction: 'none',  // Random directions
          random: true,  // Randomize movement
          straight: false,  // Curved, natural paths
          out_mode: 'out',
          bounce: false
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: false  // No interaction
          },
          onclick: {
            enable: false  // No interaction
          },
          resize: true
        }
      },
      retina_detect: true
    });

    // Restore original Math.random after particles are initialized
    Math.random = originalRandom;

    // GALAXIES TEMPORARILY DISABLED - Uncomment to re-enable
    /*
    // Add spiral galaxies to the background
    const galaxyContainer = document.getElementById('star-background');

    // Create simpler, more realistic spiral galaxies with varying sizes and drift
    const galaxies = [
      { x: 15, y: 20, size: 200, rotSpeed: 0.012, driftSpeed: 0.03, driftAngle: 15 },
      { x: 75, y: 15, size: 140, rotSpeed: -0.018, driftSpeed: 0.025, driftAngle: 135 },
      { x: 85, y: 70, size: 175, rotSpeed: 0.025, driftSpeed: 0.04, driftAngle: 225 },
      { x: 10, y: 80, size: 130, rotSpeed: -0.015, driftSpeed: 0.035, driftAngle: 300 },
      { x: '50%', y: '60%', size: 160, rotSpeed: 0.020, driftSpeed: 0.028, driftAngle: 180 }
    ];

    galaxies.forEach((config, index) => {
      const galaxy = document.createElement('div');
      galaxy.className = 'spiral-galaxy';

      galaxy.style.left = (typeof config.x === 'string' ? config.x : config.x + '%');
      galaxy.style.top = (typeof config.y === 'string' ? config.y : config.y + '%');
      galaxy.style.width = config.size + 'px';
      galaxy.style.height = config.size + 'px';

      // SVG galaxy using STAR TEXTURE technique (Gemini's noise-based approach)
      galaxy.innerHTML = `
        <svg viewBox="-100 -75 200 150" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <!-- Star texture filter: final polish tweaks -->
            <filter id="star-texture-${index}">
              <feTurbulence type="fractalNoise" baseFrequency="0.09" numOctaves="3" stitchTiles="stitch"/>
              <!-- Brightened for visible spirals -->
              <feComponentTransfer>
                <feFuncA type="linear" slope="3.5" intercept="-1.2" />
              </feComponentTransfer>
              <!-- Tint bluish-white -->
              <feColorMatrix type="matrix" values="0 0 0 0 0.8
                                                     0 0 0 0 0.9
                                                     0 0 0 0 1
                                                     0 0 0 1 0" />
              <feGaussianBlur stdDeviation="0.7" />
            </filter>

            <!-- Core gradient with softer falloff -->
            <radialGradient id="core-gradient-${index}">
              <stop offset="0%" stop-color="#FFFFF0" stop-opacity="1" />
              <stop offset="30%" stop-color="#FFF5B5" stop-opacity="0.9" />
              <stop offset="85%" stop-color="#FFDDBB" stop-opacity="0" />
            </radialGradient>

            <!-- Core glow filter - final polish: more luminous -->
            <filter id="core-glow-${index}">
              <feGaussianBlur stdDeviation="8" />
            </filter>

            <!-- Soften mask edges filter - sharpened for visible spirals -->
            <filter id="soften-mask-${index}">
              <feGaussianBlur stdDeviation="2.5" />
            </filter>

            <!-- Blur filter for dust lanes - final polish: more integrated -->
            <filter id="blur-dust-${index}">
              <feGaussianBlur stdDeviation="6" />
            </filter>

            <!-- Fade to edge gradient for arms -->
            <radialGradient id="fade-edge-${index}">
              <stop offset="80%" stop-color="white" stop-opacity="1" />
              <stop offset="100%" stop-color="white" stop-opacity="0" />
            </radialGradient>

            <!-- Fade to edge mask -->
            <mask id="fade-mask-${index}">
              <ellipse cx="0" cy="0" rx="100" ry="100" fill="url(#fade-edge-${index})" />
            </mask>

            <!-- Halo blur -->
            <filter id="halo-blur-${index}">
              <feGaussianBlur stdDeviation="40" />
            </filter>

            <!-- Spiral arms mask with softened edges -->
            <mask id="arms-mask-${index}">
              <path d="M 6,0 C 30,-48 72,-36 60,12 C 48,60 -30,90 -72,48 C -114,6 -90,-72 0,-90 Q 12,-108 24,-93 C -84,-66 -126,12 -84,57 C -42,99 54,72 72,21 C 84,-30 39,-54 9,-3 Z" fill="white" filter="url(#soften-mask-${index})" />
              <path d="M 6,0 C 30,-48 72,-36 60,12 C 48,60 -30,90 -72,48 C -114,6 -90,-72 0,-90 Q 12,-108 24,-93 C -84,-66 -126,12 -84,57 C -42,99 54,72 72,21 C 84,-30 39,-54 9,-3 Z" fill="white" filter="url(#soften-mask-${index})" transform="rotate(180)" />
            </mask>
          </defs>

          <!-- Main galaxy with realistic 3D tilt: rotate then scale (NOT skew) -->
          <g transform="rotate(-25) scale(1, 0.4)">

            <!-- Faint galactic halo - final polish: more subtle -->
            <ellipse cx="0" cy="0" rx="150" ry="150" fill="#1a1a2a" opacity="0.4" filter="url(#halo-blur-${index})" />

            <!-- Spiral arms: star texture with fade to edges -->
            <g mask="url(#fade-mask-${index})">
              <rect x="-100" y="-100" width="200" height="200"
                    fill="#FFF"
                    filter="url(#star-texture-${index})"
                    mask="url(#arms-mask-${index})" />
            </g>

            <!-- Dark dust lanes - darkened for spiral contrast -->
            <g opacity="0.65" style="mix-blend-mode: multiply;">
                <path d="M 10,0 C 25,-25 60,-20 65,7.5 C 70,35 35,55 12.5,50 C -10,45 -35,25 -27.5,-7.5 C -20,-40 10,-45 10,-0.5Z" fill="#412d24" filter="url(#blur-dust-${index})" transform="rotate(2.5)" />
                <path d="M 10,0 C 25,-25 60,-20 65,7.5 C 70,35 35,55 12.5,50 C -10,45 -35,25 -27.5,-7.5 C -20,-40 10,-45 10,-0.5Z" fill="#302018" filter="url(#blur-dust-${index})" transform="rotate(182.5)" />
            </g>

            <!-- Galactic core - larger and softer -->
            <ellipse cx="0" cy="0" rx="32" ry="32" fill="url(#core-gradient-${index})" filter="url(#core-glow-${index})" />
            <ellipse cx="0" cy="0" rx="15" ry="15" fill="url(#core-gradient-${index})" />
            <ellipse cx="0" cy="0" rx="5" ry="5" fill="#FFFFF5" />

          </g>

          <!-- Background stars for context -->
          <circle cx="-75" cy="-40" r="0.4" fill="white" opacity="0.8" />
          <circle cx="50" cy="45" r="0.3" fill="white" opacity="0.7" />
          <circle cx="90" cy="-25" r="0.5" fill="white" opacity="0.9" />
          <circle cx="10" cy="-55" r="0.35" fill="white" opacity="0.6" />
        </svg>
      `;

      galaxyContainer.appendChild(galaxy);

      // Animate rotation and drift (slow, smooth)
      let currentRotation = 0;

      // Calculate linear drift velocity from angle
      const driftVelocityX = Math.cos(config.driftAngle * Math.PI / 180) * config.driftSpeed;
      const driftVelocityY = Math.sin(config.driftAngle * Math.PI / 180) * config.driftSpeed;

      let driftX = 0;
      let driftY = 0;

      const animate = () => {
        currentRotation += config.rotSpeed;

        // Linear drift - just add velocity each frame
        driftX += driftVelocityX;
        driftY += driftVelocityY;

        galaxy.style.transform = `translate(${driftX}px, ${driftY}px) rotate(${currentRotation}deg)`;
        requestAnimationFrame(animate);
      };

      animate();

      // Supernova explosions - positions along spiral arms
      // Positions are in percentage (x, y) relative to galaxy container
      const supernovaPositions = [
        // Inner arm positions
        {x: 45, y: 48}, {x: 52, y: 45}, {x: 55, y: 52},
        {x: 43, y: 52}, {x: 48, y: 55}, {x: 52, y: 50},
        // Mid arm positions
        {x: 38, y: 50}, {x: 42, y: 42}, {x: 58, y: 42},
        {x: 62, y: 50}, {x: 58, y: 58}, {x: 42, y: 58},
        // Outer arm positions
        {x: 35, y: 45}, {x: 38, y: 35}, {x: 50, y: 32},
        {x: 62, y: 35}, {x: 65, y: 45}, {x: 68, y: 55},
        {x: 62, y: 65}, {x: 50, y: 68}, {x: 38, y: 65},
        {x: 32, y: 55}
      ];

      // Function to trigger a supernova
      const triggerSupernova = () => {
        // Pick a random position from the pre-defined spiral arm positions
        const pos = supernovaPositions[Math.floor(Math.random() * supernovaPositions.length)];

        // Add some random jitter so they don't always appear in exact same spots
        const jitterX = (Math.random() - 0.5) * 8;  // ±4% jitter
        const jitterY = (Math.random() - 0.5) * 8;

        const supernova = document.createElement('div');
        supernova.className = 'supernova';
        supernova.style.left = (pos.x + jitterX) + '%';
        supernova.style.top = (pos.y + jitterY) + '%';

        galaxy.appendChild(supernova);

        // Remove after animation completes
        setTimeout(() => {
          supernova.remove();
        }, 2600);
      };

      // Trigger supernovae at random intervals (8-25 seconds apart)
      const scheduleNextSupernova = () => {
        const delay = 8000 + Math.random() * 17000;  // 8-25 seconds
        setTimeout(() => {
          triggerSupernova();
          scheduleNextSupernova();
        }, delay);
      };

      // Start supernova cycle with initial delay
      setTimeout(scheduleNextSupernova, 3000 + Math.random() * 5000);
    });
    */
    // END GALAXIES - Uncomment above to re-enable
  }
});
