import { MySqlQuery } from '@db_query_common';
import { Knex } from 'knex';

const tableName: Knex.TableNames = 'ai_tts';
type tableName = typeof tableName;

export default class AiTts extends MySqlQuery<tableName> {
  constructor() {
    super(tableName);
  }
}

export { AiTts };
