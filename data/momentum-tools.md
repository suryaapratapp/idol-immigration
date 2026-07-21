# Momentum Tools Data Contracts

Every mutable dataset is committed as versioned JSON and has a top-level `version` and ISO `lastUpdated` date. UI components receive typed data rather than importing remote APIs directly, so a cron or CMS can replace a file without changing presentation logic.

## Intake planner

`intake-planner.json` contains intake dates, purpose-specific milestone lead times, per-country week adjustments and official destination links. Positive adjustments move a planning target earlier. Keep milestone IDs stable because PDF and WhatsApp summaries reference them.

## Occupations

`occupations.json` contains canonical titles, synonyms and one result per country. A result has `status`, `classification`, `list`, `routes` and `note`. Allowed status values are `in-demand`, `eligible` and `not-listed`. Update the top-level government source URL whenever a list moves.

## Country profiles

`country-profiles.json` contains budget bands, purpose weights and country inputs for cost, settlement, field-level job signals, profile ease and post-study rights. Scores are integers from 0 to 100. They are comparative planning signals, not probability estimates.

## Express Entry draws

`express-entry-draws.json` contains `round`, `date`, `category`, `type`, `invitationsIssued` and `crsCutoff`. Allowed draw types are `general`, `cec`, `pnp` and `category`. `getDraws()` in `lib/expressEntry.ts` is the data boundary. A scheduled updater can fetch IRCC's `officialDataFeed`, normalise the latest records to this shape and replace the file or database implementation behind `getDraws()`.

## CRS scoring

`crs-score-config.json` contains the current IRCC core, spouse, language, Canadian-experience and additional-point tables. `calculateCrs()` in `lib/crsCalculator.ts` applies the published transferability caps and keeps job-offer points at zero under the rule effective March 25, 2025. When IRCC changes the grid, update the JSON version, date and tables together, then verify maximum profiles still total 1,200 points.
