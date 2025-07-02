import * as grpcWeb from 'grpc-web';
import { CouponStreamServiceClientImpl } from '../generated/coupon_stream';
import type { Rpc } from '../generated/coupon_stream';
import { Observable } from 'rxjs';


const GRPC_SERVER_URL = import.meta.env.VITE_GRPC_URL || 'http://localhost:50051';

console.log(`Connecting to gRPC server at: ${GRPC_SERVER_URL}`);

const grpcClientBase = new grpcWeb.GrpcWebClientBase({});

// Fully type-safe Rpc implementation matching your interface
const rpc: Rpc = {
  request: () => {
    throw new Error('Unary request not implemented');
  },

  clientStreamingRequest: () => {
    throw new Error('Client streaming not implemented');
  },

  bidirectionalStreamingRequest: () => {
    throw new Error('Bidirectional streaming not implemented');
  },

  serverStreamingRequest: (service, method, data) => {
    const fullMethod = `/${service}/${method}`;

    // Method descriptor for binary request/response
    const methodDescriptor = new grpcWeb.MethodDescriptor<Uint8Array, Uint8Array>(
      fullMethod,
      grpcWeb.MethodType.SERVER_STREAMING,
      Uint8Array,
      Uint8Array,
      (req: Uint8Array) => req,          // Already binary, pass as-is
      (bytes: Uint8Array) => bytes       // Response is binary, return as-is
    );

    const stream = grpcClientBase.serverStreaming(
      GRPC_SERVER_URL,
      data,
      {},
      methodDescriptor
    );

    // Wrap stream into RxJS Observable<Uint8Array>
    return new Observable<Uint8Array>((observer) => {
      stream.on('data', (chunk: Uint8Array) => {
        observer.next(chunk);
      });

      stream.on('error', (err) => {
        console.error(`gRPC stream error [${fullMethod}]:`, err);
        observer.error(err);
      });

      stream.on('end', () => {
        console.log(`gRPC stream ended: ${fullMethod}`);
        observer.complete();
      });
    });
  },
};

export const client = new CouponStreamServiceClientImpl(rpc);
