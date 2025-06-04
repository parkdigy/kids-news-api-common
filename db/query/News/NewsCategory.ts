import { MySqlQuery } from '@db_query_common';
import { Knex } from 'knex';

const tableName: Knex.TableNames = 'news_category';
type tableName = typeof tableName;

export default class NewsCategory extends MySqlQuery<tableName> {
  constructor() {
    super(tableName);
  }
}

export { NewsCategory };
