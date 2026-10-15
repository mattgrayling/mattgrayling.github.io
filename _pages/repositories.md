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
  <!-- jax-SNANA Card -->
  <div class="card mt-3 p-3">
    <h3 class="card-title font-weight-medium"><i class="fab fa-python"></i> <a href="https://github.com/mattgrayling/jax-snana">jax-SNANA</a></h3>
    <p class="lead">GPU-accelerated supernova simulation, light curve fitting and cosmology</p>
    <p>I developed jax-SNANA, a JAX implementation of the SNANA supernova analysis framework. It supports survey simulations,
       light curve fitting, distance estimation and cosmological inference on CPUs and GPUs, with a compiled simulator
       for simulation-based inference.</p>
    <div class="mt-3">
      <a class="btn btn-sm btn-outline-primary" href="https://github.com/mattgrayling/jax-snana"><i class="fab fa-github"></i> GitHub</a>
      <a class="btn btn-sm btn-outline-primary" href="https://jax-snana.readthedocs.io/">Documentation</a>
      <a class="btn btn-sm btn-outline-primary" href="https://arxiv.org/abs/2610.19000">Paper</a>
    </div>
  </div>

  <!-- BayeSN Card -->
  <div class="card mt-3 p-3">
    <h3 class="card-title font-weight-medium"><i class="fab fa-python"></i> BayeSN</h3>
    <p class="lead">Next-generation SED model for type Ia supernovae</p>

    <div class="callout-box callout-info mt-3">
      <h6><i class="fas fa-lightbulb"></i>What makes BayeSN unique?</h6>
      <p> BayeSN lies at the intersection of astrophysics, cosmology and cutting-edge statistical inference. Using
      powerful computational tools like JAX and NumPyro, BayeSN enables fast inference across populations of SNe Ia
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
    <h3 class="card-title font-weight-medium"><i class="fab fa-python"></i> <a href="https://github.com/bayesn/bayesn-td" target="_blank" rel="noopener noreferrer">BayeSN-TD</a></h3>
    <p class="lead">Time-delay inference for gravitationally lensed Type Ia supernovae</p>

    <div class="callout-box callout-info mt-3">
      <h6><i class="fas fa-lightbulb"></i>What makes BayeSN-TD unique?</h6>
      <p>BayeSN-TD extends the BayeSN framework to model gravitationally lensed supernovae, enabling robust time-delay measurements for cosmology.
         The accompanying paper is <a href="https://doi.org/10.1093/mnras/stag340">published in MNRAS</a>.</p>
    </div>

    <div class="mt-3">
      <span class="badge bg-primary">Python</span>
      <span class="badge bg-info text-dark">JAX</span>
      <span class="badge bg-secondary">NumPyro</span>
    </div>
  </div>

  <!-- Repositories -->
  {% if site.data.repositories.github_repos %}
  <div class="card mt-3 p-3">
    <h3 class="card-title font-weight-medium"><i class="fab fa-github"></i> Repositories</h3>
    <div class="repositories d-flex flex-wrap justify-content-center align-items-stretch mt-3">
      {% for repo in site.data.repositories.github_repos %}
        {% include repository/repo.liquid repository=repo %}
      {% endfor %}

      <!-- BayeSN-TD Repository -->
      <div class="repo p-2">
        <a href="https://github.com/bayesn/bayesn-td" target="_blank" rel="noopener noreferrer" class="repo-card-coming-soon" style="text-decoration: none; color: inherit; display: block;">
          <!-- Top Section: Header and Description -->
          <div>
            <div class="repo-card-header">
              <svg height="16" width="16" viewBox="0 0 16 16" style="fill: #57ab5a; vertical-align: middle; margin-right: 6px;">
                <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
              </svg>
              <span class="repo-name">bayesn/bayesn-td</span>
            </div>
            <p class="repo-description">Time-delay inference extension for gravitationally lensed Type Ia supernovae</p>
          </div>

          <!-- Bottom Section: Footer Stats -->
          <div class="repo-stats">
            <span class="repo-stat">
              <span class="language-dot"></span>
              Python
            </span>
          </div>
        </a>
      </div>
    </div>
  </div>
  {% endif %}

  <!-- Related Content -->
  <div class="related-content">
    <h4><i class="fas fa-network-wired"></i>Explore Further</h4>
    <div class="row related-content-row">
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
