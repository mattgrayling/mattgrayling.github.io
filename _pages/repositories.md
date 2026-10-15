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
    <h3 class="card-title font-weight-medium"><a href="https://github.com/mattgrayling/jax-snana">jax-SNANA</a></h3>
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
    <h3 class="card-title font-weight-medium">BayeSN</h3>
    <p class="lead">Next-generation SED model for type Ia supernovae</p>

    <p>I lead development of BayeSN, a hierarchical Bayesian spectral energy distribution model that infers the intrinsic properties of SNe Ia jointly with extinction caused by dust. Using my GPU-accelerated BayeSN framework, I have demonstrated intrinsic differences between SNe Ia in different environments, with significant implications for cosmology.</p>
    <p>BayeSN is integrated into the SNANA supernova cosmology pipeline.</p>
    <p>Other groups have used BayeSN to analyse supernovae observed with JWST, including
       SN 2023adsy (<a href="https://doi.org/10.1051/0004-6361/202554209">Vinkó &amp; Regős 2025</a>) and
       SN 2023aeax (<a href="https://arxiv.org/abs/2411.11953">Pierel et al. 2025</a>).</p>

    <div class="mt-3">
      <span class="badge bg-primary">Python</span>
      <span class="badge bg-info text-dark">JAX</span>
      <span class="badge bg-secondary">NumPyro</span>
      <span class="badge bg-success text-dark">GPU</span>
    </div>
  </div>

  <!-- BayeSN-TD Card -->
  <div class="card mt-3 p-3">
    <h3 class="card-title font-weight-medium"><a href="https://github.com/bayesn/bayesn-td" target="_blank" rel="noopener noreferrer">BayeSN-TD</a></h3>
    <p class="lead">Time-delay inference for gravitationally lensed Type Ia supernovae</p>

    <p>I developed BayeSN-TD, an adaptation of BayeSN for strongly lensed supernovae, and applied it to measure the local expansion rate of the universe using the lensed SN H0pe.</p>
    <p>The accompanying paper is <a href="https://doi.org/10.1093/mnras/stag340">published in MNRAS</a>.</p>

    <div class="mt-3">
      <span class="badge bg-primary">Python</span>
      <span class="badge bg-info text-dark">JAX</span>
      <span class="badge bg-secondary">NumPyro</span>
    </div>
  </div>

  <!-- Repositories -->
  {% if site.data.repositories.github_repos %}
  <div class="card mt-3 p-3">
    <h3 class="card-title font-weight-medium">Repositories</h3>
    <div class="repositories d-flex flex-wrap justify-content-center align-items-stretch mt-3">
      {% for repo in site.data.repositories.github_repos %}
        {% include repository/repo.liquid repository=repo %}
      {% endfor %}

      <div class="repo p-2">
        <a class="repository-link" href="https://github.com/bayesn/bayesn-td" target="_blank" rel="noopener noreferrer">
          <span>bayesn/bayesn-td</span><span class="repository-source">GitHub ↗</span>
        </a>
        <p class="repo-description">Time-delay inference extension for gravitationally lensed Type Ia supernovae</p>
        <span class="repo-language">Python</span>
      </div>
    </div>
  </div>
  {% endif %}

  <!-- Related Content -->
  <div class="related-content">
    <h4>Explore Further</h4>
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
