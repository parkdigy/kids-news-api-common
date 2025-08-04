import { MySqlQuery } from '@db_query_common';
import { Knex } from 'knex';
import { TSayingLevel$Level } from '@kac_db_models';

const tableName: Knex.TableNames = 'saying_level';
type tableName = typeof tableName;

export default class SayingLevel extends MySqlQuery<tableName> {
  Level = TSayingLevel$Level;

  constructor() {
    super(tableName);
  }

  async newKey(req: MyRequest) {
    let key = util.uuid(true);
    while (await this.exists(req, { saying_level_key: key })) {
      key = util.uuid(true);
    }
    return key;
  }
}

export { SayingLevel };
