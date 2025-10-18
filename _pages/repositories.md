---
layout: page
permalink: /software/
title: Software
description: Open-source software, analysis tools, and code repositories
nav: true
nav_order: 2
hide_title: true
---

<div class="cv">
  <!-- BayeSN Card -->
  <div class="card mt-3 p-3">
    <h3 class="card-title font-weight-medium"><i class="fab fa-python"></i> BayeSN</h3>
    <p class="lead">Next-generation SED model for type Ia supernovae</p>

    <div class="callout-box callout-info mt-3">
      <h6><i class="fas fa-lightbulb"></i>What makes BayeSN unique?</h6>
      <p> BayeSN lies at the intersection of astrophysics, cosmology and cutting-edge statistical inference. Using
      powerful computational tools like jax and numpyro, BayeSN enables fast inference across populations of SNe Ia
      to provide astrophysical insight into their properties and improved standardisation for cosmology. Using BayeSN
      I have demonstrated intrinsic differences between SNe Ia which explode in different environments.</p>
    </div>

    <div class="row mt-3">
      <div class="col-md-6">
        <h5><i class="fas fa-cogs text-primary"></i> Capabilities</h5>
        <ul>
          <li>Population-level inference for thousands of supernovae</li>
          <li>GPU-accelerated using jax/numpyro for scalability</li>
          <li>Disentangles dust extinction from intrinsic SN properties </li>
        </ul>
      </div>
      <div class="col-md-6">
        <h5><i class="fas fa-tasks text-success"></i> Applications</h5>
        <ul>
          <li>Improved SN standardisation for cosmology</li>
          <li>Provides insights into the environmental-dependence of SNe Ia</li>
          <li>Incorporated in SNANA cosmology pipeline</li>
        </ul>
      </div>
    </div>

    <div class="mt-3">
      <span class="badge bg-primary">Python</span>
      <span class="badge bg-info text-dark">JAX</span>
      <span class="badge bg-secondary">NumPyro</span>
      <span class="badge bg-success text-dark">GPU</span>
    </div>
  </div>

  <!-- BayeSN-TD Card -->
  <div class="card mt-3 p-3">
    <h3 class="card-title font-weight-medium"><i class="fab fa-python"></i> BayeSN-TD <span class="badge bg-warning text-dark ms-2">Coming Soon</span></h3>
    <p class="lead">Time-delay inference for gravitationally lensed Type Ia supernovae</p>

    <div class="callout-box callout-warning mt-3">
      <h6><i class="fas fa-hourglass-half"></i> In Development</h6>
      <p>BayeSN-TD extends the BayeSN framework to model gravitationally lensed supernovae, enabling robust time-delay measurements for cosmology. 
         Code will be released upon acceptance of currently-submitted BayeSN-TD paper.</p>
    </div>

    <div class="mt-3">
      <span class="badge bg-primary">Python</span>
      <span class="badge bg-info text-dark">JAX</span>
      <span class="badge bg-secondary">NumPyro</span>
      <span class="badge bg-warning text-dark">In Development</span>
    </div>
  </div>

  <!-- Repositories -->
  {% if site.data.repositories.github_repos %}
  <div class="card mt-3 p-3">
    <h3 class="card-title font-weight-medium"><i class="fab fa-github"></i> Repositories</h3>
    <div class="repositories d-flex flex-wrap gap-3 justify-content-center align-items-stretch mt-3">
      {% for repo in site.data.repositories.github_repos %}
        {% include repository/repo.liquid repository=repo %}
      {% endfor %}

      <!-- Coming Soon: BayeSN-TD Repository -->
      <div class="repo p-2">
        <div class="repo-card-coming-soon">
          <!-- Top Section: Header and Description -->
          <div>
            <div class="repo-card-header">
              <svg height="16" width="16" viewBox="0 0 16 16" style="fill: #57ab5a; vertical-align: middle; margin-right: 6px;">
                <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
              </svg>
              <span class="repo-name">bayesn/bayesn-td</span>
              <span class="coming-soon-badge">Coming Soon</span>
            </div>
            <p class="repo-description">Time-delay inference extension for gravitationally lensed Type Ia supernovae</p>
          </div>

          <!-- Bottom Section: Footer Stats -->
          <div class="repo-stats">
            <span class="repo-stat">
              <span class="language-dot"></span>
              Python
            </span>
            <span class="repo-stat">
              <svg height="16" width="16" viewBox="0 0 16 16" style="fill: currentColor; vertical-align: middle; margin-right: 4px;">
                <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
              </svg>
              -
            </span>
            <span class="repo-stat">
              <svg height="16" width="16" viewBox="0 0 16 16" style="fill: currentColor; vertical-align: middle; margin-right: 4px;">
                <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>
              </svg>
              -
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  {% endif %}

  <!-- Related Content -->
  <div class="related-content">
    <h4><i class="fas fa-network-wired"></i>Explore Further</h4>
    <div class="row g-3">
      <div class="col-md-3">
        <a href="/research/" class="related-card card">
          <div class="card-body">
            <strong><i class="fas fa-flask"></i>Research Projects</strong>
          </div>
        </a>
      </div>
      <div class="col-md-3">
        <a href="/publications/" class="related-card card">
          <div class="card-body">
            <strong><i class="fas fa-file-alt"></i>Publications</strong>
          </div>
        </a>
      </div>
      <div class="col-md-3">
        <a href="/talks/" class="related-card card">
          <div class="card-body">
            <strong><i class="fas fa-microphone"></i>Talks</strong>
          </div>
        </a>
      </div>
      <div class="col-md-3">
        <a href="/collaborations/" class="related-card card">
          <div class="card-body">
            <strong><i class="fas fa-users"></i>Collaborations</strong>
          </div>
        </a>
      </div>
    </div>
  </div>
</div>
