# GeneZip project page

Static project page hosted by the personal homepage repository at
https://andyjzhao.github.io/genezip/.

Serve the repository root with `python -m http.server 8766` and open `/genezip/`.
No build step is required. All page assets are local; the paper is Camera Ready
V7.8. Benchmark scores are in `assets/dnalongbench.csv` and match Table 2.
The official GeneZip code release is managed separately.

The approved design, responsive styles, figure lightbox, and citation copy
interaction are preserved. The motivation image is conceptual, not experiment data.
Human/Mouse routing GIFs show actual two-stage masks on fixed 12,800-bp windows
across 11 checkpoints of the human-trained GeneZip model. Examples are selected
for visible routing changes, not representative population estimates. The region
animation groups annotations as Promoter, Genic (CDS/UTR/exon), and Intron +
intergenic. Its lower panels trace each group's share of final-stage tokens,
assigned by the retained boundary position, across actual checkpoints (sum 100%).
`assets/region-token-shares.csv` provides exact counts and shares;
`assets/routing-examples.json` records
the model revision, checkpoint progress, loci and routing outputs. Animation
controls switch to the final checkpoint; reduced-motion preferences show that
static frame by default.
Template-derived website material is CC BY-SA 4.0; Bulma is MIT; Font Awesome
icons are CC BY 4.0. See `licenses/` and the page footer.
