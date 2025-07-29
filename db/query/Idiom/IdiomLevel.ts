import { MySqlQuery } from '@db_query_common';
import { Knex } from 'knex';
import { TIdiomLevel$Level } from '@kac_db_models';

const tableName: Knex.TableNames = 'idiom_level';
type tableName = typeof tableName;

export default class IdiomLevel extends MySqlQuery<tableName> {
  Level = TIdiomLevel$Level;

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
