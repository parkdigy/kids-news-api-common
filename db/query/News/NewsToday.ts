import { MySqlQuery } from '@db_query_common';
import { Knex } from 'knex';

const tableName: Knex.TableNames = 'news_today';
type tableName = typeof tableName;

export default class NewsToday extends MySqlQuery<tableName> {
  constructor() {
    super(tableName);
  }
}

export { NewsToday };
