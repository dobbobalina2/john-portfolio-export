# Portfolio content sources

Content checked on September 22, 2026. The source resume is
`John_Kenny_AI_ML_Resume.docx`, supplied by John as his latest resume. Its exact
download copy has SHA-256
`7d282bbdf9676714ad1cb927dfaf3d1a0f838c0f5345ec359539e9d738e42658`.

## Resume content

The resume is the authority for the AI/ML title, 7+ years of production software
experience, six roles and their dates, technical skills, and career outcomes.
Seven years refers to overall engineering experience, not seven years specializing
in AI. Role dates overlap in the source and are preserved.

The detection/tracking figures are resume-reported internal results. Do not turn
“mAP in the 80% range” into mAP@50 or COCO mAP; the source does not define a threshold.
The approximate tracking and iteration improvements also lack detailed metric
definitions. Their scope is explicitly stated in the project notes.

The prior site's 50+ project count, education detail, quantitative trading results,
and older performance claims absent from this resume were not carried into the new
career narrative. Existing public code-demo links remain as separate historical work.

## Recent image and video work

These summaries were checked against current local repository documentation, rather
than treating older task notes as current results. The source filenames below are
for maintainers; private repositories, videos, labels, weights, and dataset links
are not embedded in this website.

| Website claim | Repository document | Scope |
| --- | --- | --- |
| DINOv2 relationship features | `prospex_data_bootstrap/docs/bootstrap/formation-relationship-router-v19-promotion.md` | 687 plays; +9.80, +4.20, and +8.49 percentage points of outer game-held-out balanced accuracy for three specific heads versus v18; only those heads promoted. |
| DINOv2 fine-tuning comparison | `prospex_data_bootstrap/docs/experiments/2026-09-21-formation-current-recipe-finetune-ab-v1.md` | Completed comparison on 689 plays and 11 outer folds. Raw accuracy improved but balanced accuracy and macro-F1 declined. Fine-tuned representation was not promoted. |
| Video encoder research | `prospex_foundation_model/docs/ALL22_VIDEOMAE_TEST.md`, `docs/ALL22_VJEPA2_TEST.md`, and `README.md` | Frozen encoders, camera-state/transition experiments, whole-game splits, and temporal controls. A protocol or prepared runner is not proof of completed training or production deployment. VideoMAE research checkpoint use remains research-only. |
| Initial VideoMAE local benchmark | Retained September 19 benchmark summary | Local MPS/CPU inference was measured; temporal signal was inconclusive. No throughput number or football-understanding claim is published. |
| Cross-view retrieval | `prospex_foundation_model/docs/VERIFIED_RETRIEVAL.md` | Implemented within-game opposite-view evaluation with receipts, matched-random baselines, and game-bootstrap intervals. Fixture checks establish software behavior, not representation quality. Cross-game product relevance is separate. |

## Update rules

Keep built, evaluated, promoted, and proposed work distinct. Preserve the metric,
comparison, and population for any numerical result. Do not imply that the 687-play
relationship experiment and 689-play fine-tuning comparison are one experiment.

Use `src/lib/portfolio.js` to update the shared content. Recheck the source documents
before changing research status or adding new scores. The homepage and project notes
must agree on scope. Keep raw film, labels, internal artifact locations, and credentials
out of public assets.

The download is the exact user-provided DOCX and includes the contact information
in that file. Changes to resume copy should be made intentionally, not silently.
