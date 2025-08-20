import { MySqlQuery } from '@db_query_common';
import { Knex } from 'knex';

const tableName: Knex.TableNames = 'idiom_level';
type tableName = typeof tableName;

export default class IdiomLevel extends MySqlQuery<tableName> {
  constructor() {
    super(tableName);
  }

  async newKey(req: MyRequest) {
    let key = util.uuid(true);
    while (await this.exists(req, { idiom_level_key: key })) {
      key = util.uuid(true);
    }
    return key;
  }
}

export { IdiomLevel };
