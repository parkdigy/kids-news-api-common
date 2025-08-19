import { MySqlQuery } from '@db_query_common';
import { Knex } from 'knex';
import { TUserNewsQuiz$Type } from '@kac_db_models';

const tableName: Knex.TableNames = 'user_news_quiz';
type tableName = typeof tableName;

export default class UserNewsQuiz extends MySqlQuery<tableName> {
  Type = TUserNewsQuiz$Type;

  constructor() {
    super(tableName);
  }
}

export { UserNewsQuiz };
