---
title: "How Artificial Intelligence Is Changing How Rankings Are Calculated and Audited"
description: "In the 2025 edition of the QS World University Rankings, the methodology incorporated a new “Sustainability” indicator weighted at 5%, while the Times Higher…"
category: "How"
pubDatetime: 2026-04-27T18:17:09Z
publishDate: '2026-04-27T18:17:09Z'
readingTime: 8
tags: ["featured"]
---

In the 2025 edition of the QS World University Rankings, the methodology incorporated a new “Sustainability” indicator weighted at 5%, while the Times Higher Education (THE) World University Rankings 2024 introduced a “Research Quality” pillar that accounts for 30% of the total score—a shift that relies on citation data from 83 million publications processed through natural language processing (NLP) algorithms. These changes are not merely cosmetic; they reflect a deeper transformation in how global university rankings are calculated and audited. Historically, rankings relied on static surveys, bibliometric counts, and institutional self-reports—methods prone to lag, manipulation, and human error. Today, machine learning models scrape real-time data from preprint servers, patent offices, and employer databases, while blockchain-based audit trails are being piloted to verify institutional claims. According to the OECD’s 2024 *Education at a Glance* report, 67% of tertiary institutions in OECD countries now use some form of automated data collection for benchmarking, up from 34% in 2019. This article examines the technical mechanisms, methodological shifts, and audit challenges that define this new landscape.

## NLP and Citation Analysis in Research Metrics

**Natural language processing** has become the backbone of citation-based ranking indicators. THE and QS both license Scopus and Web of Science data, but the raw bibliometric records—over 83 million publications and 1.8 billion cited references as of 2024—are too voluminous for manual curation. Instead, ranking bodies deploy NLP models to disambiguate author names, normalize institutional affiliations, and identify citation contexts.

The core challenge is **entity resolution**. A single researcher may publish under “J. Zhang,” “Jian Zhang,” or “Jian Q. Zhang” across different databases. Traditional rule-based matching achieved approximately 85% accuracy; modern transformer-based models (e.g., SciBERT) reach 94–96% precision, according to a 2023 study in *Scientometrics*. This improvement directly affects field-weighted citation impact scores, which account for 15–30% of total rank weight depending on the ranking system.

Another application is **citation context analysis**. Instead of counting raw citations, some experimental rankings now weigh citations by whether they appear in the introduction (lower weight) versus the methods or results sections (higher weight). The THE’s 2024 “Research Quality” pillar, for example, uses an NLP pipeline that classifies citation intent—supporting, contrasting, or neutral—across 12 million full-text articles. This reduces the influence of negative citations and self-citations, which can inflate scores by up to 8% in certain disciplines.

## Machine Learning for Data Imputation and Gap Filling

Institutional data submissions are never complete. When universities fail to report student-to-staff ratios, international enrollment figures, or employer survey responses, ranking bodies must decide whether to exclude them or impute values. **Machine learning imputation** has become the preferred method for handling missing data in the QS and U.S. News frameworks.

QS, for instance, uses a random forest model trained on 15 years of historical data to predict missing values for the “Faculty Student Ratio” indicator. The model considers features such as institutional size, geographic region, subject mix, and prior year’s ratio. Validation tests published in QS’s 2024 methodology white paper show that imputed values deviate from actual reported values by an average of only 3.2%, compared to 9.1% under the previous mean-substitution method.

Similarly, the **Academic Reputation Survey**, which accounts for 40% of QS’s overall score, now uses a gradient-boosted decision tree to detect and exclude anomalous responses. If a respondent from a small liberal arts college gives top marks to 50 unrelated institutions, the model flags the entry as a potential outlier. In 2024, this process removed approximately 4,700 survey responses—about 2.3% of the total—before aggregation.

## Blockchain and Immutable Audit Trails

**Blockchain technology** is being explored as a mechanism to audit the provenance of ranking data. The core problem is verification: when a university claims a 95% graduate employment rate, how does a ranking body confirm that the figure is not inflated? Traditional audit methods rely on spot-checks and signed affidavits, but these are resource-intensive and rarely comprehensive.

In 2023, the European University Association (EUA) piloted a **blockchain-based credential registry** with 14 member institutions. Each university uploads graduate employment data as a hash-anchored transaction to a permissioned ledger. Ranking bodies can then query the ledger without accessing raw personal data, verifying that the reported figures match the on-chain records. The pilot found that 8 of the 14 institutions had discrepancies between their public claims and blockchain-verified data, with an average overstatement of 4.7 percentage points.

THE has expressed interest in integrating similar verification layers into its data collection pipeline. A 2024 concept paper from THE’s data integrity unit outlined a “rankings oracle” that would cross-reference institutional claims against government labor statistics and tax records via smart contracts. While no ranking body has fully adopted blockchain auditing as of 2025, the EUA pilot suggests it could reduce data manipulation by 30–40% in employment-related indicators.

## Algorithmic Bias and Reproducibility Concerns

The shift toward AI-driven calculations introduces new risks of **algorithmic bias**. If a ranking model is trained predominantly on English-language publications and Western institutional data, it may systematically undervalue research output from non-English-speaking regions. A 2024 analysis by Leiden University’s Centre for Science and Technology Studies found that NLP-based citation classifiers misclassified 12% of Chinese-language articles as “low impact” compared to 4% of English-language articles, even after controlling for citation counts.

Reproducibility is another pressing issue. Unlike traditional ranking formulas, which could be replicated using a spreadsheet and publicly available data, AI-based methods often involve proprietary models with non-disclosed hyperparameters. The **QS 2025 methodology** includes a “Sustainability” indicator that uses a neural network trained on 2.3 million institutional web pages and 1.1 million news articles—but the training data and model architecture are not released. This lack of transparency has drawn criticism from 47 university rectors who signed an open letter in *Nature* (2024) calling for “open-source ranking algorithms.”

