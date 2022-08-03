# Micro-Certification of Sustainable Research Software with Badges

## Table of Content
- [Overview](#overview)
- [Certification Criteria and Badges](#certification-criteria-and-badges)
- [The fair-software badge](#the-fair-software-badge)
- [Table](table.html)

## Introduction
Certificates can build trust and inform decisions.    
From a user perspective criteria to evaluate the sustainability of software are not always obvious. And problems related to the sustainability of software usually show towards or after the end of research projects. This creates uncertainty at the time the decisions about software are made.    
For developers this is also problematic since investing substantial amounts of resources in the sustainability of a software product is not immediatly recognizable to users. Certificates can help to make these investments visible and reduce uncertainty.    
At the same time formal certification processes are resource-intensive (for both ... and ...) and ideally are backed by an institution with a long term commitment and funding. Certificates need to be updated and renewed periodically, as does the certification process itself.    
Micro-certification is an attempt to reduce some of the overhead of certification processes (for both the... and the ...) by focusing on small units. It is usually talked about in the context of knowledge acquisition but some of it's concepts and technologies can be transfered to the domain of software evaluation. Instead of investing resources en bloc (and getting nothing in return if you run out of steam on the way) to get a whole set of skills certified, mc encourages incrementally gaining and refining specific skills ("continous upskilling"). For sustainability certification this translates to: instead of confronting software developers with a long winded certification process, they can incrementally apply measures to enhance sustainability of their product and immediately get a recognizable output.       
Mirco-certification with badges can help inform decisions by providing metrics relevant for the evaluation of software sustainability in a readable, consistent and portable form. 
Metrics provided by the badges often update automatically; thus including those metrics i.e. in a software registry does not increase maintenance cost dramatically (checks for broken badges might be still a good idea).
Low level badges that simply pass on metrics or information empower users to make an informed decision based on their own weighting of criteria. Other more high level badges like the fair-software badge aggregate different metrics and combine them into a quick overview.


## Certification criteria and badges

### License

- https://shields.io/category/license

### Version

- https://shields.io/category/version

### Software Management

Chat: 
- RocketChat Shield
- https://shields.io/category/chat

Issue tracking:
- https://shields.io/category/issue-tracking

### Documentation

Dependencies:
- https://shields.io/category/dependencies

Read-the-docs:
- https://shields.io/category/build - /readthedocs/...

### Quality

Dependencies, see Documentation

Analysis:
- https://shields.io/category/analysis

Build:
- https://shields.io/category/build

### Publication & Archiving

Build, see Quality

Software Heritage:
- https://www.softwareheritage.org/2020/01/13/the-swh-badges-are-here/

Draft: PID Badge
- tests if there is a persistent identifier (DOI, Handle, ...)
- tests: has_doi, has_handle, has_zenodo_badge


### Citation and Credits

Draft: PID Badge, see Publication & Archiving

Draft: Credits Badge
- authors and contributors are named explicitly, Vconsistency between contributors (API) and info in citation
- tests: has_authors_file, has_citationcff_file, has_contributors_api
- Alternative: Citation Metadata Consistency Check - https://github.com/citation-file-format/cffconvert-github-action

### Complex badges

#### The fair-software badge

Website: <https://fair-software.eu/> 

Five recommendations for FAIR software:

1. Use a publicly accessible repository with version control
2. Add a license
3. Register your code in a community registry
4. Enable citation of the software
5. Use a software quality checklist

##### Using the badge in a GitHub repository

Source: <https://github.com/fair-software/howfairis-github-action>

The badge can be implemented in any GitHub repository. There are only a few additions to be made:

**Step 1:** create a file in the repository at .github/workflows/fair-software.yml and add the content listed in <https://github.com/fair-software/howfairis-github-action#assess-compliance-with-fair-softwareeu>

On the next push to your repository the fair-software.eu recommendations will be tested against information in your GitHub repository and the badge will be generated as output of the job. You can then add the badge to your README file:

**Step 2:** add the badge definition to your README.md file. It can look like this, but the actual result is available in the output of the GitHub action: [![fair-software.eu]([https://img.shields.io/badge/fair--software.eu-● ● ○ ○ ○-orange)](https://img.shields.io/badge/fair--software.eu-%E2%97%8F%20%20%E2%97%8F%20%20%E2%97%8B%20%20%E2%97%8B%20%20%E2%97%8B-orange))

##### Alternative: Local application of the badge generator

A Python package that implements a checker against the fair-software recommendations is available at <https://github.com/fair-software/howfairis>. It can be run locally or in a Docker image.


#### Drafts

##### Structured Metadata Files Badge

- means there are standard files for metadata
- tests if the following files exist: README, CONTRIBUTE, AUTHORS, LICENSE, CITATION.cff (optional: PID test)
- refs. 02 Dokumentation, 03 Software Management, 08 Zitation und Anerkennung

##### Reference Publication Badge

- there a reference in the metadata to a review or a scientific publication in a discipline-specific medium (journal, conference)
- tests: field in metadata, other badges
- refs. 01 Recherche, 02 Dokumentation, 07 Publikation und Archivierung; N4C activities: Registry, CKIT

