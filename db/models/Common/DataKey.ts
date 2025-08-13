/********************************************************************************************************************
 * 데이터 KEY 테이블
 * - ID 에 해당하는 데이터 변경 시 마다 '데이터 변경 KEY' 를 1 증가 시킨다.
 * - 앱에서 첫 페이지 데이터 요청 시 '데이터 변경 KEY' 를 함께 내려준다.
 * - 앱에서는 '데이터 변경 KEY' 와 함께 첫 페이지의 데이터를 내부에 저장한다.
 * - 다음 요청 시 '데이터 요청 KEY' 를 함께 받는다.
 * - '데이터 변경 KEY' 가 일치하면, DB 에서 Query 하지 않고, 데이터를 내려주지 않고, 앱에서는 내부에 저장된 데이터를 보여준다.
 * ******************************************************************************************************************/

import { Knex } from 'knex';
import { TableInsertData, TableUpdateData } from '@db_models_types';

/** ID */
export const TDataKey$Id = {
  Notice: 'notice',
  Faq: 'faq',
  NewsLevel1: 'news1',
  NewsLevel2: 'news2',
  NewsLevel3: 'news3',
  NewsTodayLevel1: 'news_today_1',
  NewsTodayLevel2: 'news_today_2',
  NewsTodayLevel3: 'news_today_3',
  IdiomLevel1: 'idiom1',
  IdiomLevel2: 'idiom2',
  IdiomLevel3: 'idiom3',
  IdiomTodayLevel1: 'idiom_today_1',
  IdiomTodayLevel2: 'idiom_today_2',
  IdiomTodayLevel3: 'idiom_today_3',
  SayingLevel1: 'saying1',
  SayingLevel2: 'saying2',
  SayingLevel3: 'saying3',
  SayingTodayLevel1: 'saying_today_1',
  SayingTodayLevel2: 'saying_today_2',
  SayingTodayLevel3: 'saying_today_3',
  TodayInfo1: 'today_info_1',
  TodayInfo2: 'today_info_2',
  TodayInfo3: 'today_info_3',
} as const;
export type TDataKey$Id = ValueOf<typeof TDataKey$Id>;

export interface TDataKey {
  /** Primary Key */
  id: string; // ID // max:20
  /** Others */
  data_key: number; // 데이터 변경 KEY (변경 시 마다 1 증가) : bigint
  create_date: Date; // 등록일자
  update_date: Date; // 수정일자
}

export type TDataKey$InsertData = TableInsertData<TDataKey>;
export type TDataKey$UpdateData = TableUpdateData<TDataKey, 'id', 'update_date'>;

export default TDataKey;

declare module 'knex/types/tables' {
  interface Tables {
    data_key: Knex.CompositeTableType<TDataKey, TDataKey$InsertData, TDataKey$UpdateData>;
  }
}
