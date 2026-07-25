import { z } from 'astro/zod';
import { workItemSchema, type WorkItem } from './schemas';

// `text` is rendered as HTML: <strong> and <a class="inline-link" href="…">
// are the two tags to use (single-author trusted data — keep it to those by
// convention). Items render top-to-bottom in array order; `date` is an
// optional display string like 'Mar 2026'.

// Her approved items (2026-07-25) — deliberately evergreen: no dates, counts,
// or geography, so the section ages slowly. Revisit after the conference season.
export const currently: WorkItem[] = z.array(workItemSchema).parse([
  {
    text: 'Taking <a class="inline-link" href="/talks/modulith/"><strong>The Architecture Decision You Can Undo</strong></a> on tour.',
  },
  {
    text: 'Migrating a large legacy system at <strong>Deutsche Bank</strong> — my daily reality check for everything I say on stage.',
  },
  {
    text: 'Going deep on <strong>agentic engineering</strong> — figuring out what it takes to let AI agents into a production dev loop without regretting it.',
  },
]);

// Her approved single line (2026-07-25) — deliberately summarized and
// employer-free (LinkedIn holds the full ledger; no degree by her choice).
export const previously: WorkItem[] = z.array(workItemSchema).parse([
  {
    text: 'Backend engineering across <strong>gaming platforms, payments, and banking</strong>.',
  },
]);
