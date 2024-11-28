# 프로젝트 이름

- 집플래닛


# 프로젝트 소개 👨‍🏫

이 프로젝트는 실제 거주자들이 작성하는 생생한 리뷰를 통하여서 추후 들어올 세입자들을 위하여 정보를 제공하는 사이트입니다.


## 배포 주소
<https://home-planet-six.vercel.app//>


## 개발 기간 ⏲️

- 2024.10.10(목) ~ 2024.10.17(목)


## 역할 분담

- **김진형**
  - Supabase 초기 셋업(Table 제작 및 Table 관계 연결)
  - 회원가입, 로그인 페이지 구현
  - 로그인 유무에 따른 페이지 접근 제한하는 middleware 구성
- **장세희**
  - 마이페이지(내가쓴리뷰): 사용자가 작성한 리뷰 목록을 조회하는 기능
  - 메인페이지(최신순,별점순 리뷰): 작성된 리뷰를 최신순, 별점 순으로 정렬하여 보여주는 기능
- **설하영**
  - 후기 작성 페이지 구현, 후기 수정 페이지 구현
  - 후기 상세 페이지 구현
- **최지민**
  - 프로젝트 초기 셋업(GitHub, 각종 주요 패키지 설치, prettierrc)
  - 지도 페이지 구현
  - 검색, 필터링 기능 구현


## 주요 기능 💜

- 로그인, 회원가입 기능
- 내 게시글 관리
- 거주 후기 검색 및 필터링
- 거주 후기 CRUD (생성, 읽기, 수정, 삭제)


## 기술 스택 📚️

<div style="text-align: left;">
  <div style="margin: ; text-align: left;" "text-align: left;">
    <img src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white">
    <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white">
    <img src="https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white">
    <img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=Prettier&logoColor=white">
    <img src="https://img.shields.io/badge/Eslint-4B32C3?style=for-the-badge&logo=Eslint&logoColor=white">
  <br/></div>
</div>


## 개발 환경 

<div style="text-align: left;">
  <div style="margin: ; text-align: left;" "text-align: left;">
    <img src="https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white">
    <img src="https://img.shields.io/badge/Github-181717?style=for-the-badge&logo=Github&logoColor=white">
    <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=Figma&logoColor=white">
  <br/></div>
</div>


## 프로젝트 구조

```
home-planet/
│
├── public/
│   └── images/
│       └── (필요한 이미지 파일들)
├── src/
|   ├── app/
│   │   ├── _components/
|   |   |   ├── rotation/
|   |   |   └── route.ts
│   │   ├── (pages)/
|   |   |   ├── donation/
|   |   |   |   └── page.tsx
|   |   |   ├── login/
|   |   |   |   └── page.tsx
|   |   |   ├── map/
|   |   |   |   ├── _components
|   |   |   |   |   ├── KakaoMap.tsx
|   |   |   |   |   ├── SearchInput.tsx
|   |   |   |   |   ├── SideBar.tsx
|   |   |   |   |   ├── SidePanel.tsx
|   |   |   |   |   └── supabase.ts
|   |   |   |   └── page.tsx
|   |   |   ├── mypage/
|   |   |   |   ├── _components
|   |   |   |   |   ├── MyReviewsPage.tsx
|   |   |   |   |   ├── ReviewCard.tsx
|   |   |   |   |   └── ReviewList.tsx
|   |   |   |   ├── myreviews/
|   |   |   |   |   └── page.tsx
|   |   |   |   └── page.tsx
|   |   |   ├── review/
|   |   |   |   ├── _components
|   |   |   |   |   ├── ModifyMap.tsx
|   |   |   |   |   └── ReviewMap.tsx
|   |   |   |   ├── [article_id]/
|   |   |   |   |   ├── modify/
|   |   |   |   |   |   └── page.tsx
|   |   |   |   |   └── page.tsx
|   |   |   |   └── page.tsx
|   |   |   └── signup/
|   |   |       └── page.tsx
│   │   ├── hooks/
|   |   |   ├── useReviews.ts
|   |   |   └── useUserId.ts
│   │   ├── types/
|   |   |   ├── mapTypes
|   |   |   |   └── ArticleType.ts
|   |   |   ├── mypageTypes
|   |   |   |   └── Review.ts
|   |   |   └── reviewTypes
|   |   |       ├── Address.ts
|   |   |       └── Article.ts
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
|   |
│   ├── providers/
│   │   └── storeProvider.tsx
│   │
│   ├── store/
│   │   └── userStore.ts
│   │
│   ├── stores/
│   │   └── loginStore.ts
|   |
│   ├── utils/
│   │   └── supabase/
|   |       ├── client.ts
|   |       ├── middleware.ts
|   |       ├── review.ts
|   |       └── server.ts
│   │
│   └── middleware.ts
├── next.config.mjs
├── package-lock.json
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```


## 페이지별 기능

- **로그인 페이지**
  > 사용자 인증
- **회원가입 페이지**
  > 새 사용자 계정 생성
- **메인 페이지**
  > 거주 후기 카드 표시, 최신순, 별점 높은 순 정렬, 후기 검색 기능
- **지도 페이지**
  > 지도에 마커 표시, 후기 검색 기능, 건물 유형 별 필터링
- **디테일 페이지**
  > 개별 후기의 상세 정보 표시
- **마이 페이지**
  > 사용자가 작성한 거주 후기 목록 관리
- **피드 작성 폼 페이지**
  > 새로운 후기 생성 및 수정, 이미지 핸들링


## 이슈 🔥

