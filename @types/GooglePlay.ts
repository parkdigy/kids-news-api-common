export interface GooglePlayReceiptTransactionReceiptInfo {
  orderId: string;
  productId: string;
  purchaseTime: number;
}

export const GooglePlayOneTimePurchaseState = {
  Purchased: 0,
  Canceled: 1,
  Pending: 2,
} as const;
export type GooglePlayOneTimePurchaseState = ValueOf<typeof GooglePlayOneTimePurchaseState>;

export const GooglePlayAcknowledgementState = {
  NotAcknowledged: 0,
  Acknowledged: 1,
} as const;
export type GooglePlayAcknowledgementState = ValueOf<typeof GooglePlayAcknowledgementState>;

export const GooglePlayConsumptionState = {
  NotConsumed: 0,
  Consumed: 1,
} as const;
export type GooglePlayConsumptionState = ValueOf<typeof GooglePlayConsumptionState>;

export const GooglePlayOneTimePurchaseNotificationType = {
  OneTimeProductPurchased: 1,
  OneTimeProductCanceled: 2,
} as const;
export type GooglePlayOneTimePurchaseNotificationType = ValueOf<typeof GooglePlayOneTimePurchaseNotificationType>;

export const GooglePlaySubscriptionNotificationType = {
  SubscriptionRecovered: 1, // 정기 결제가 계정 보류에서 복구되었습니다.
  SubscriptionRenewed: 2, // 활성 정기 결제가 갱신되었습니다.
  SubscriptionCanceled: 3, // 정기 결제가 자발적으로 또는 비자발적으로 취소되었습니다. 자발적 취소의 경우 사용자가 취소할 때 전송됩니다.
  SubscriptionPurchased: 4, // 새로운 정기 결제가 구매되었습니다.
  SubscriptionOnHold: 5, // 정기 결제가 계정 보류 상태가 되었습니다(사용 설정된 경우).
  SubscriptionInGracePeriod: 6, // 정기 결제가 유예 기간 상태로 전환되었습니다(사용 설정된 경우).
  SubscriptionReactivated: 7, // 사용자가 Play > 계정 > 정기 결제에서 정기 결제를 복원했습니다. 정기 결제가 취소되었지만 사용자가 복원할 때 아직 만료되지 않았습니다. 자세한 내용은 복원을 참고하세요.
  SubscriptionPriceChangeConfirmed: 8, // 사용자가 정기 결제 가격 변경을 확인했습니다.
  SubscriptionDeferred: 9, // 구독 갱신 기한이 연장되었습니다.
  SubscriptionPaused: 10, // 구독이 일시중지되었습니다.
  SubscriptionPauseScheduleChanged: 11, // 정기 결제 일시중지 일정이 변경되었습니다.
  SubscriptionRevoked: 12, // 정기 결제가 만료 시간 전에 사용자에 의해 취소되었습니다.
  SubscriptionExpired: 13, // 구독이 만료되었습니다.
  SubscriptionPendingPurchaseCanceled: 20, // 대기 중인 거래입니다. 의 구독이 취소되었습니다.
} as const;
export type GooglePlaySubscriptionNotificationType = ValueOf<typeof GooglePlaySubscriptionNotificationType>;

/** 일회성 상품 구매 유형 */
export const GooglePlayOneTimePurchaseType = {
  Test: 0,
  Promo: 1,
  Rewarded: 2,
} as const;
export type GooglePlayOneTimePurchaseType = ValueOf<typeof GooglePlayOneTimePurchaseType>;

/** 상품 구분 */
export const GooglePlayProductType = {
  Subscription: 1, // 구독
  OneTime: 2, // 일회성
} as const;
export type GooglePlayProductType = ValueOf<typeof GooglePlayProductType>;

/** 환불 구분 */
export const GooglePlayRefundType = {
  FullRefund: 1, // 구매가 완전히 무효화된 경우
  PartialRefund: 2, // 수량 기반 부분 환불로 인해 구매가 부분적으로 무효화된 경우 (다중 수량 구매에만 적용)
} as const;
export type GooglePlayRefundType = ValueOf<typeof GooglePlayRefundType>;

/** 구글플레이 구매 영수증 구입 상태 */
export const GooglePlayReceiptPurchaseState = {
  UnspecifiedState: 0,
  Purchased: 1,
  Pending: 2,
} as const;
export type GooglePlayReceiptPurchaseState = ValueOf<typeof GooglePlayReceiptPurchaseState>;

/** 구글플레이 구매 영수증 정보 */
export interface GooglePlayReceiptInfo {
  productId: string;
  transactionDate: number;
  transactionReceipt: string;
  purchaseToken: string;
  productIds?: string[];
  dataAndroid?: string;
  signatureAndroid?: string;
  autoRenewingAndroid?: boolean;
  purchaseStateAndroid?: GooglePlayReceiptPurchaseState;
  isAcknowledgedAndroid?: boolean;
  packageNameAndroid?: string;
  developerPayloadAndroid?: string;
  obfuscatedAccountIdAndroid?: string;
  obfuscatedProfileIdAndroid?: string;
}

