import { Knex } from 'knex';
import { TableInsertData, TableUpdateData } from '@db_models_types';
import { makeEnum } from '@db_models_util';

/** 상품 구분 */
const ProductType = { O: '일회성', S: '구독' };
export type TGooglePlayTransaction$ProductType = keyof typeof ProductType;
export const TGooglePlayTransaction$ProductType = makeEnum('product_type', ProductType, {
  O: 'OneTime',
  S: 'Subscription',
});

/** 상태 */
const Status = {
  PENDING: '결제대기중', // 일회성, 구독 모두 사용
  CANCELED: '결제취소', // 일회성, 구독 모두 사용
  PURCHASED: '구입완료', // 일회성, 구독 모두 사용
  VOIDED: '무효', // 일회성, 구독 모두 사용
  EXPIRED: '만료', // 구독만 사용
  PAUSED: '일시중지', // 구독만 사용
  HOLD: '보류', // 구독만 사용
  UNKNOWN: '알수없음', // 구독만 사용
};
export type TGooglePlayTransaction$Status = keyof typeof Status;
export const TGooglePlayTransaction$Status = makeEnum('status', Status);

/** 구독 상태 */
export const SubscriptionStatus = {
  Recovered: 1, // 정기 결제가 계정 보류에서 복구되었습니다.
  Renewed: 2, // 활성 정기 결제가 갱신되었습니다.
  Canceled: 3, // 정기 결제가 자발적으로 또는 비자발적으로 취소되었습니다. 자발적 취소의 경우 사용자가 취소할 때 전송됩니다.
  Purchased: 4, // 새로운 정기 결제가 구매되었습니다.
  OnHold: 5, // 정기 결제가 계정 보류 상태가 되었습니다(사용 설정된 경우).
  InGracePeriod: 6, // 정기 결제가 유예 기간 상태로 전환되었습니다(사용 설정된 경우).
  Reactivated: 7, // 사용자가 Play > 계정 > 정기 결제에서 정기 결제를 복원했습니다. 정기 결제가 취소되었지만 사용자가 복원할 때 아직 만료되지 않았습니다. 자세한 내용은 복원을 참고하세요.
  PriceChangeConfirmed: 8, // 사용자가 정기 결제 가격 변경을 확인했습니다.
  Deferred: 9, // 구독 갱신 기한이 연장되었습니다.
  Paused: 10, // 구독이 일시중지되었습니다.
  PauseScheduleChanged: 11, // 정기 결제 일시중지 일정이 변경되었습니다.
  Revoked: 12, // 정기 결제가 만료 시간 전에 사용자에 의해 취소되었습니다.
  Expired: 13, // 구독이 만료되었습니다.
  PendingPurchaseCanceled: 20, // 대기 중인 거래입니다. 의 구독이 취소되었습니다.
} as const;
export type TGooglePlayTransaction$SubscriptionStatus = ValueOf<typeof SubscriptionStatus>;

export interface TGooglePlayTransaction {
  /** Primary Key */
  id: number; // PK, AI
  /** Others */
  purchase_token: string; // 구매 토큰 // UQ // max:255
  order_id: string; // 주문 ID // UQ // max:100
  product_type: TGooglePlayTransaction$ProductType; // 상품 구분
  product_id: string; // 상품 ID // max:50
  plan_id: string | null; // 플랜 ID // max:50
  purchase_date: Date | null; // 구매일자 // 일회성 상품 구매일자
  subscription_start_date: Date | null; // 구독 시작 일자
  subscription_expire_date: Date | null; // 구독 만료 일자
  subscription_resume_date: Date | null; // 구독 일시 중지 해제 일자 (자동 해제 일 경우)
  subscription_cancel_date: Date | null; // 구독 취소 일자
  voided_date: Date | null; // 무효 일자
  price: number; // 가격 // int
  currency: string; // 통화 // max:10
  is_test: boolean; // 테스트 결제 여부
  status: TGooglePlayTransaction$Status; // 상태
  subscription_status: TGooglePlayTransaction$SubscriptionStatus | null; // 구독 상태 // int
  auto_renewing: boolean | null; // 자동 갱신 여부
  create_date: Date; // 등록일자
  update_date: Date; // 수정일자
}

export type TGooglePlayTransaction$InsertData = TableInsertData<
  TGooglePlayTransaction,
  'id',
  | 'plan_id'
  | 'purchase_date'
  | 'subscription_start_date'
  | 'subscription_expire_date'
  | 'subscription_resume_date'
  | 'subscription_cancel_date'
  | 'voided_date'
  | 'subscription_status'
  | 'auto_renewing'
>;
export type TGooglePlayTransaction$UpdateData = TableUpdateData<
  TGooglePlayTransaction,
  'id' | 'purchase_token' | 'order_id' | 'product_type' | 'product_id' | 'is_test' | 'create_date',
  'update_date'
>;

export default TGooglePlayTransaction;

declare module 'knex/types/tables' {
  interface Tables {
    google_play_transaction: Knex.CompositeTableType<
      TGooglePlayTransaction,
      TGooglePlayTransaction$InsertData,
      TGooglePlayTransaction$UpdateData
    >;
  }
}
