import { siteSchema } from './schemas';

export const site = siteSchema.parse({
  name: 'Simona Oancea',
  title: 'Simona Oancea',
  description:
    'Simona Oancea — backend engineer and conference speaker on software architecture and agentic engineering. Talks, speaking schedule, and writing.',
  url: 'https://simonaoancea.com',
});
