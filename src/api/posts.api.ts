// src/api/posts.api.ts

import { api } from "./axios";
import type { Post, CreatePostDto } from "./types";

/*
  GET /posts
  전체 게시글 조회 (카테고리 필터 가능)
*/
export async function getPosts(category?: string): Promise<Post[]> {
  const res = await api.get<Post[]>("/posts", {
    params: category ? { category } : undefined,
  });
  return res.data;
}

/*
  GET /posts/:id
  단일 게시글 조회
*/
export async function getPostById(id: number): Promise<Post> {
  const res = await api.get<Post>(`/posts/${id}`);
  return res.data;
}

/*
  POST /posts
  게시글 생성
*/
export async function createPost(data: CreatePostDto): Promise<Post> {
  const res = await api.post<Post>("/posts", data);
  return res.data;
}

/*
  PATCH /posts/:id
  게시글 수정
*/
export async function updatePost(
  id: number,
  data: Partial<CreatePostDto>
): Promise<Post> {
  const res = await api.patch<Post>(`/posts/${id}`, data);
  return res.data;
}

/*
  DELETE /posts/:id
  게시글 삭제
*/
export async function deletePost(id: number): Promise<void> {
  await api.delete(`/posts/${id}`);
}
