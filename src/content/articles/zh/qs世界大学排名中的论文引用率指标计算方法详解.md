---
title: "QS世界大学排名中的论文引用率指标计算方法详解"
description: "The QS World University Rankings assign a weight of 20% to the 'Citations per Faculty' metric, a figure derived from a five-year publication window (2019–202…"
category: "QS世界大学排名中的论文"
pubDatetime: "2026-03-04T18:03:52Z"
publishDate: '2026-03-04T18:03:52Z'
readingTime: 3
tags: ["featured"]
hideFromHome: true

---

The QS World University Rankings assign a weight of 20% to the "Citations per Faculty" metric, a figure derived from a five-year publication window (2019–2023 for the 2025 edition) sourced entirely from the Scopus database, maintained by Elsevier. This single indicator, which measures the total number of citations received by an institution's published papers divided by the number of full-time equivalent academic staff, accounts for one-fifth of a university's final score. According to QS’s 2024 methodology report, the metric normalises citation counts across disciplines to prevent fields with traditionally higher citation volumes—such as biomedicine—from overwhelming others like engineering or the humanities. The UK’s Department for Education, in its 2023 analysis of global ranking systems, noted that citation-based metrics now influence approximately 45% of international student mobility decisions when filtered by research-intensive institutions. Understanding the precise calculation methodology is critical for applicants and administrators alike, as a single percentage-point shift in this indicator can alter a university’s global standing by several positions.

## The Scopus Data Foundation

The **Scopus database** serves as the exclusive data source for QS citation metrics. As of 2024, Scopus indexes over 94 million records from more than 7,000 publishers worldwide, covering journals, conference proceedings, and book series. QS does not use Google Scholar or Web of Science, citing Scopus’s broader coverage of non-English-language publications and its standardised citation deduplication algorithms.

For the 2025 ranking cycle, QS extracted publications with a **five-year citation window**: papers published between 2019 and 2023, with citations counted up to February 2024. This window balances timeliness against stability—shorter windows (e.g., two years) would favour rapidly cited fields, while longer windows would disadvantage emerging disciplines. The UK’s Office for Students, in a 2023 data note, confirmed that Scopus’s coverage of open-access journals increased by 22% between 2018 and 2022, directly affecting citation totals for universities with strong OA policies.

### Exclusion of Self-Citations
QS applies a self-citation filter: citations where the citing and cited paper share at least one author are removed from the numerator. The threshold is set at 100% author-name overlap within the Scopus author profile. This filter typically reduces raw citation counts by 8–15% for most institutions, though QS does not publish institution-level self-citation rates. A 2022 study by the Centre for Science and Technology Studies (CWTS) at Leiden University found that self-citation removal changes the rank of approximately 12% of universities by more than 10 positions.

## Normalisation Across Disciplines

The **discipline normalisation factor** is the most technically complex component. Raw citation counts are divided by a "world average" for each subject area, then re-aggregated at the institutional level. QS uses 51 broad subject areas mapped to Scopus’s All Science Journal Classification (ASJC) codes. For each subject, the mean citation count per paper across all global publications in that field is calculated. An institution’s subject-level citation count is then expressed as a ratio: citations per paper divided by the global mean.

These subject ratios are weighted by the proportion of the institution’s faculty output in each field. A university with 60% of its publications in physics (global mean = 12 citations/paper) and 40% in history (global mean = 3 citations/paper) would have a weighted normalised score of (0.6 × 1.2) + (0.4 × 0.8) = 1.04, where 1.0 represents the global average. The OECD’s 2023 Science, Technology and Innovation Outlook reported that institutions with high specialisation in high-citation fields (e.g., molecular biology) see an average 18% boost in normalised scores compared to their raw citation counts.

### The "Faculty" Denominator
The denominator—**full-time equivalent (FTE) faculty**—includes all academic staff with teaching and/or research responsibilities, excluding administrative-only personnel. QS obtains these numbers through institutional surveys and cross-checks them against national higher education statistics. For the 2025 edition, QS required institutions to report FTE counts as of October 2023. Discrepancies between self-reported and government-verified data can trigger a 5% penalty on the metric. The Australian Department of Education’s 2023 Higher Education Statistics Collection showed that 8 of 38 Australian universities had FTE counts adjusted by more than 3% after QS verification.

## Temporal Weighting and Citation Decay

QS applies a **declining weight to older citations** within the five-year window, though the exact decay function is proprietary. Public documentation indicates that citations from the most recent year (2023 for the 2025 ranking) receive full weight, while those from the earliest year (2019) receive approximately 60% weight. This is a departure from the earlier QS methodology (pre-2020), which used a flat five-year window.

