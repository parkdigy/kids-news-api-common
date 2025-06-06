import { MySqlQuery } from '@db_query_common';
import { Knex } from 'knex';
import { TAi$Engine, TAi$Status, TAi$Type } from '@kac_db_models';

const tableName: Knex.TableNames = 'ai';
type tableName = typeof tableName;

export default class Ai extends MySqlQuery<tableName> {
  Engine = TAi$Engine;
  Type = TAi$Type;
  Status = TAi$Status;

  constructor() {
    super(tableName);
  }
}

export { Ai };