To address these concerns, some ranking bodies now publish “methodology change logs” and “sensitivity analyses” showing how small perturbations in model parameters affect final scores. THE’s 2024 report, for example, includes a 12-page appendix on the robustness of its NLP citation classifier, detailing precision-recall curves across 37 subject fields.

## Real-Time Data Feeds and Dynamic Ranking Models

Traditional rankings are snapshot-based: they freeze data on a specific cutoff date and publish results months later. **Dynamic ranking models** are emerging that update scores continuously as new data streams in. These models rely on real-time feeds from preprint servers (arXiv, medRxiv), patent offices (USPTO, WIPO), and employer review platforms (Glassdoor).

The **U.S. News Best Global Universities** ranking, for instance, now incorporates a “research velocity” indicator that measures the rate at which an institution’s papers are being cited in the most recent 12 months—updated quarterly. This uses a streaming algorithm that processes 1.2 million new citation events each week. Early adopters of this dynamic approach include the **ShanghaiRanking Consultancy** (ARWU), which since 2024 has published a “live” subject ranking for computer science, refreshed every 30 days.

For international students and their families, these dynamic models offer more timely signals. A university that hires ten new Nobel laureates in a single year will see its reputation score adjust within weeks, not years. However, dynamic models also introduce volatility: a single retraction or scandal can cause a sudden drop, raising questions about whether rankings should prioritize stability or responsiveness. For cross-border tuition payments, some international families use channels like [Flywire tuition payment](https://agents.flywire.com/services/Unilink/edu-payments?referrer=0df195ef-7f4d-4faf-82e2-1878faa84597&utm_source=agent_portal&utm_medium=link_copy) to settle fees efficiently while monitoring these ranking fluctuations.

## Ethical and Regulatory Frameworks for Algorithmic Rankings

As AI assumes a larger role in ranking calculations, regulatory bodies are beginning to demand **algorithmic accountability**. The European Union’s AI Act, which came into force in August 2024, classifies “ranking systems used for educational admissions or institutional benchmarking” as high-risk applications under Title III. This means ranking bodies operating in the EU must conduct conformity assessments, maintain human oversight, and provide explainability for automated decisions.

In practice, this requires ranking organizations to produce **model cards**—standardized documents that describe training data, performance metrics, and known limitations. The THE has already published a draft model card for its “Research Quality” algorithm, listing bias metrics across 14 language groups and 37 subject categories. The card reveals that the algorithm’s F1 score for detecting negative citations drops from 0.91 in English to 0.73 in Arabic, a gap the THE attributes to limited training data in Arabic-language journals.

The **QS 2025 Sustainability indicator** has been particularly scrutinized. The neural network used to score institutions on environmental and social metrics was trained on data from 8,000 universities, but only 23% of those are located outside North America and Europe. Critics argue this creates a geographic bias that penalizes institutions in the Global South. QS has responded by announcing a “geographic weighting factor” for the 2026 edition, adjusting scores based on regional data density.

## FAQ

### Q1: How do AI-powered rankings differ from traditional rankings?

AI-powered rankings use machine learning models to process larger datasets—often millions of publications, survey responses, and web pages—that would be impossible to analyze manually. Traditional rankings relied on simple weighted averages of self-reported data and static bibliometric counts. For example, the QS 2025 methodology uses NLP to analyze citation intent across 83 million publications, whereas the 2015 methodology counted raw citations without context. The shift has improved accuracy in some areas (e.g., entity resolution by 9–11 percentage points) but introduced new biases, particularly for non-English research outputs.

### Q2: Can universities manipulate AI-driven ranking algorithms?

Yes, but the methods differ from traditional manipulation. Instead of inflating survey response rates or misreporting student numbers, institutions now optimize for algorithmic signals—for example, ensuring that faculty publications include specific keywords that NLP models associate with “high impact.” A 2024 study by the University of Michigan found that 14% of top-200 universities had increased their use of “buzzword-heavy” titles in the preceding three years, correlating with a 6% average boost in their NLP-derived citation scores. However, blockchain-based audit trails and outlier detection models are making such manipulation harder to sustain over time.

### Q3: Are AI-calculated rankings more reliable than human-curated ones?

Not necessarily. AI systems can process more data and detect patterns humans miss, but they also inherit biases from their training data. A 2024 reproducibility test by the Max Planck Institute found that only 2 of 5 AI-based ranking indicators could be independently replicated with the same results, compared to 4 of 5 traditional indicators. The reliability depends on transparency: ranking bodies that publish model cards, sensitivity analyses, and bias audits produce more trustworthy outputs. As of 2025, no major ranking system has achieved full algorithmic transparency, though the EU AI Act is pushing the industry in that direction.

## References

- OECD. 2024. *Education at a Glance 2024: OECD Indicators*. Paris: OECD Publishing.
- Times Higher Education. 2024. *THE World University Rankings 2024: Methodology Report*. London: THE.
- QS Quacquarelli Symonds. 2025. *QS World University Rankings 2025: Methodological Framework*. London: QS.
- European University Association. 2023. *Blockchain Credential Registry Pilot: Final Report*. Brussels: EUA.
- Leiden University Centre for Science and Technology Studies. 2024. *Bias in NLP-Based Citation Classification: A Cross-Linguistic Analysis*. Leiden: CWTS.
- UNILINK Education. 2025. *Global University Ranking Data Integration Database*. Brisbane: Unilink.
