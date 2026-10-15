---
layout: page
title: Simulation-Based Inference for Supernova Cosmology
description: Developing next-generation methods for cosmological parameter inference
img: assets/img/sbi_flow.png
importance: 3
category: current
---

<div class="intro-card">
  <h2>Supernova Astrophysics and Cosmology</h2>
  <p>
    Current approaches to SN cosmology rely on multiple, disconnected steps. Simulations to characterise selection effects
    are based on a fixed fiducial model which is inferred separately to cosmological parameters. Astrophysical effects are
    already the largest source of systematic uncertainty in SN cosmology, and mistaken assumptions in the
    forward model arising from astrophysical unknowns could bias our results.
  </p>
  <p>
    I am interested in simulation-based inference (SBI) as a way to account for astrophysical uncertainty and survey selection bias in supernova cosmology. In SBI, neural networks learn complex relationships between model parameters and observations from realistic simulations, allowing us to include effects that are difficult to express in an analytic likelihood.
  </p>
  <p>
    I developed <a href="/software/">jax-SNANA</a> to accelerate supernova simulations, light curve fitting and cosmological
    analysis with JAX. Its compiled simulator supports SBI workflows. My recent collaborative work includes
    <a href="https://arxiv.org/abs/2603.11165">FlowSN</a>, which learns a likelihood that accounts for survey selection,
    and <a href="https://arxiv.org/abs/2607.28725">SBI modelling of SN Ia populations</a>.
  </p>
</div>

<div class="row mt-5 mb-5">
  <!-- Left Column: Main Figure -->
  <div class="col-lg-6 mb-4">
    <figure class="plot-card-grid">
      <img src="/assets/img/sbi_flow.png" alt="Simulation-based inference framework" class="img-fluid">
      <figcaption class="p-3">
        <strong>Figure 1.</strong> From Boyd et al. (2024), schematic of normalising flow-based method to model selection effects in SN cosmology analyses.
      </figcaption>
    </figure>
  </div>

  <div class="col-lg-6">
    <h4 class="accent-section-heading">Selection Effects and Astrophysical Uncertainty</h4>
    <p>Magnitude limits mean that brighter supernovae are more likely to enter an observed sample. Realistic survey
       simulations allow us to account for this selection and for contamination from other types of supernova.</p>
    <p>I am interested in including astrophysical effects in the same model used for cosmological inference.
       This allows uncertainty about the supernova population and host-galaxy dust to be propagated into
       constraints on cosmological parameters.</p>
  </div>
</div>

<!-- Publications and Collaborators Section -->
<div class="row mt-5">
  <!-- Left Column: Publications (Wider) -->
  <div class="col-lg-8">
    <div class="cv">
      <div class="card">
        <h3 class="card-title font-weight-medium">Key Publications</h3>
        <div class="publications">
          {% bibliography --group_by none --query @*[key=2026arXiv261019000G || key=2026arXiv260728725P || key=2026arXiv260311165B || key=2024MNRAS.530.3881K || key=2024arXiv240715923B] %}
        </div>
      </div>
    </div>
  </div>

  <!-- Right Column: Collaborators (Narrower) -->
  <div class="col-lg-4">
    <div class="project-info-card">
      <h5>Key Collaborators</h5>
      <div class="collaborator-list">
        <div class="collaborator-item">
          <strong>Kaisey Mandel</strong>
          <span>University of Cambridge</span>
        </div>
        <div class="collaborator-item">
          <strong>Ben Boyd</strong>
          <span>University of Cambridge</span>
        </div>
        <div class="collaborator-item">
          <strong>Roberto Trotta</strong>
          <span>SISSA</span>
        </div>
        <div class="collaborator-item">
          <strong>Kosio Karchev</strong>
          <span>SISSA</span>
        </div>
      </div>
    </div>
  </div>
</div>
