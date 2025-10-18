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
    After applying typical standardisation methods, we find that SNe Ia in massive galaxies appear systematically (~0.05-0.1 mag brighter)
    than those in low-mass galaxies. Understanding this effect is vital for both supernova astrophysics and cosmology; learning about how the properties
    of SNe Ia are affected by their environment will help inform us about their progenitor stars, while proper treatment of this
    dependence is vital to accurate distance estimation. There are two possible causes: either there are intrinsic differences
    between SNe Ia in different environments, or there is one homogeneous population with apparent differences caused by differing impacts
    of dust extinction in different types of galaxies.
  </p>
  <p>
    I have investigated this problem using <strong>BayeSN</strong>, a next-generation SED model for SNe Ia that leverages hierarchical Bayesian
    inference to explicitly separate dust extinction from the intrinsic properties of SNe Ia. We can apply BayeSN to large samples of SNe Ia
    to infer from data the relative contributions of these two effects.
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
      <h6><i class="fas fa-atom"></i> Intrinsic SN Ia Differences</h6>
      <p>While dust may play a role, SNe Ia in different types of galaxy do seem to show intrinsic differences, pointing
      to some progenitor differences</p>
    </div>

    <div class="finding-card mb-3">
      <h6><i class="fas fa-chart-line"></i> Difference in i-band secondary maximum</h6>
      <p>Intrinsic differences are particularly strong <strong>(4.5σ difference)</strong> around i-band secondary
      maximum; understanding this may help explain what these progenitor differences are</p>
    </div>

    <div class="finding-card mb-3">
      <h6><i class="fas fa-check-circle"></i> Validation on Simulations</h6>
      <p>We apply BayeSN to simulation based on alternative SED model, SALT, which incorporate dust and intrinsic
      differences, verifying that BayeSN is indeed able to distinguish these two effects separately</p>
    </div>
  </div>
</div>

<div class="callout-box mt-5">
  <h6><i class="fas fa-lightbulb"></i> Impact</h6>
  <p><strong>Cosmology:</strong> Provides a path to reduce systematic uncertainty for LSST and beyond. BayeSN is being integrated into DESC cosmological analysis pipelines.</p>
  <p class="mb-0"><strong>Astrophysics:</strong> Evidence for distinct progenitor populations or environmental effects that affect explosion physics.</p>
</div>

<!-- Publications and Collaborators Section -->
<div class="row mt-5">
  <!-- Left Column: Publications (Wider) -->
  <div class="col-lg-8">
    <div class="cv">
      <div class="card">
        <h3 class="card-title font-weight-medium"><i class="fas fa-file-alt"></i> Relevant Publications</h3>
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
                  <div class="title">Scalable hierarchical BayeSN inference: investigating dependence of SN Ia host galaxy dust properties on stellar mass and redshift</div>
                  <div class="author">
                    <em>Matthew Grayling</em>, Stephen Thorp, Kaisey S. Mandel, Suhail Dhawan, Ana Sofia M. Uzsoy, Benjamin M. Boyd, Erin E. Hayes, and Sam M. Ward
                  </div>
                  <div class="periodical">
                    <em>Monthly Notices of the Royal Astronomical Society</em>, June 2024
                  </div>
                  <div class="links">
                    <a href="https://doi.org/10.1093/mnras/stae1202" class="btn btn-sm z-depth-0" role="button"><i class="fas fa-link fa-fw"></i> DOI</a>
                    <a href="https://ui.adsabs.harvard.edu/abs/2024MNRAS.531..953G" class="btn btn-sm z-depth-0" role="button"><i class="ai ai-ads ai-fw"></i> ADS</a>
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
                    <a href="https://academic.oup.com/mnras" class="journal-badge-link">
                      <img src="/assets/img/journals/mnras_test.png" alt="MNRAS" class="journal-logo-img">
                    </a>
                  </div>
                </div>
                <div class="col-sm-10">
                  <div class="title">BayeSN and SALT: a comparison of dust inference across SN Ia light-curve models with DES5YR</div>
                  <div class="author">
                    <em>M. Grayling</em> and B. Popovic
                  </div>
                  <div class="periodical">
                    <em>Monthly Notices of the Royal Astronomical Society</em>, September 2025
                  </div>
                  <div class="links">
                    <a href="https://doi.org/10.1093/mnras/staf1345" class="btn btn-sm z-depth-0" role="button"><i class="fas fa-link fa-fw"></i> DOI</a>
                    <a href="https://ui.adsabs.harvard.edu/abs/2025MNRAS.542.2060G" class="btn btn-sm z-depth-0" role="button"><i class="ai ai-ads ai-fw"></i> ADS</a>
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
