export class NewsSubjectInfo {
  id!: number;
  title!: string;
  description!: string;
  category!: string;
  date!: string;
}

export class NewsTestInfo {
  id!: number;
  question!: string;
  options!: string[];
  answer!: string;
}

export class NewsDiscussionInfo {
  id!: number;
  question!: string;
  answer!: string;
}

export class NewsWordInfo {
  id!: number;
  word!: string;
  meaning!: string;
}

export class NewsParagraphInfo {
  id!: number;
  img_url!: string | null;
  title!: string;
  content!: string;
}

export class NewsLevelInfo {
  level!: number;
  img_url!: string | null;
  title!: string;
  description!: string;
  paragraphs!: NewsParagraphInfo[];
  words!: NewsWordInfo[];
  discussions!: NewsDiscussionInfo[];
  tests!: NewsTestInfo[];
}
