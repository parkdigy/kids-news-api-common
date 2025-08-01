import { MySqlQuery } from '@db_query_common';
import { Knex } from 'knex';
import { TIdiom$Status } from '@kac_db_models';

const tableName: Knex.TableNames = 'idiom';
type tableName = typeof tableName;

export default class Idiom extends MySqlQuery<tableName> {
  Status = TIdiom$Status;

  constructor() {
    super(tableName);
  }

  async newKey(req: MyRequest) {
    let key = util.uuid(true);
    while (await this.exists(req, { idiom_key: key })) {
      key = util.uuid(true);
    }
    return key;
  }
}

export { Idiom };
