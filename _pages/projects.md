---
layout: page
title: Research
permalink: /research/
nav: true
nav_order: 1
horizontal: false
hide_title: true
---

<div class="cv">
<div class="card p-3">
  <p>My research spans astrophysics and cosmology, focusing on <strong>type Ia supernovae</strong> (SNe Ia), vast cosmic
     explosions of white dwarf stars. We use SNe Ia as "standard candles" to measure cosmic distances and probe cosmological
     parameters such as the equation-of-state of dark energy. I develop and apply advanced statistical methods 
     to analyse large samples of SNe Ia to better understand their physical properties and improve cosmological analyses.</p>

  <h5>Key Research Interests</h5>
  <ul>
    <li><strong>Understanding the environmental dependence</strong> of SNe Ia, informing us about their progenitor systems and improving standardisation for cosmology</li>
    <li><strong>Hierarchical Bayesian modelling</strong> for SN Ia SEDs with <a href="/software/">BayeSN</a>, enabling data-driven and physics-informed inference of properties of large SN samples</li>
    <li><strong>Strongly lensed supernovae</strong>, inferring time delays and magnifications of these events enabling $H_0$ constraints independent of the distance ladder</li>
    <li><strong>Simulation-based inference</strong>, developing next-generation methods for cosmological inference using SNe Ia</li>
  </ul>
</div>

<div class="card mt-3 p-3">
<h3 class="section-heading">Research Highlights</h3>

<!-- pages/projects.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display projects without categories -->

{% assign sorted_projects = site.projects | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
</div>

<!-- Related Content -->
<div class="related-content">
  <h4><i class="fas fa-network-wired"></i>Explore Further</h4>
  <div class="row g-3">
    <div class="col-md-3">
      <a href="/software/" class="related-card card">
        <div class="card-body">
          <strong><i class="fas fa-code"></i>BayeSN Software</strong>
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
