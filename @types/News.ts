import { TAi, TNewsLevel$Level } from '@kac_db_models';

export class NewsSubjectInfo {
  id!: TAi['id'];
  title!: string;
  description!: string;
  category!: string;
  date!: string;
}

export class NewsSentenceQuizInfo {
  sentence!: string;
  texts!: string[];
}

export class NewsQuizInfo {
  question!: string;
  options!: string[];
  answer!: string;
  tts_url?: string;
}

export class NewsDiscussionInfo {
  question!: string;
  tts_url?: string;
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
  word_tts_url?: string;
  meaning!: string;
  meaning_tts_url?: string;
  texts!: string[];
  crossword?: boolean;
}

export class NewsKeyWordInfo {
  word!: string;
  meaning!: string;
  sentence!: string;
  tts_url?: string;
  crossword?: boolean;
}

export class NewsParagraphInfo {
  title!: string;
  content!: string;
  img_url?: string;
  tts_url?: string;
}

export const NewsTtsTimestampType = {
  LevelTitle: 'lt',
  LevelDescription: 'ld',
  ParagraphTitle: 'pt',
  ParagraphContent: 'pc',
} as const;
export type NewsTtsTimestampType = ValueOf<typeof NewsTtsTimestampType>;

export class NewsTtsTimestampLineInfo {
  type!: NewsTtsTimestampType;
  text!: string;
}

export class NewsTtsTimestampInfo {
  type!: NewsTtsTimestampType;
  start_time!: number;
  end_time!: number;
  text!: string;
  custom?: boolean;
}

export class NewsLevelInfo {
  level!: TNewsLevel$Level;
  img_url?: string;
  tts_url?: string;
  tts_info?: NewsTtsTimestampInfo[];
  title!: string;
  description!: string;
  paragraphs!: NewsParagraphInfo[];
  words!: NewsWordInfo[];
  key_word!: NewsKeyWordInfo;
  discussions!: NewsDiscussionInfo[];
  quizzes!: NewsQuizInfo[];
  sentence_quizzes!: NewsSentenceQuizInfo[];
}
