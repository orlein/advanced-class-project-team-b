import { useParams } from 'react-router-dom';

const dummyPosts = [
  {
    id: 1,
    title: '11월 8일 22시 파주 풋살 용병 구해요.',
    content: '다치지 않고 즐겁게 하실 분 ~~~',
    author: '길동무가없는홍길동',
    createdAt: '2024-11-04',
  },
  {
    id: 2,
    title: '대구 수성못 스쿠버 다이빙 파티 구합니다.',
    content:
      '대구 수성못에서 스쿠버 다이빙 같이 할 파티원 모집합니다. 저도 수영 잘 못하니까 알아서들 생존하셔야 합니다.',
    author: '용산손절장인',
    createdAt: '2024-10-30',
  },
  {
    id: 3,
    title: '주인과 함께 하는 유산소 운동',
    content: '유산소 운동으로 체력을 키워보세요! 걷기, 뛰기 추천합니다.',
    author: '홍삼이',
    createdAt: '2023-10-25',
  },
  {
    id: 4,
    title: '한강에서 런닝 같이 해요~~',
    content: '한강 공원에서 런닝 같이 뛰어요~~',
    author: '이봉주',
    createdAt: '2023-10-28',
  },
  {
    id: 5,
    title: '농구 1대1 상대 구함',
    content: '아무나 들어와',
    author: '하승진',
    createdAt: '2023-10-19',
  },
];

const PostDetail = () => {
  const { id } = useParams();
  const postId = id ? parseInt(id, 10) : null;
  const post = dummyPosts.find(post => post.id === postId);

  if (!post) {
    return <p>게시글을 찾을 수 없습니다.</p>;
  }

  return (
    <div className="container mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-700">{post.content}</p>
      <footer className="text-sm text-muted-foreground">
        <span>작성자: {post.author}</span> | <time>{post.createdAt}</time>
      </footer>
    </div>
  );
};
export default PostDetail;
