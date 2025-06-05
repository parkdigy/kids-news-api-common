import { MySqlQuery } from '@db_query_common';
import { Knex } from 'knex';
import { TAiGemini$Status, TAiGemini$Type } from '@kac_db_models';

const tableName: Knex.TableNames = 'ai_gemini';
type tableName = typeof tableName;

export default class AiGemini extends MySqlQuery<tableName> {
  Type = TAiGemini$Type;
  Status = TAiGemini$Status;

  constructor() {
    super(tableName);
  }
}

export { AiGemini };
