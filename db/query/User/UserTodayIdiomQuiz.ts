import { MySqlQuery } from '@db_query_common';
import { Knex } from 'knex';

const tableName: Knex.TableNames = 'user_today_idiom_quiz';
type tableName = typeof tableName;

export default class UserTodayIdiomQuiz extends MySqlQuery<tableName> {
  constructor() {
    super(tableName);
  }
}

export { UserTodayIdiomQuiz };