### <리뷰 카드 컴포넌트 분리> (팀원 장세희)<br>
#### 문제 상황:
1. 마이페이지와 메인페이지의 리뷰카드 중복 구현<br>
  - 마이페이지와 메인페이지 모두에서 리뷰카드 UI와 데이터를 표시해야 했으나, 버튼 표시 조건이 다름:
    - 메인페이지: 수정/삭제 버튼 미표시
    - 마이페이지: 로그인한 사용자의 리뷰에만 수정/삭제 버튼 표시
  - 이로 인해 코드 중복 및 유지보수 부담 증가
2. 리뷰 정렬 기능의 데이터 로딩 속도 최적화 필요
  - 전체 리뷰를 최신순 또는 별점 높은 순으로 필터링하여 제공해야 했으며, 필터링 로직 개선 필요

#### 해결 방법: <br>
1. 리뷰카드 컴포넌트 분리
  - 단일 컴포넌트로 분리하고, props를 통해 버튼 표시 여부를 제어
  - 조건부 렌더링 적용<br>
2. 리뷰 정렬 및 필터링 로직 최적화: 데이터를 정렬하는 함수에서 로직을 단순화하여 불필요한 반복 제거
  

### <메인 페이지와 지도 페이지의 검색 기능 통합> (팀원 최지민)<br>
문제: 메인페이지에서 검색 후 자동으로 지도페이지로 이동할 때, 검색 결과가 유지되지 않았습니다.<br>
원인: 지도랑 메인에서 서로 다른 Input 컴포넌트를 사용중이기 때문에 로직이 달라서 발생하는 문제인 것 같습니다.<br>
해결방법: URL 파라미터를 활용해 검색 상태를 공유했습니다. router.push() 사용해서 지도페이지로 전달했습니다.
```
router.push(`/map?search=${encodeURIComponent(search)}`);
```
지도페이지에서는 URL 파라미터를 읽어와 KakaoMap 컴포넌트에 프롭스로 전달했습니다.
```
import { useSearchParams } from 'next/navigation';
import KaKaoMap from './KaKaoMap';

export default function MapPage() {
  const searchParams = useSearchParams();
  const initialSearch = searchParams.get('search') || '';

  return <KaKaoMap initialSearch={initialSearch} />;
}
```
KakaoMap 컴포넌트에서는 initialSearch 프롭스를 받아서 사용했습니다!<br>
결과: 사용자는 메인페이지에서 검색을 하면 자동으로 지도페이지로 이동하며 검색결과가 즉시 표시됩니다. 따로 사용자가 지도를 들어가서 검색해도 검색 결과는 일치합니다.<br>

### <Cannot read properties of undefined (reading 'Geocoder')> (팀원 설하영)<br>
문제: kakao맵의 services 라이브러리 기능인 지오코더를 인식하지 못하였습니다.<br>
원인: script를 동적으로 로드하게 되면 로드가 다 끝나기도 전에 kakao api를 불러오는 코드가 먼저 실행 될 수 있기 때문에 script의 src url 뒤에 추가해줬었던 autoload=false와 연관이 있었습니다.<br>
해결방법: useEffect 안에서 불러오던 함수를 window.kakao.maps.load 콜백함수로 감싸주어 카카오 맵 SDK 가 로드가 다 되고난 후 실행되도록 처리하여 해결하였습니다.<br>
```
<Script src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.KAKAO_KEY}&autoload=false&libraries=services`}
    strategy="beforeInteractive"
/>

useEffect(() => {
  window.kakao.maps.load(() => {
   const geocoder = new window.kakao.maps.services.Geocoder();
  });
 }, []);
```
### <middleware에서 로그인 상태를 확인하기 위해 작성한 코드들> (팀장 김진형)
문제: middleware는 외부에서 zustand 상태에 접근하지 못하기 때문에 어떻게 로그인 상태를 접근할 수 있는지 많은 고민을 하였습니다.<br>
해결방법1: auth로 로그인을 진행해서 성공하면 cookies에 sb-...-auth-token이 생성되는 것을 확인하고 이것이 존재하면 user가 로그인을 하였다고 판단하여 코드를 작성하였습니다.
```
export async function middleware(request: NextRequest) {
  const accessToken = request.cookies.get("sb-zpoqlmaetyjwslleswlh-auth-token");
  const isLogin = !!accessToken;
  if (!isLogin && (request.nextUrl.pathname.startsWith("/mypage") || request.nextUrl.pathname.startsWith("/review"))) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
}
```
해결방법1의 문제점: 배포를 진행하거나 다른 이유에서 auth의 middleware의 접근 주소가 변경되면 토큰 이름이 변경되어 middleware가 동작하지 않을 수 있다는 문제점이 존재하였습니다.<br>
해결방법2: Supabase에 접근하여 user 정보를 가져오는 로직을 작성하는 방식으로 변경하여 작성하였습니다.
```
export async function middleware(request: NextRequest) {
  await updateSession(request);
  const serverClient = createClient();
  const {
    data: { user }
  } = await serverClient.auth.getUser();

  const isLogin = !!user;

  if (!isLogin && (request.nextUrl.pathname.startsWith("/mypage") || request.nextUrl.pathname.startsWith("/review"))) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}
```
개선사항 및 결과: updateSession(request)을 통해 supabase.auth 세션을 업데이트하고 getUser()를 통해서 user 정보를 가져왔습니다. 이를 통하여 만약 발생할 수 있는 auth의 middleware 접근 주소가 변경되어 토큰 이름이 변경 되더라도 auth에서 user 정보를 들고 올 수 있게 되었습니다.
