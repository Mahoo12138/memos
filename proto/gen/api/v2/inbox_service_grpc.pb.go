// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.3.0
// - protoc             (unknown)
// source: api/v2/inbox_service.proto

package apiv2

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

const (
	InboxService_ListInbox_FullMethodName   = "/memos.api.v2.InboxService/ListInbox"
	InboxService_UpdateInbox_FullMethodName = "/memos.api.v2.InboxService/UpdateInbox"
	InboxService_DeleteInbox_FullMethodName = "/memos.api.v2.InboxService/DeleteInbox"
)

// InboxServiceClient is the client API for InboxService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type InboxServiceClient interface {
	ListInbox(ctx context.Context, in *ListInboxRequest, opts ...grpc.CallOption) (*ListInboxResponse, error)
	UpdateInbox(ctx context.Context, in *UpdateInboxRequest, opts ...grpc.CallOption) (*UpdateInboxResponse, error)
	DeleteInbox(ctx context.Context, in *DeleteInboxRequest, opts ...grpc.CallOption) (*DeleteInboxResponse, error)
}

type inboxServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewInboxServiceClient(cc grpc.ClientConnInterface) InboxServiceClient {
	return &inboxServiceClient{cc}
}

func (c *inboxServiceClient) ListInbox(ctx context.Context, in *ListInboxRequest, opts ...grpc.CallOption) (*ListInboxResponse, error) {
	out := new(ListInboxResponse)
	err := c.cc.Invoke(ctx, InboxService_ListInbox_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *inboxServiceClient) UpdateInbox(ctx context.Context, in *UpdateInboxRequest, opts ...grpc.CallOption) (*UpdateInboxResponse, error) {
	out := new(UpdateInboxResponse)
	err := c.cc.Invoke(ctx, InboxService_UpdateInbox_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *inboxServiceClient) DeleteInbox(ctx context.Context, in *DeleteInboxRequest, opts ...grpc.CallOption) (*DeleteInboxResponse, error) {
	out := new(DeleteInboxResponse)
	err := c.cc.Invoke(ctx, InboxService_DeleteInbox_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// InboxServiceServer is the server API for InboxService service.
// All implementations must embed UnimplementedInboxServiceServer
// for forward compatibility
type InboxServiceServer interface {
	ListInbox(context.Context, *ListInboxRequest) (*ListInboxResponse, error)
	UpdateInbox(context.Context, *UpdateInboxRequest) (*UpdateInboxResponse, error)
	DeleteInbox(context.Context, *DeleteInboxRequest) (*DeleteInboxResponse, error)
	mustEmbedUnimplementedInboxServiceServer()
}

// UnimplementedInboxServiceServer must be embedded to have forward compatible implementations.
type UnimplementedInboxServiceServer struct {
}

func (UnimplementedInboxServiceServer) ListInbox(context.Context, *ListInboxRequest) (*ListInboxResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListInbox not implemented")
}
func (UnimplementedInboxServiceServer) UpdateInbox(context.Context, *UpdateInboxRequest) (*UpdateInboxResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateInbox not implemented")
}
func (UnimplementedInboxServiceServer) DeleteInbox(context.Context, *DeleteInboxRequest) (*DeleteInboxResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteInbox not implemented")
}
func (UnimplementedInboxServiceServer) mustEmbedUnimplementedInboxServiceServer() {}

// UnsafeInboxServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to InboxServiceServer will
// result in compilation errors.
type UnsafeInboxServiceServer interface {
	mustEmbedUnimplementedInboxServiceServer()
}

func RegisterInboxServiceServer(s grpc.ServiceRegistrar, srv InboxServiceServer) {
	s.RegisterService(&InboxService_ServiceDesc, srv)
}

func _InboxService_ListInbox_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListInboxRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(InboxServiceServer).ListInbox(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: InboxService_ListInbox_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(InboxServiceServer).ListInbox(ctx, req.(*ListInboxRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _InboxService_UpdateInbox_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateInboxRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(InboxServiceServer).UpdateInbox(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: InboxService_UpdateInbox_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(InboxServiceServer).UpdateInbox(ctx, req.(*UpdateInboxRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _InboxService_DeleteInbox_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteInboxRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(InboxServiceServer).DeleteInbox(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: InboxService_DeleteInbox_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(InboxServiceServer).DeleteInbox(ctx, req.(*DeleteInboxRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// InboxService_ServiceDesc is the grpc.ServiceDesc for InboxService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var InboxService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "memos.api.v2.InboxService",
	HandlerType: (*InboxServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "ListInbox",
			Handler:    _InboxService_ListInbox_Handler,
		},
		{
			MethodName: "UpdateInbox",
			Handler:    _InboxService_UpdateInbox_Handler,
		},
		{
			MethodName: "DeleteInbox",
			Handler:    _InboxService_DeleteInbox_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "api/v2/inbox_service.proto",
}
