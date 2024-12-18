"use client";
import { Article } from "@/app/types/reviewTypes/Article";
import { useCounterStore } from "@/providers/storeProvider";
import browserClient from "@/utils/supabase/client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export type Props = {
  params: {
    article_id: string;
  };
};

const DetailPage = ({ params }: Props) => {
  const [review, setReview] = useState<Article>();
  const uid = useCounterStore((state) => state.uid);
  const router = useRouter();

  useEffect(() => {
    getReview();
  }, []);

  // 리뷰 가져오기
  const getReview = async () => {
    const res = await browserClient.from("articles").select("*").eq("article_id", `${params.article_id}`);
    if (res.error !== null) {
      return <div>error : {res.error.message}</div>;
    }
    const findData: Article = res.data[0];
    setReview(findData);
  };

  // 리뷰 삭제
  const deleteReview = async () => {
    const confirm = window.confirm("리뷰를 삭제하시겠습니까?");
    if (confirm) {
      try {
        await browserClient.from("articles").delete().eq("article_id", `${params.article_id}`);
        alert("삭제되었습니다!");
        router.push("/");
      } catch (error) {
        console.log("delete error", error);
      }
    }
  };

  if (!review) return;

  // 만족도 평가 평균
  const scoreAverage = () => {
    const score = [review.score_outside, review.score_inside, review.score_traffic, review.score_crime];
    const sum = score.reduce((a, b) => a + b, 0);
    return (sum / score.length / 2).toFixed(1);
  };

  return (
    <div className="flex flex-col items-center text-center">
      <header>
        <h1 className="font-bold text-4xl mt-8">{review.house_name ? review.house_name : review.address}</h1>
        <p className="text-s my-6 text-gray-400">총 평점 ★ {scoreAverage()}</p>
        <p className="font-bold my-6">{`거주 유형: ${review.house_type} / 거주 년도: ${review.house_year} / 건물 유형: ${review.building_type} / 거주 층: ${review.house_floor}`}</p>
      </header>
      <main className="grid grid-cols-2 justify-items-center mt-[60px] mb-[45px] h-[445px]">
        <div className="flex flex-col items-start w-[718px] pl-[120px]">
          <p className="bg-[#2ECC71] text-white font-bold rounded-lg w-[165px] h-[55px] my-5 text-2xl flex items-center justify-center">
            장점
          </p>
          <p className="font-medium text-start text-[14px] w-[500px] h-[100px] overflow-y-auto">{review.good}</p>
          <p className="mt-10 bg-[#FFA500] text-white font-bold rounded-lg w-[165px] h-[55px] my-5 text-2xl flex items-center justify-center">
            단점
          </p>
          <p className="font-medium text-start text-[14px] w-[500px] h-[100px] overflow-y-auto">{review.bad}</p>
        </div>
        <section>
          <div className="relative w-full py-[30%] mb-10">
            <Image src={review.img_url} alt="img_url" layout="fill" className="object-cover" />
          </div>
          <p className="review-label text-center mb-4">
            만족도 평가 <span className="text-[#666666]">(각 최대 10점)</span>
          </p>
          <div className="grid grid-cols-2">
            <div className="detail-score bg-[#F1F1F1]">
              <p className="score-label">집 외부</p>
              {review.score_outside}
            </div>
            <div className="detail-score bg-[#E2E1E1]">
              <p className="score-label">교통</p>
              {review.score_traffic}
            </div>
            <div className="detail-score bg-[#F4F4F4]">
              <p className="score-label">집 내부</p>
              {review.score_inside}
            </div>
            <div className="detail-score bg-[#F9F9F9]">
              <p className="score-label">치안</p>
              {review.score_crime}
            </div>
          </div>
        </section>
      </main>
      {uid && uid === review.writer ? (
        <div>
          <Link href={`/review/${params.article_id}/modify`}>
            <button className="modify-btn">수정</button>
          </Link>
          <button className="modify-btn bg-[#696969] hover:bg-[#aeaeae]" onClick={deleteReview}>
            삭제
          </button>
        </div>
      ) : null}
      <div>
        <button
          onClick={() => {
            router.back();
          }}
          className="mr-2 border border-solid border-[#25486b] bg-white text-[#25486b] p-2 w-[200px] my-10 font-bold rounded-full"
        >
          뒤로가기
        </button>
        <Link href="/">
          <button className="review-confirm-btn">홈으로</button>
        </Link>
      </div>
    </div>
  );
};

export default DetailPage;
