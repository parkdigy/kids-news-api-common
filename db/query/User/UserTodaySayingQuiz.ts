import { MySqlQuery } from '@db_query_common';
import { Knex } from 'knex';

const tableName: Knex.TableNames = 'user_today_saying_quiz';
type tableName = typeof tableName;

export default class UserTodaySayingQuiz extends MySqlQuery<tableName> {
  constructor() {
    super(tableName);
  }
}

export { UserTodaySayingQuiz };
