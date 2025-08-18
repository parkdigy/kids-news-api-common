/********************************************************************************************************************
 * 회원 학습 알림 Query Class
 * ******************************************************************************************************************/

import { MySqlQuery } from '@db_query_common';
import { Knex } from 'knex';

const tableName: Knex.TableNames = 'user_study_alarm';
type tableName = typeof tableName;

export default class UserStudyAlarm extends MySqlQuery<tableName> {
  constructor() {
    super(tableName);
  }
}

export { UserStudyAlarm };
