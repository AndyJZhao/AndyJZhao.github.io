# GeneZip project page

Static project page hosted by the personal homepage repository at
https://andyjzhao.github.io/genezip/.

Serve the repository root with `python -m http.server 8766` and open `/genezip/`.
No build step is required. All page assets are local; the paper is Camera Ready
V7.8. Benchmark scores are in `assets/dnalongbench.csv` and match Table 2.
The official GeneZip code release is managed separately.

The approved design, responsive styles, figure lightbox, and citation copy
interaction are preserved. The motivation image is conceptual, not experiment data.
Human/Mouse routing GIFs show actual two-stage masks on fixed 12,800-bp windows.
The upper tracks are illustrative windows selected for visible routing changes.
The tandem-repeat animation retains its original 11 published checkpoints.
The region animation groups annotations as Promoter, Genic (CDS/UTR/exon), and
Intron + intergenic. Its lower panels pool 749 fixed evaluation windows per
species. Windows are sampled uniformly without replacement (seed 42) from all
eligible non-overlapping 12.8-kb tiles in the prepared Human held-out and Mouse
evaluation datasets, without model-output or annotation-diversity selection.
All eleven source checkpoints use exactly the same window set for each species.

Each final-stage token is assigned fractionally to regions by the overlap of its
span with each annotation group. Regional token counts and base counts are summed
over the cohort before computing relative token density: pooled token share
divided by pooled original DNA share. A value of 1 means equal shares; a value of
2 means twice the token share relative to input coverage. This is a cohort-level
statistic, distinct from Table 9's mean of per-window enrichment ratios. Routing
uses forward inference; Table 9 also averages reverse-complement results and uses
a different evaluation cohort. No temporal smoothing is applied. Both charts use
a logarithmic training-base axis and a shared linear Y range of 0.5–2.5.

Eleven checkpoints cover an independent rerun (~0.1/0.2/0.5/1/2/5/9.83B bases)
and published weights (9.83/19.66/49.15/100.26B). The displayed animation has ten
frames. At the overlapping step 3000, the two density values and their actual
training-base counts are averaged with equal source weights. The single-window
routing illustration at that frame uses the published checkpoint's actual masks;
discrete token boundaries are never averaged. Other frames use their unique
checkpoint. The two source runs remain identifiable in the downloadable data;
the connected display is not a single-run training trace. Upper routing masks,
token counts, compact latent sequences and lower-chart cursors advance in the
same GIF frame. Each frame lasts 2.2 seconds, with a 4.4-second final hold.
The historical inference implementation, H100 and bf16 are retained.

`assets/region-token-density.csv` contains the 60 displayed density values with
source provenance, including both contributors to each merged 10B point.
`assets/region-token-density-inputs.json` contains the fixed cohort manifest,
per-window retained boundaries and counts, aggregate results and provenance.
The raw inputs also retain boundary-count diagnostics from the exporter; those
legacy aggregates are not the plotted metric.
`assets/region-token-density-method.json` specifies fractional assignment,
pooling, overlap averaging and the relationship to Table 9.
`assets/region-animation-frames.json` maps every GIF frame to its actual upper
routing tracks and lower density values.
`assets/routing-examples.json` keeps the original tandem-repeat data, single-window
region tracks, and their diagnostic comparisons separate from the pooled
density metadata. Sampling, metric definitions, analysis provenance and
per-window count exports accompany the results. Parent genomic intervals
and sequence offsets are recorded separately because prepared sequences may be
reverse-complemented without a stored strand field. These summarize the
prepared evaluation sample, not an entire genome. Animation
controls switch to the final checkpoint; reduced-motion preferences show that
static frame by default.
Template-derived website material is CC BY-SA 4.0; Bulma is MIT; Font Awesome
icons are CC BY 4.0. See `licenses/` and the page footer.
