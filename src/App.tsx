import React, { useRef, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ImageBox from "./components/ImageBox";

// 태그를 리턴하는 함수 : component
function App() {
  // use라는 접두사가 붙는 것을 hook이라고 함
  // hook은 어떠한 태그들을 지정 가능
  const inpRef = useRef<HTMLInputElement>(null);

  // imageList(첫번째 인자)는 리스트, setImageList(두번째 인자)는 함수
  // imageList는 무조건 setImageList 함수를 통해 변경해야함!!
  const [imageList, setImageList] = useState<string[]>([]);

  console.log(imageList);

  return (
    // React의 className === Js의 class
    // 속성같은건 비슷함 근데 onclick같은건 onClick으로 camelCase로 바꿔야함
    // React에는 닫는 열린 태그라는 개념이 x
    // 맨 바깥의 container를 만드는 이유 = 웹페이지 상에서의 중앙 정렬을 위함
    <div className="container">
      <div className="initial-box">
        <div className="text-center">
          이미지가 없습니다.<br></br>
          이미지를 추가해주세요.
        </div>
        <input
          type="file"
          ref={inpRef}
          onChange={(event) => {
            console.log(event.currentTarget.value);

            setImageList((prev) => [...prev, event.currentTarget.value]);
          }}
        />
        <div className="plus-box" onClick={() => inpRef.current?.click()}>
          +
        </div>
      </div>
    </div>
  );
}

export default App;
