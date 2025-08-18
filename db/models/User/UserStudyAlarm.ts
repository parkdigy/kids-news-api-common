/********************************************************************************************************************
 * 회원 학습 알림 테이블
 * ******************************************************************************************************************/

import { Knex } from 'knex';
import { TableInsertData, TableUpdateData } from '@db_models_types';
import TUser from './User';

export interface TUserStudyAlarm {
  /** Primary Key */
  user_id: TUser['id']; // 회원 ID
  /** Others */
  alarm_hour: number; // 알림 시간 // tinyint
  alarm_minute: number; // 알림 분 // tinyint
  create_date: Date; // 등록일자
  update_date: Date; // 수정일자
}

export type TUserStudyAlarm$InsertData = TableInsertData<TUserStudyAlarm>;
export type TUserStudyAlarm$UpdateData = TableUpdateData<TUserStudyAlarm, 'user_id' | 'create_date', 'update_date'>;

export default TUserStudyAlarm;

declare module 'knex/types/tables' {
  interface Tables {
    user_study_alarm: Knex.CompositeTableType<TUserStudyAlarm, TUserStudyAlarm$InsertData, TUserStudyAlarm$UpdateData>;
  }
}
