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
  tts_url!: string | null;
}

export class NewsDiscussionInfo {
  question!: string;
  tts_url!: string | null;
  student!: {
    thinking: string[];
  };

  teacher!: {
    hint: string;
    thinking: string[];
  };
}

export class NewsWordInfo {
  word!: string;
  word_tts_url!: string | null;
  meaning!: string;
  meaning_tts_url!: string | null;
  texts!: string[];
  crossword!: boolean;
}

export class NewsKeyWordInfo {
  word!: string;
  meaning!: string;
  sentence!: string;
  tts_url!: string | null;
  crossword!: boolean;
}

export class NewsParagraphInfo {
  title!: string;
  content!: string;
  img_url!: string | null;
  tts_url!: string | null;
}

export class NewsLevelInfo {
  level!: TNewsLevel$Level;
  img_url!: string | null;
  tts_url!: string | null;
  title!: string;
  description!: string;
  paragraphs!: NewsParagraphInfo[];
  words!: NewsWordInfo[];
  key_word!: NewsKeyWordInfo;
  discussions!: NewsDiscussionInfo[];
  tests!: NewsTestInfo[];
}
