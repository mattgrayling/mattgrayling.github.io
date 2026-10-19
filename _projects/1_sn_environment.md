---
layout: page
title: Supernova Host Environments
description: Understanding how SNe Ia are influenced by the environment in which they explode
img: assets/img/environment_mass.png
importance: 1
category: current
---

<div class="intro-card">
  <h2>Understanding the 'Mass Step'</h2>
  <p>
    After applying typical standardisation methods, we find that SNe Ia in massive galaxies appear systematically brighter (~0.05-0.1 mag)
    than those in low-mass galaxies. Understanding this effect is vital for both supernova astrophysics and cosmology; learning about how the properties
    of SNe Ia are affected by their environment will help inform us about their progenitor stars, while proper treatment of this
    dependence is vital to accurate distance estimation. Both intrinsic differences between SNe Ia and differences in dust extinction across host environments may contribute to this effect.
  </p>
  <p>
    I have investigated this problem using <strong>BayeSN</strong>, a next-generation hierarchical Bayesian SED model for SNe Ia that separates
    dust extinction from the intrinsic properties of SNe Ia. We can apply BayeSN to large samples of SNe Ia
    to infer from data the relative contributions of these two effects.
  </p>
  <p>
    Recent work extends this analysis to the <a href="https://arxiv.org/abs/2605.06799">ZTF SN Ia DR2 sample</a>.
    In <a href="https://arxiv.org/abs/2606.19429">BayeSN &times; Dovekie</a>, we jointly model photometric
    cross-calibration and the supernova SED, connecting model training to the calibration needed for precise distances.
  </p>
</div>

<div class="row mt-5 mb-5">
  <!-- Left Column: Main Figure -->
  <div class="col-lg-6 mb-4">
    <figure class="plot-card-grid">
      <img src="/assets/img/environment_mass.png" alt="Light curve evolution for high and low mass host galaxies" class="img-fluid">
      <figcaption class="p-3">
        <strong>Figure 1.</strong> The mean rest-frame light curve evolution for supernovae in high-mass (blue) and low-mass (red) host galaxies across g, r, and i bands.
      </figcaption>
    </figure>
  </div>

  <!-- Right Column: Key Findings Cards -->
  <div class="col-lg-6">
    <h4 class="accent-section-heading">Key Findings</h4>

    <div class="finding-card mb-3">
      <h6>Intrinsic SN Ia Differences</h6>
      <p>While dust may play a role, SNe Ia in different types of galaxy do seem to show intrinsic differences, pointing
      to some progenitor differences</p>
    </div>

    <div class="finding-card mb-3">
      <h6>Difference in i-band secondary maximum</h6>
      <p>Intrinsic differences are particularly strong <strong>(4.5σ difference)</strong> around i-band secondary
      maximum; understanding this may help explain what these progenitor differences are</p>
    </div>

    <div class="finding-card mb-3">
      <h6>Validation on Simulations</h6>
      <p>We apply BayeSN to simulations based on an alternative SED model, SALT, which incorporate dust and intrinsic
      differences, verifying that BayeSN is indeed able to distinguish these two effects separately</p>
    </div>

  </div>
</div>

<div class="callout-box mt-5">
  <h6>Impact</h6>
  <p><strong>Cosmology:</strong> Accounting for intrinsic differences and dust extinction across host environments helps us estimate supernova distances more accurately. BayeSN is being integrated into DESC cosmological analysis pipelines.</p>
  <p class="mb-0"><strong>Astrophysics:</strong> Evidence for distinct progenitor populations or environmental effects that affect explosion physics.</p>
</div>

<!-- Publications and Collaborators Section -->
<div class="row mt-5">
  <!-- Left Column: Publications (Wider) -->
  <div class="col-lg-8">
    <div class="cv">
      <div class="card">
        <h3 class="card-title font-weight-medium">Relevant Publications</h3>
        <div class="publications">
          {% bibliography --group_by none --query @*[key=2026arXiv260506799G || key=2026arXiv260619429G || key=2025MNRAS.542.2060G || key=2024MNRAS.531..953G] %}
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
          <strong>Stephen Thorp</strong>
          <span>University of Cambridge</span>
        </div>
        <div class="collaborator-item">
          <strong>Aaron Do</strong>
          <span>University of Cambridge</span>
        </div>
        <div class="collaborator-item">
          <strong>Madeleine Ginolin</strong>
          <span>University of Cambridge</span>
        </div>
        <div class="collaborator-item">
          <strong>Lisa Kelsey</strong>
          <span>University of Cambridge</span>
        </div>
      </div>
    </div>
  </div>
</div>
