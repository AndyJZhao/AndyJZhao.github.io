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
Examples are selected for visible routing changes, not representative population
estimates. The tandem-repeat animation retains 11 published checkpoints.
The region animation groups annotations as Promoter, Genic (CDS/UTR/exon), and
Intron + intergenic. Its lower panels compare an independent Original sequence
bar (base-pair shares) with final-stage token shares on a logarithmic training
axis. The input composition is a reference, not a 0B training checkpoint.
Token shares are assigned by retained-boundary region and sum to 100%.
Eight checkpoints cover an independent early rerun (~0.1/0.2/0.5/1B bases) and
published weights (9.83/19.66/49.15/100.26B). Areas connect measured checkpoints
within each run, with a gap between the two training trajectories. All eight
points use the same historical inference implementation and H100 environment.
All four early checkpoints retain eight final-stage tokens per window, matching
the configured minimum (`min_routing_tokens: 8`). Their token-share percentages
therefore change in increments of 12.5 percentage points.
`assets/region-token-shares.csv` provides exact counts and shares;
`assets/routing-examples.json` records
the original 11-point A100 export under `checkpoints` for the tandem-repeat
animation and reference comparisons, and the eight-point H100 export under
`region_checkpoints` for the region animation. It also records input base-pair
counts and shares, run provenance, and diagnostic boundary comparisons with the
earlier A100 export; those comparisons do not establish the cause of differences.
Animation
controls switch to the final checkpoint; reduced-motion preferences show that
static frame by default.
Template-derived website material is CC BY-SA 4.0; Bulma is MIT; Font Awesome
icons are CC BY 4.0. See `licenses/` and the page footer.
