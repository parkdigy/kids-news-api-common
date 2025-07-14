import { Knex } from 'knex';
import { TableInsertData, TableUpdateData } from '@db_models_types';
import TNews, { TNews$Status } from './News';
import { TNewsCategory } from '@kac_db_models';
import { makeEnum } from '@db_models_util';

/** 상태 */
const Level = { 1: '레벨 1', 2: '레벨 2', 3: '레벨 3' };
export type TNewsLevel$Level = keyof typeof Level;
export const TNewsLevel$Level = makeEnum('level', Level, { 1: 'Level1', 2: 'Level2', 3: 'Level3' });

/** 상태 */
export type TNewsLevel$Status = TNews$Status;
export const TNewsLevel$Status = TNews$Status;

export interface TNewsLevel {
  /** Primary Key */
  id: number; // PK, AI, int
  /** Others */
  news_level_key: string; // 뉴스 레벨 KEY // varchar(32), UQ
  news_id: TNews['id']; // 뉴스 ID // int, FK
  level: TNewsLevel$Level; // 레벨 // tinyint
  news_date: Date; // 뉴스 날짜 // date
  news_category_id: TNewsCategory['id']; // 뉴스 카테고리 ID // int, FK
  img_url: string | null; // 이미지 URL // varchar(1024), nullable
  tts_url: string | null; // TTS URL // varchar(1024), nullable
  tts_info: string | null; // TTS 정보 // text, nullable
  title: string; // 제목 // varchar(100)
  description: string; // 소개 내용 // text
  paragraphs: string; // 문단 // text
  words: string; // 단어 // text
  key_word: string; // 핵심 단어 // text
  discussions: string; // 토론 // text
  quizzes: string; // 문해력 퀴즈 // text
  sentence_quizzes: string; // 문장 완성 퀴즈 // text
  status: TNewsLevel$Status; // 상태
  view_id: number | null; // 조회 ID // int, nullable
  create_date: Date; // 등록일자
  update_date: Date; // 수정일자
}

export type TNewsLevel$InsertData = TableInsertData<
  TNewsLevel,
  'id',
  'words' | 'img_url' | 'tts_url' | 'tts_info' | 'view_id'
>;
export type TNewsLevel$UpdateData = TableUpdateData<TNewsLevel, 'id' | 'news_id' | 'create_date', 'update_date'>;

export default TNewsLevel;

declare module 'knex/types/tables' {
  interface Tables {
    news_level: Knex.CompositeTableType<TNewsLevel, TNewsLevel$InsertData, TNewsLevel$UpdateData>;
  }
}