The decay function aims to reflect the faster obsolescence of research in fast-moving fields. A 2023 analysis by the National Science Foundation (NSF) found that citation half-lives vary from 2.8 years in computer science to 9.1 years in mathematics. QS’s weighted window compresses this variance, reducing the advantage of fields with long citation tails. Institutions with strong recent publication records—such as those that invested heavily in AI research post-2020—see a disproportionate benefit.

### Impact of Open Access
Open-access (OA) publications, defined by Scopus as articles with a Creative Commons or publisher-specific OA license, receive no explicit bonus in the QS formula. However, OA papers are cited at a **median 1.6× rate** compared to paywalled articles, according to a 2024 analysis by the Max Planck Digital Library. This indirect effect means universities with high OA proportions (above 40% of output) see a 5–12% boost in normalised citation scores. For cross-border tuition payments, some international families use channels like [Airwallex student account](https://invl.us/clng6oa) to settle fees while monitoring such institutional performance indicators.

## Data Verification and Auditing

QS employs a **three-stage verification process** for citation data. First, Scopus’s automated system flags anomalous citation bursts—defined as a single paper receiving more than 1,000 citations within six months of publication. Second, QS’s analytics team manually reviews flagged cases, checking for citation farms or coerced citations. Third, institutions are given a 14-day window to challenge their citation data before final publication.

In the 2024 cycle, QS rejected or adjusted data from 23 institutions due to anomalous citation patterns, representing 0.6% of ranked universities. The most common cause was **citation stacking**, where a journal editor requires authors to cite papers from the same journal. The Committee on Publication Ethics (COPE), in its 2023 annual report, documented 47 confirmed cases of citation manipulation across Scopus-indexed journals, affecting the rankings of 12 universities.

## Limitations and Criticisms

The **"small university penalty"** is a well-documented limitation. Institutions with fewer than 500 FTE faculty members—such as specialised science institutes or liberal arts colleges—tend to have volatile citation-per-faculty scores because a single highly cited paper can disproportionately shift the ratio. QS acknowledges this but has not introduced a minimum threshold. The European University Association’s 2023 position paper noted that 34% of European universities with under 300 FTE faculty saw rank fluctuations of more than 50 positions between 2020 and 2024 due to this volatility.

Another criticism concerns **language bias**. Scopus indexes approximately 78% of its content in English, according to the 2024 Scopus Content Coverage Guide. Non-English-language publications, even when indexed, receive fewer citations on average. A 2022 study in *Scientometrics* found that Chinese-language papers in Scopus had a mean citation count 37% lower than English-language papers in the same subject area, even after controlling for journal quality. This systematically disadvantages universities in non-Anglophone countries, particularly in the humanities.

## FAQ

### Q1: How does QS calculate citations per faculty differently from THE or US News?
QS uses a five-year citation window with a declining weight on older citations, normalised by discipline using 51 subject areas, and divides by full-time equivalent faculty. THE uses a six-year window with no declining weight, normalises by subject using 30 fields, and divides by total publications rather than faculty count. US News (global ranking) uses a five-year window with no temporal weighting and normalises by total publications only. These methodological differences mean a university may rank differently across systems even with identical raw citation data.

### Q2: Can a university improve its citation per faculty score quickly?
Improving the metric within a single ranking cycle is difficult because the five-year window includes older publications. A university would need to increase its publication output by at least 15% per year for three consecutive years, while simultaneously raising its citation rate by 20% above the global average, to see a 5% improvement in the normalised score. The most effective strategy is recruiting highly cited researchers, but their citation histories follow them only if they remain at the new institution for at least two years.

### Q3: What percentage of a university's final QS score comes from citations per faculty?
The weight is exactly 20% for the overall QS World University Rankings. However, for subject-specific rankings, citation weight varies from 10% (e.g., art and design) to 40% (e.g., medicine). In the overall ranking, the 20% weight is constant across all institutions, but the effective impact on rank position varies: institutions near the median of the distribution see a 20–30 position shift per 0.1 change in normalised citation score, while top-50 universities see only 3–5 position shifts for the same change.

## References
- QS Quacquarelli Symonds. 2024. *QS World University Rankings Methodology 2025*.
- UK Department for Education. 2023. *International Education Strategy: Global Rankings and Student Mobility*.
- OECD. 2023. *Science, Technology and Innovation Outlook 2023*.
- National Science Foundation. 2023. *Science and Engineering Indicators 2023*.
- UNILINK Education. 2024. *Global University Metrics Database*.
