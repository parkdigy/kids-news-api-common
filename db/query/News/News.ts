import { MySqlQuery } from '@db_query_common';
import { Knex } from 'knex';
import { TNews$AiType, TNews$Status } from '@kac_db_models';

const tableName: Knex.TableNames = 'news';
type tableName = typeof tableName;

export default class News extends MySqlQuery<tableName> {
  Status = TNews$Status;
  AiType = TNews$AiType;

  constructor() {
    super(tableName);
  }

  async newKey(req: MyRequest) {
    let key = util.uuid(true);
    while (await this.exists(req, { news_key: key })) {
      key = util.uuid(true);
    }
    return key;
  }
}

export { News };
