import { Knex } from 'knex';
import { TableInsertData, TableUpdateData } from '@db_models_types';
import { makeEnum } from '@db_models_util';

/** 상품 구분 */
const ProductType = { O: '일회성', S: '구독' };
export type TAppStoreTransaction$ProductType = keyof typeof ProductType;
export const TAppStoreTransaction$ProductType = makeEnum('product_type', ProductType, {
  O: 'OneTime',
  S: 'Subscription',
});

/** 상태 */
const Status = { PURCHASED: '구입완료', REVOKED: '취소', EXPIRED: '만료', REFUND: '환불' };
export type TAppStoreTransaction$Status = keyof typeof Status;
export const TAppStoreTransaction$Status = makeEnum('status', Status);

/** 트랜잭션 사유 */
const TransactionReason = { PURCHASE: '구입', RENEWAL: '갱신' };
export type TAppStoreTransaction$TransactionReason = keyof typeof TransactionReason;
export const TAppStoreTransaction$TransactionReason = makeEnum('transaction_reason', TransactionReason);

/** 구독 갱신 상태 */
const AutoRenewStatus = { ON: 'ON', OFF: 'OFF' };
export type TAppStoreTransaction$AutoRenewStatus = keyof typeof AutoRenewStatus;
export const TAppStoreTransaction$AutoRenewStatus = makeEnum('auto_renew_status', AutoRenewStatus);

/** 구독이 만료 사유 */
const ExpirationIntent = { 1: '취소', 2: '결제 오류', 3: '가격 인상 거부', 4: '상품 구매 불가', 5: '기타' };
export type TAppStoreTransaction$ExpirationIntent = keyof typeof ExpirationIntent;
export const TAppStoreTransaction$ExpirationIntent = makeEnum('expiration_intent', ExpirationIntent, {
  1: 'Canceled',
  2: 'BillingError',
  3: 'RejectedPriceIncrease',
  4: 'ProductUnavailable',
  5: 'Etc',
});

/** 마지막 알림 구분 */
const NotificationType = {
  CONSUMPTION_REQUEST: '소비 요청',
  DID_CHANGE_RENEWAL_PREF: '구독 갱신 환경설정 변경',
  DID_CHANGE_RENEWAL_STATUS: '구독 갱신 상태가 변경',
  DID_FAIL_TO_RENEW: '구독 갱신 실패',
  DID_RENEW: '구독 갱신',
  EXPIRED: '구독 만료',
  EXTERNAL_PURCHASE_TOKEN: '외부 결제 토큰 생성',
  GRACE_PERIOD_EXPIRED: '유예 기간 종료',
  OFFER_REDEEMED: '리딤 코드 사용',
  ONE_TIME_CHARGE: '일회성 구매',
  PRICE_INCREASE: '가격 인상',
  REFUND: '환불',
  REFUND_DECLINED: '환불 요청 거부',
  REFUND_REVERSED: '환불 취소',
  RENEWAL_EXTENDED: '구독 갱신 연장',
  RENEWAL_EXTENSION: '구독 갱신 연장',
  REVOKE: '구독 취소',
  SUBSCRIBED: '구독 시작',
  TEST: '테스트',
};
export type TAppStoreTransaction$NotificationType = keyof typeof NotificationType;
export const TAppStoreTransaction$NotificationType = makeEnum('notification_type', NotificationType);

export interface TAppStoreTransaction {
  /** Primary Key */
  id: number; // PK, AI
  /** Others */
  transaction_id: string; // 트랜잭션 ID // UQ // max:100
  original_transaction_id: string; // 최초 트랜잭션 ID // UQ // max:100
  uuid: string | null; // 사용자 UUID // max:36
  product_type: TAppStoreTransaction$ProductType; // 상품 구분
  product_id: string; // 상품 ID // max:50
  purchase_date: Date; // 구매일자
  original_purchase_date: Date; // 최초 구매일자
  subscription_start_date: Date | null; // 구독 시작 일자
  subscription_expire_date: Date | null; // 구독 만료 일자
  price: number; // 가격 // bigint
  currency: string; // 통화 // max:3
  storefront: string; // 상점 국가 코드 // max:3
  storefront_id: string; // 상점 ID // max:20
  is_test: boolean; // 테스트 결제 여부
  revocation_date: Date | null; // 환불/취소 일자
  revocation_reason: number | null; // 환불/취소 사유 // int // 0: 실수로 구매 환불 또는 기타 사유, 1: 앱의 문제로 환불
  is_upgraded: boolean | null; // 업그레이드 여부
  auto_renew_status: TAppStoreTransaction$AutoRenewStatus | null; // 자동 갱신 상태
  auto_renew_product_id: string | null; // 자동 갱신 상품 ID // max:50
  renewal_date: Date | null; // 갱신 일자
  renewal_price: number | null; // 갱신 가격 // bigint
  grace_period_expiration_date: Date | null; // 유예 기간 만료 일자
  is_in_billing_retry_period: boolean | null; // 결제 재시도 기간 여부
  expiration_intent: TAppStoreTransaction$ExpirationIntent | null; // 만료 사유
  status: TAppStoreTransaction$Status; // 상태
  last_notification_type: TAppStoreTransaction$NotificationType; // 마지막 알림 타입 // max:50
  transaction_reason: TAppStoreTransaction$TransactionReason; // 트랜잭션 사유
  last_notification_date: Date; // 마지막 알림 일자
  create_date: Date; // 등록일자
  update_date: Date; // 수정일자
}

export type TAppStoreTransaction$InsertData = TableInsertData<
  TAppStoreTransaction,
  'id',
  | 'uuid'
  | 'subscription_start_date'
  | 'subscription_expire_date'
  | 'revocation_date'
  | 'revocation_reason'
  | 'is_upgraded'
  | 'auto_renew_status'
  | 'auto_renew_product_id'
  | 'renewal_date'
  | 'renewal_price'
  | 'grace_period_expiration_date'
  | 'is_in_billing_retry_period'
  | 'expiration_intent'
>;
export type TAppStoreTransaction$UpdateData = TableUpdateData<
  TAppStoreTransaction,
  | 'id'
  | 'transaction_id'
  | 'product_type'
  | 'product_id'
  | 'purchase_date'
  | 'price'
  | 'currency'
  | 'is_test'
  | 'create_date',
  'update_date'
>;

export default TAppStoreTransaction;

declare module 'knex/types/tables' {
  interface Tables {
    app_store_transaction: Knex.CompositeTableType<
      TAppStoreTransaction,
      TAppStoreTransaction$InsertData,
      TAppStoreTransaction$UpdateData
    >;
  }
}