/** 구독 상품의 확인 상태 */
export const GooglePlaySubscriptionAcknowledgementState = {
  Unspecified: 'ACKNOWLEDGEMENT_STATE_UNSPECIFIED', // 지정되지 않은 확인 상태입니다.
  Pending: 'ACKNOWLEDGEMENT_STATE_PENDING', // 아직 구독이 승인되지 않았습니다.
  Acknowledged: 'ACKNOWLEDGEMENT_STATE_ACKNOWLEDGED', // 구독이 승인되었습니다.
} as const;
export type GooglePlaySubscriptionAcknowledgementState = ValueOf<typeof GooglePlaySubscriptionAcknowledgementState>;

/** 구독의 결제 상태 */
export const GooglePlaySubscriptionPaymentState = {
  PaymentPending: 0,
  PaymentReceived: 1,
  FreeTrial: 2,
  PendingDeferredUpgradeDowngrade: 3, // Not present for canceled, expired subscriptions.
} as const;
export type GooglePlaySubscriptionPaymentState = ValueOf<typeof GooglePlaySubscriptionPaymentState>;

/** 구독이 취소되었거나 자동 갱신되지 않는 이유 */
export const GooglePlaySubscriptionCancelReason = {
  UserCanceled: 0, // User canceled the subscription
  SystemCanceled: 1, // Subscription was canceled by the system, for example because of a billing problem
  Replaced: 2, // Subscription was replaced with a new subscription
  DeveloperCanceled: 3, // Subscription was canceled by the developer
} as const;
export type GooglePlaySubscriptionCancelReason = ValueOf<typeof GooglePlaySubscriptionCancelReason>;

/** 이 구매에 적용된 프로모션 유형. 구독을 구매할 때 프로모션이 적용된 경우에만 사용 */
export const GooglePlaySubscriptionPromotionType = {
  OneTimeCode: 0,
  VanityCode: 1,
} as const;
export type GooglePlaySubscriptionPromotionType = ValueOf<typeof GooglePlaySubscriptionPromotionType>;

/** 구독 구매 유형. 구매가 표준 앱 내 결제 흐름을 사용하여 이루어지지 않은 경우에만 사용 */
export const GooglePlaySubscriptionPurchaseType = {
  Test: 0, // 테스트 계정으로 구매한 경우
  Promo: 1, // 프로모션 코드를 사용하여 구매한 경우
} as const;
export type GooglePlaySubscriptionPurchaseType = ValueOf<typeof GooglePlaySubscriptionPurchaseType>;

/** 구독 상태 */
export const GooglePlaySubscriptionState = {
  Unspecified: 'SUBSCRIPTION_STATE_UNSPECIFIED', // 구독 상태가 지정되지 않았습니다.
  Pending: 'SUBSCRIPTION_STATE_PENDING', //	구독이 생성되었지만 가입 중에 결제를 기다리고 있습니다. 이 상태에서는 모든 항목이 결제를 기다리고 있습니다.
  Active: 'SUBSCRIPTION_STATE_ACTIVE', //	구독이 활성화되었습니다. - (1) 구독이 자동 갱신 플랜인 경우 최소 한 항목이 autoRenewEnabled되어 있고 만료되지 않았습니다. - (2) 구독이 선불 플랜인 경우 최소 한 항목이 만료되지 않았습니다.
  Paused: 'SUBSCRIPTION_STATE_PAUSED', //	구독이 일시 중지되었습니다. 이 상태는 구독이 자동 갱신 플랜일 때만 사용할 수 있습니다. 이 상태에서는 모든 항목이 일시 중지 상태입니다.
  InGracePeriod: 'SUBSCRIPTION_STATE_IN_GRACE_PERIOD', //	구독이 유예 기간입니다. 이 상태는 구독이 자동 갱신 플랜일 때만 사용할 수 있습니다. 이 상태에서는 모든 항목이 유예 기간입니다.
  Hold: 'SUBSCRIPTION_STATE_ON_HOLD', //	구독이 보류 중입니다(중단됨). 구독이 자동 갱신 플랜인 경우에만 이 상태를 사용할 수 있습니다. 이 상태에서는 모든 항목이 보류됩니다.
  Canceled: 'SUBSCRIPTION_STATE_CANCELED', //	구독이 취소되었지만 아직 만료되지 않았습니다. 구독이 자동 갱신 플랜인 경우에만 상태를 사용할 수 있습니다. 모든 항목의 autoRenewEnabled가 false로 설정되었습니다.
  Expired: 'SUBSCRIPTION_STATE_EXPIRED', //	구독이 만료되었습니다. 모든 항목의 expiryTime이 과거입니다.
  PendingPurchaseCanceled: 'SUBSCRIPTION_STATE_PENDING_PURCHASE_CANCELED', //	구독에 대한 보류 중인 거래가 취소되었습니다. 이 보류 중인 구매가 기존 구독에 대한 것이라면 linkedPurchaseToken을 사용하여 해당 구독의 현재 상태를 가져옵니다.
} as const;
export type GooglePlaySubscriptionState = ValueOf<typeof GooglePlaySubscriptionState>;
