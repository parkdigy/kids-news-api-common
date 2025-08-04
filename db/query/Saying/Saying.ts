import { MySqlQuery } from '@db_query_common';
import { Knex } from 'knex';
import { TSaying$Status } from '@kac_db_models';

const tableName: Knex.TableNames = 'saying';
type tableName = typeof tableName;

export default class Saying extends MySqlQuery<tableName> {
  Status = TSaying$Status;

  constructor() {
    super(tableName);
  }

  async newKey(req: MyRequest) {
    let key = util.uuid(true);
    while (await this.exists(req, { saying_key: key })) {
      key = util.uuid(true);
    }
    return key;
  }
}

export { Saying };
