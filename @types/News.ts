import { TAi, TNewsLevel$Level } from '@kac_db_models';

export class NewsSubjectInfo {
  id!: TAi['id'];
  title!: string;
  description!: string;
  category!: string;
  date!: string;
}

export class NewsTestInfo {
  question!: string;
  options!: string[];
  answer!: string;
}

export class NewsDiscussionInfo {
  question!: string;
  answer!: string;
}

export class NewsWordInfo {
  word!: string;
  meaning!: string;
}

export class NewsParagraphInfo {
  img_url!: string | null;
  title!: string;
  content!: string;
}

export class NewsLevelInfo {
  level!: TNewsLevel$Level;
  img_url!: string | null;
  title!: string;
  description!: string;
  paragraphs!: NewsParagraphInfo[];
  words!: NewsWordInfo[];
  discussions!: NewsDiscussionInfo[];
  tests!: NewsTestInfo[];
}
