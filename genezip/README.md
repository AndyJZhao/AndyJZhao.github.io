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
Intron + intergenic. Its lower panels average 256 fixed evaluation windows per
species. Windows are sampled uniformly without replacement (seed 42) from all
eligible non-overlapping 12.8-kb tiles in the prepared Human held-out and Mouse
evaluation datasets, without model-output or annotation-diversity selection.
All eleven checkpoints use exactly the same window set for each species.

Each window's final-stage retained-boundary counts are divided by its own total
token count, then those three fractions are averaged equally across windows.
The plotted mean is not the pooled ratio of aggregate counts. The CSV separately
reports mean shares, pooled shares, aggregate token counts, and per-window share
standard deviations. Missing categories contribute zero; no temporal smoothing
is applied. Original sequence bars average input base-pair shares over the same
windows; they are independent references, not 0B training checkpoints.

Eleven checkpoints cover an independent rerun (~0.1/0.2/0.5/1/2/5/9.83B bases)
and published weights (9.83/19.66/49.15/100.26B). Each run connects only its own
measured checkpoints. The two independent checkpoints near 9.83B retain separate
identities. Hollow circles mark rerun checkpoints and diamonds mark published
checkpoints. The historical inference implementation, H100 and bf16 are retained.

`assets/region-token-shares.csv` contains the average composition results.
`assets/region-composition-average.json` contains the fixed cohort manifest,
per-window retained boundaries and counts, all aggregate results, and provenance.
`assets/routing-examples.json` keeps the original tandem-repeat data, single-window
region tracks, and their diagnostic comparisons separate from the average
composition metadata. Sampling, mean definitions, analysis provenance and
per-window count exports accompany the average results. Parent genomic intervals
and sequence offsets are recorded separately because prepared sequences may be
reverse-complemented without a stored strand field. These are averages over the
prepared evaluation sample, not estimates for an entire genome.
Animation
controls switch to the final checkpoint; reduced-motion preferences show that
static frame by default.
Template-derived website material is CC BY-SA 4.0; Bulma is MIT; Font Awesome
icons are CC BY 4.0. See `licenses/` and the page footer.
