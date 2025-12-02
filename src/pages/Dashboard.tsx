import PostPreviewSection from "../components/post-preview/PostPreviewSection";

const Dashboard = () => {
  return (
    <div className="w-full h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="text-center px-12 py-4 bg-white rounded-3xl font-bold text-4xl">
        Dashboard
      </div>
      <div className="w-full h-6" />
      <div className="w-[25%]">
        <PostPreviewSection posts={mockPosts} />
      </div>
    </div>
  );
};

export default Dashboard;

export const mockPosts = [
  {
    id: 1,
    user_id: "9f47d8ee-2b6b-4d1a-9e07-4bfb2fbd2c27",
    title: "Supabase로 만드는 서버리스 게시판",
    content:
      "Supabase Edge Functions와 Hono를 사용해서 서버리스 게시판을 구축해보았다.",
    category: "tech",
    is_published: true,
    created_at: "2025-01-10T09:12:45.123Z",
    updated_at: "2025-01-10T10:55:22.901Z",
  },
  {
    id: 2,
    user_id: "b12a0db7-89bb-47c2-b01f-909fc74b766c",
    title: "오늘의 일기",
    content: "비가 와서 커피 마시며 코딩했다. Supabase 너무 편하다.",
    category: "daily",
    is_published: false,
    created_at: "2025-01-11T14:22:11.850Z",
    updated_at: "2025-01-11T14:22:11.850Z",
  },
  {
    id: 3,
    user_id: "9f47d8ee-2b6b-4d1a-9e07-4bfb2fbd2c27",
    title: "Next.js + React Query + Supabase 완전정복",
    content: "프론트엔드 실전 API 연동 예제를 만들면서 공부한 기록.",
    category: "tech",
    is_published: true,
    created_at: "2025-01-12T08:01:31.402Z",
    updated_at: "2025-01-12T08:33:12.292Z",
  },
  {
    id: 4,
    user_id: "a62e732f-92c1-4b67-9c94-bcf2faccdf20",
    title: "서울 카페 추천",
    content:
      "오늘 방문한 카페 라떼 너무 맛있었다. 사진은 Edge Storage에 업로드 예정.",
    category: "life",
    is_published: true,
    created_at: "2025-01-15T12:45:09.000Z",
    updated_at: "2025-01-15T12:45:09.000Z",
  },
  {
    id: 5,
    user_id: "b12a0db7-89bb-47c2-b01f-909fc74b766c",
    title: "게시글 비공개 테스트",
    content: "이 글은 is_published가 false라서 본인 계정 외엔 접근할 수 없다.",
    category: "test",
    is_published: false,
    created_at: "2025-01-16T07:22:00.512Z",
    updated_at: "2025-01-16T07:22:00.512Z",
  },
];
