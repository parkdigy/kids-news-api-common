import { MySqlQuery } from '@db_query_common';
import { Knex } from 'knex';

const tableName: Knex.TableNames = 'news_level_paragraph';
type tableName = typeof tableName;

export default class NewsLevelParagraph extends MySqlQuery<tableName> {
  constructor() {
    super(tableName);
  }
}

export { NewsLevelParagraph };
