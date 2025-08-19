import { Knex } from 'knex';
import { TableInsertData, TableUpdateData } from '@db_models_types';
import { makeEnum } from '@db_models_util';
import TNewsCategory from './NewsCategory';

/** 상태 */
const Status = { WRITE: '작성중', WAIT: '발행대기중', ON: '발행중', OFF: '숨김' };
export type TNews$Status = keyof typeof Status;
export const TNews$Status = makeEnum('status', Status);

/** AI 구분 */
const AiType = { GG: 'Google Gemini', OC: 'OpenAi Chat-GPT' };
export type TNews$AiType = keyof typeof AiType;
export const TNews$AiType = makeEnum('ai_type', AiType, { GG: 'GoogleGemini', OC: 'OpenAiChatGpt' });

export interface TNews {
  /** Primary Key */
  id: number; // PK, AI, int
  /** Others */
  news_key: string; // 뉴스 KEY // max:32 // UQ
  title: string; // 제목 // max:100
  img_url: string | null; // 이미지 URL // max:1024, nullable
  thumb_img_url: string | null; // 썸네일 이미지 URL // max:1024, nullable
  img_title: string | null; // 이미지 제목 // varchar(100), nullable
  img_source: string | null; // 이미지 출처 // varchar(100), nullable
  img_offset_y: number; // 이미지 Y축 오프셋 // int, default:0
  news_category_id: TNewsCategory['id']; // 뉴스 카테고리 ID // int, FK
  news_date: Date; // 뉴스 날짜 // date
  data_key: number; // 데이터 KEY // int, default:1
  status: TNews$Status; // 상태
  ai_type: TNews$AiType; // AI 구분
  ai_subject_id: number; // AI 부모 ID // int
  ai_subject_sub_id: number; // AI 부모 서브 ID // int
  ai_img_default_styles: string | null; // AI 이미지 기본 스타일 // text, nullable
  ai_except_subject_word: string; // AI 주제 생성 시 제외 문구 // varchar(20)
  create_date: Date; // 등록일자 // datetime
  update_date: Date; // 수정일자 // datetime
}

export type TNews$InsertData = TableInsertData<
  TNews,
  'id',
  'img_url' | 'thumb_img_url' | 'img_title' | 'img_source' | 'img_offset_y' | 'ai_img_default_styles' | 'data_key'
>;
export type TNews$UpdateData = TableUpdateData<
  TNews,
  'id' | 'news_key' | 'ai_type' | 'ai_subject_id' | 'ai_subject_sub_id' | 'create_date',
  'update_date'
>;

export default TNews;

declare module 'knex/types/tables' {
  interface Tables {
    news: Knex.CompositeTableType<TNews, TNews$InsertData, TNews$UpdateData>;
  }
}
