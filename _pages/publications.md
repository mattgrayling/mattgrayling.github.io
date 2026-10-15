---
layout: page
permalink: /publications/
title: Publications
hide_title: true
nav: true
nav_order: 3
---

<!-- _pages/publications.md -->

<!-- ADS Publications Link -->
<div class="text-center mb-2">
  <a href="https://ui.adsabs.harvard.edu/search/filter_doctype_facet_hier_fq_doctype=AND&filter_doctype_facet_hier_fq_doctype=doctype_facet_hier%3A%220%2FArticle%22&fq=%7B!type%3Daqp%20v%3D%24fq_database%7D&fq=%7B!type%3Daqp%20v%3D%24fq_doctype%7D&fq_database=(database%3Aastronomy%20OR%20database%3Aphysics)&fq_doctype=(doctype_facet_hier%3A%220%2FArticle%22)&q=%20author%3A%22Grayling%2C%20M%22&sort=date%20desc%2C%20bibcode%20desc&p_=00"
     target="_blank"
     class="btn btn-outline-primary btn-lg ads-button">
    <i class="ai ai-ads ai-fw"></i> View All Publications on ADS
  </a>
</div>

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="cv">
  <!-- First Author Publications -->
  <div class="card mt-3">
    <h3 class="card-title font-weight-medium"><i class="fas fa-user-edit"></i> First Author Publications</h3>
    <div class="publications first-author-pubs">
      {% bibliography --group_by none --query @*[author~=^{Grayling}] %}
    </div>
  </div>

  <!-- Coauthored publications, automatically grouped by year -->
  <div class="card mt-3">
    <h2 class="card-title h3 font-weight-medium">Coauthored Publications</h2>
    <div class="publications">
      {% bibliography --group_by year --group_order descending --query @*[author~=and.*Grayling] %}
    </div>
  </div>

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
        <a href="/software/" class="related-card card">
          <div class="card-body">
            <strong><i class="fas fa-code"></i>Software</strong>
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
