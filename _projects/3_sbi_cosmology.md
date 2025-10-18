---
layout: page
title: Simulation-Based Inference for Supernova Cosmology
description: Developing next-generation methods for cosmological parameter inference
img: assets/img/sbi_flow.png
importance: 3
category: current
---

<div class="intro-card">
  <h2>Beyond Summary Statistics</h2>
  <p>
    Current approaches to SN cosmology rely on multiple, disconnected steps. Simulations to characterise selection effects
    are based on a fixed fiducial model which is inferred separately to cosmological parameters. Astrophysical effects are
    already the largest source of systematic uncertainty in SN cosmology, and mistaken assumptions in the
    forward model arising from astrophysical unknowns could bias our results.
  </p>
  <p>
    SBI is a powerful new tool which allows us to perform Bayesian inference even in cases with complex effects,
    such as survey selection bias, which cannot be expressed analytically and incorporated in a likelihood. SBI involves
    forward-simulating data and learning the mapping from observations to parameters directly using neural networks. As long
    as we can simulate realistic observed data from the model, we can perform inference. With LSST imminent, I am interested
    in the promise of SBI to deliver powerful new methods for cosmological inference for next-generation surveys.
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

  <!-- Right Column: Key Findings Cards -->
  <div class="col-lg-6">
    <h4 class="accent-section-heading">Key Advantages</h4>

    <div class="finding-card mb-3">
      <h6><i class="fas fa-layer-group"></i> Incorporate Complex Effects</h6>
      <p>Enables Bayesian inference even with complex effects that cannot be expressed analytically, such as selection effects and contamination from other types of SN</p>
    </div>

    <div class="finding-card mb-3">
      <h6><i class="fas fa-shield-alt"></i> Astrophysical Robustness</h6>
      <p>Rather than relying on a fixed forward model for the population of SNe Ia to do cosmological inference, astrophysical unknowns can be marginalised over when inferring cosmological parameters</p>
    </div>

    <div class="finding-card mb-3">
      <h6><i class="fas fa-tachometer-alt"></i> Scalable Inference</h6>
      <p>SBI methods can allow marginalisation over latent SN parameters, reducing dimensionality and avoiding computationally-expensive light curve fitting</p>
    </div>
  </div>
</div>

<div class="callout-box mt-5">
  <h6><i class="fas fa-lightbulb"></i> Future Potential</h6>
    <p class="mb-0"><strong>LSST Cosmology:</strong> SBI provides a solution to perform robust and scalable cosmological inference using SNe Ia in the LSST era.</p>
</div>

<!-- Publications and Collaborators Section -->
<div class="row mt-5">
  <!-- Left Column: Publications (Wider) -->
  <div class="col-lg-8">
    <div class="cv">
      <div class="card">
        <h3 class="card-title font-weight-medium"><i class="fas fa-file-alt"></i> Key Publications</h3>
        <div class="publications">
          <!-- Publication 1 -->
          <div class="bibliography">
            <div class="list-group-item">
              <div class="row">
                <div class="col-sm-2 abbr">
                  <div class="journal-badge-container" style="background-color: transparent;">
                    <a href="https://academic.oup.com/mnras" class="journal-badge-link">
                      <img src="/assets/img/journals/mnras_test.png" alt="MNRAS" class="journal-logo-img">
                    </a>
                  </div>
                </div>
                <div class="col-sm-10">
                  <div class="title">SIDE-real: Supernova Ia Dust Extinction with truncated marginal neural ratio estimation applied to real data</div>
                  <div class="author">
                    K. Karchev, <em>M. Grayling</em>, B. M. Boyd, R. Trotta, K. S. Mandel, and C. Weniger
                  </div>
                  <div class="periodical">
                    <em>Monthly Notices of the Royal Astronomical Society</em>, June 2024
                  </div>
                  <div class="links">
                    <a href="https://doi.org/10.1093/mnras/stae1038" class="btn btn-sm z-depth-0" role="button"><i class="fas fa-link fa-fw"></i> DOI</a>
                    <a href="https://ui.adsabs.harvard.edu/abs/2024MNRAS.530.3881K" class="btn btn-sm z-depth-0" role="button"><i class="ai ai-ads ai-fw"></i> ADS</a>
                    <a class="bibtex btn btn-sm z-depth-0" role="button"><i class="fas fa-quote-left fa-fw"></i> Bib</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Publication 2 -->
          <div class="bibliography">
            <div class="list-group-item">
              <div class="row">
                <div class="col-sm-2 abbr">
                  <div class="journal-badge-container" style="background-color: transparent;">
                    <a href="https://arxiv.org" class="journal-badge-link">
                      <img src="/assets/img/journals/arxiv_test.png" alt="arXiv" class="journal-logo-img">
                    </a>
                  </div>
                </div>
                <div class="col-sm-10">
                  <div class="title">Accounting for Selection Effects in Supernova Cosmology with Simulation-Based Inference and Hierarchical Bayesian Modelling</div>
                  <div class="author">
                    B. M. Boyd, <em>M. Grayling</em>, S. Thorp, and K. S. Mandel
                  </div>
                  <div class="periodical">
                    <em>arXiv e-prints</em>, July 2024
                  </div>
                  <div class="links">
                    <a href="https://doi.org/10.48550/arXiv.2407.15923" class="btn btn-sm z-depth-0" role="button"><i class="fas fa-link fa-fw"></i> DOI</a>
                    <a href="https://ui.adsabs.harvard.edu/abs/2024arXiv240715923B" class="btn btn-sm z-depth-0" role="button"><i class="ai ai-ads ai-fw"></i> ADS</a>
                    <a class="bibtex btn btn-sm z-depth-0" role="button"><i class="fas fa-quote-left fa-fw"></i> Bib</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
