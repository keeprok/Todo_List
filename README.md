## 페이지 이동

메인 페이지 /

AddTodoForm을 통해 name 입력 → /add 페이지로 이동

할 일 등록 페이지 /add

name을 쿼리로 받아서 제목 표시 (e.g. 운동하기)

MemoEditor / ImgEditor에서 메모 및 이미지 작성

"수정" 버튼 클릭 시 POST 요청 → 생성 성공하면 /detail/[id]로 이동

상세 페이지 /detail/[id]

useTodoDetail로 해당 id의 todo 데이터 fetch

이름, 완료 여부, 메모, 이미지 표시

ActionButton으로 수정(PATCH) 또는 삭제(DELETE) 가능

## 기능

생성

AddTodoForm에서 name 입력 후 /add?name=입력값 으로 이동

/add에서 name, memo, imageUrl 조합하여 POST 요청

응답의 id로 /detail/[id] 이동

조회

/detail/[id] 접근 시 useParams로 id 추출

useTodoDetail로 GET 요청하여 데이터 표시

수정

메모/이미지 수정 후 "수정" 버튼 클릭

usePatchTodo로 PATCH 요청

성공 시 화면 갱신 또는 알림

삭제

"삭제" 버튼 클릭 시 confirm() 후 삭제 요청

성공 시 /로 리디렉션
