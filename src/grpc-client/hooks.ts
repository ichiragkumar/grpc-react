import { useState, useEffect } from 'react';
import { client } from './client';
import { Observable, Subscription } from 'rxjs';

// Generated message classes
import {
  User,
  UserPrefrences,
  MainUser,
  EmptyRequest,
} from '../generated/coupon_stream';

// Type-only imports for stream response types (adjust paths if needed)
import type {
  CouponIssue,
  ActiveCouponStreamResponse,
  ActiveBusinessesStreamResponse,
  CouponIssueWithBusiness,
  WalletBalanceResponse,
  ActiveDrawnResponse,
  TicketStreamResponse,
  ZoneStreamResponse,
  BusinessBranchStreamResponse,
  UserCartStreamResponse,
  UserNotificationStreamResponse,
  EnvironmentResponse,
  MoreCouponRequest,
} from '../generated/coupon_stream';


// Type for stream function — rxjs-based
type StreamFunction<Req, Res> = (
  request: Req
) => Observable<Res>;

interface StreamState<T> {
  data: T[];
  loading: boolean;
  error: string | null;
}

export function useGrpcStream<Req, Res>(
  streamFn: StreamFunction<Req, Res>,
  request: Req,
  key?: string,
): StreamState<Res> {
  const [state, setState] = useState<StreamState<Res>>({
    data: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    setState({ data: [], loading: true, error: null });
    console.log(`Starting gRPC Observable stream for ${key || 'unknown stream'}`);

    const subscription: Subscription = streamFn(request).subscribe({
      next: (message: Res) => {
        setState((prev) => ({
          ...prev,
          data: [...prev.data, message],
          loading: false,
        }));
      },
      error: (err) => {
        console.error(`gRPC stream error for ${key || 'unknown stream'}:`, err);
        setState((prev) => ({
          ...prev,
          error: err.message || String(err),
          loading: false,
        }));
      },
      complete: () => {
        console.log(`gRPC stream completed for ${key || 'unknown stream'}`);
        setState((prev) => ({ ...prev, loading: false }));
      },
    });

    return () => {
      console.log(`Unsubscribing gRPC stream for ${key || 'unknown stream'}`);
      subscription.unsubscribe();
    };
  }, [streamFn, JSON.stringify(request), key]);

  return state;
}

// Dummy request objects
const DUMMY_USER_PREFERENCES_REQUEST: UserPrefrences = {
  languageCode: 'en',
  brightness: 'bright',
};

const DUMMY_USER_REQUEST: User = {
  userId: '7c91edefc3be40c8c6b3d5fb',
};

const DUMMY_MAIN_USER_REQUEST: MainUser = {
  userId: '7c91edefc3be40c8c6b3d5fb',
  userPrefrences: DUMMY_USER_PREFERENCES_REQUEST,
};

const DUMMY_EMPTY_REQUEST: EmptyRequest = {};

// Stream hooks
export function useStreamCouponIssues() {
  return useGrpcStream<UserPrefrences, CouponIssue>(
    client.StreamCouponIssues,
    DUMMY_USER_PREFERENCES_REQUEST,
    'StreamCouponIssues'
  );
}

export function useStreamActiveCoupons() {
  return useGrpcStream<User, ActiveCouponStreamResponse>(
    client.StreamActiveCoupons,
    DUMMY_USER_REQUEST,
    'StreamActiveCoupons'
  );
}

export function useStreamActiveBusinessesStream() {
  return useGrpcStream<UserPrefrences, ActiveBusinessesStreamResponse>(
    client.StreamActiveBusinessesStream,
    DUMMY_USER_PREFERENCES_REQUEST,
    'StreamActiveBusinessesStream'
  );
}

export function useStreamMoreCouponRequests() {
  return useGrpcStream<User, MoreCouponRequest>(
    client.StreamMoreCouponRequests,
    DUMMY_USER_REQUEST,
    'StreamMoreCouponRequests'
  );
}

export function useActiveCouponIssuesWithBusinessesStream() {
  return useGrpcStream<UserPrefrences, CouponIssueWithBusiness>(
    client.ActiveCouponIssuesWithBusinessesStream,
    DUMMY_USER_PREFERENCES_REQUEST,
    'ActiveCouponIssuesWithBusinessesStream'
  );
}

export function useWalletStream() {
  return useGrpcStream<User, WalletBalanceResponse>(
    client.WalletStream,
    DUMMY_USER_REQUEST,
    'WalletStream'
  );
}

export function useStreamActiveDrawn() {
  return useGrpcStream<UserPrefrences, ActiveDrawnResponse>(
    client.StreamActiveDrawn,
    DUMMY_USER_PREFERENCES_REQUEST,
    'StreamActiveDrawn'
  );
}

export function useTicketsStream() {
  return useGrpcStream<User, TicketStreamResponse>(
    client.TicketsStream,
    DUMMY_USER_REQUEST,
    'TicketsStream'
  );
}

export function useZonesStream() {
  return useGrpcStream<UserPrefrences, ZoneStreamResponse>(
    client.ZonesStream,
    DUMMY_USER_PREFERENCES_REQUEST,
    'ZonesStream'
  );
}

export function useBusinessBranchStream() {
  return useGrpcStream<UserPrefrences, BusinessBranchStreamResponse>(
    client.BusinessBranchStream,
    DUMMY_USER_PREFERENCES_REQUEST,
    'BusinessBranchStream'
  );
}

export function useStreamUserCarts() {
  return useGrpcStream<User, UserCartStreamResponse>(
    client.StreamUserCarts,
    DUMMY_USER_REQUEST,
    'StreamUserCarts'
  );
}

export function useStreamUserNotifications() {
  return useGrpcStream<MainUser, UserNotificationStreamResponse>(
    client.StreamUserNotifications,
    DUMMY_MAIN_USER_REQUEST,
    'StreamUserNotifications'
  );
}

export function useEnvironmentStream() {
  return useGrpcStream<EmptyRequest, EnvironmentResponse>(
    client.EnvironmentStream,
    DUMMY_EMPTY_REQUEST,
    'EnvironmentStream'
  );
}
