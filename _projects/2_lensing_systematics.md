---
layout: page
title: Strongly-lensed Supernovae
description: Inference of time delays and magnifications of strongly-lensed SNe Ia
img: assets/img/sn_h0pe.jpg
importance: 2
category: current
---

<div class="intro-card">
  <h2>Lensed Supernovae and the Hubble Tension</h2>
  <p>
    For a SN which is lensed by a galaxy or galaxy cluster along the line of sight, multiple images of the SN appear at 
    slightly different times as they travel along different paths to reach us.
    Measuring the time delays between these images appearing, combined with a model of the mass distribution in the lens, allows 
    us to infer $H_0$ without relying on the cosmic distance ladder. This provides an independent analysis of $H_0$ to
    investigate the current Hubble tension between early- and late-Universe measurements.
  </p>
  <p>
    I have extended BayeSN to develop <strong>BayeSN-TD</strong>, a Bayesian framework for inferring time delays and magnifications
    of strongly-lensed SNe Ia. BayeSN-TD is designed to marginalise over the impact of microlensing, time-dependent magnification fluctuations
    caused by stars in the lensing galaxy, which can bias time delay measurements if not accounted for. I applied BayeSN-TD to
    SN H0pe, the first multiply-imaged lensed SN Ia suitable for a competitive $H_0$ measurement, to infer time delays
    and a corresponding $H_0$ value.
  </p>
</div>

<div class="row mt-5 mb-5">
  <!-- Left Column: Main Figure -->
  <div class="col-lg-6 mb-4">
    <figure class="plot-card-grid">
      <img src="/assets/img/sn_h0pe.jpg" alt="SN H0pe - triply imaged lensed supernova" class="img-fluid">
      <figcaption class="p-3">
        <strong>Figure 1.</strong> SN H0pe, the first spectroscopically confirmed Type Ia supernova with multiple resolved images, observed by the James Webb Space Telescope. <em>Image Credit: NASA, ESA, CSA, STScI, B. Frye (University of Arizona), R. Windhorst (ASU), S. Cohen (ASU), J. D'Silva (UWA), A. Koekemoer (STScI), J. Summers (ASU); Image Processing: A. Pagan (STScI).</em>
      </figcaption>
    </figure>
  </div>

  <!-- Right Column: Key Findings Cards -->
  <div class="col-lg-6">
    <h4 class="accent-section-heading">Key Results</h4>

    <div class="finding-card mb-3">
      <h6><i class="fas fa-check-circle"></i> Validation on Simulations</h6>
      <p>BayeSN-TD produces robust time-delay estimates with well-calibrated uncertainties, even when applied to simulations
      based on an alternative model</p>
    </div>

    <div class="finding-card mb-3">
      <h6><i class="fas fa-clock"></i> Time Delay Estimates</h6>
      <p>Inferred time delays of <strong>$\Delta T_{BA}$ = $121.9^{+9.5}_{-7.5}$ days</strong> and <strong>$\Delta T_{BC} = 63.2^{+3.2}_{-3.3}$ days</strong> between the three images</p>
    </div>

    <div class="finding-card mb-3">
      <h6><i class="fas fa-ruler-combined"></i> Hubble Constant Measurement</h6>
      <p>Measured H₀ = <strong>$69.3^{+12.6}_{-7.8}$ km/s/Mpc</strong> from SN H0pe, consistent with both CMB and distance ladder measurements</p>
    </div>

  </div>
</div>

<div class="callout-box mt-5">
  <h6><i class="fas fa-lightbulb"></i> Future Potential</h6>
  <p class="mb-0"><strong>SN H0pe:</strong> Further analysis of SN H0pe, and other lensed SNe discovered by JWST, will provide strong constraints on $H_0$.</p>
  <p><strong>Future Surveys:</strong> LSST will discover hundreds of lensed supernovae over 10 years, and  BayeSN-TD can play a valuable role in the analysis of these events.</p>
</div>

<!-- Publications and Collaborators Section -->
<div class="row mt-5">
  <!-- Left Column: Publications (Wider) -->
  <div class="col-lg-8">
    <div class="cv">
      <div class="card">
        <h3 class="card-title font-weight-medium"><i class="fas fa-file-alt"></i> Relevant Publications</h3>
        <div class="publications">
          {% bibliography --group_by none --query @*[key=2025arXiv251011719G || key=2025arXiv251007637A] %}
        </div>
      </div>
    </div>
  </div>

  <!-- Right Column: Collaborators (Narrower) -->
  <div class="col-lg-4">
    <div class="project-info-card">
      <h5><i class="fas fa-users"></i> Key Collaborators</h5>
      <div class="collaborator-list">
        <div class="collaborator-item">
          <strong>Kaisey Mandel</strong>
          <span>University of Cambridge</span>
        </div>
        <div class="collaborator-item">
          <strong>Justin Pierel</strong>
          <span>STSci</span>
        </div>
        <div class="collaborator-item">
          <strong>Erin Hayes</strong>
          <span>University of Cambridge</span>
        </div>
        <div class="collaborator-item">
          <strong>Massimo Pascale</strong>
          <span>UC Berkeley</span>
        </div>
      </div>
    </div>
  </div>
</div>
