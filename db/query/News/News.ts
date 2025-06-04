import { MySqlQuery } from '@db_query_common';
import { Knex } from 'knex';
import { TNews$Status } from '@kac_db_models';
import { uuid } from '@pdg/util';

const tableName: Knex.TableNames = 'news';
type tableName = typeof tableName;

export default class News extends MySqlQuery<tableName> {
  Status = TNews$Status;

  constructor() {
    super(tableName);
  }

  async newKey(req: MyRequest) {
    let key = uuid(true);
    while (await this.exists(req, { news_key: key })) {
      key = uuid(true);
    }
    return key;
  }
}

export { News };
