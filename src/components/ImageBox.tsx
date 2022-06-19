// 태그를 반환하고 있기 때문에 컴포넌트
// 컴포넌트 : 태그를 반환해주는 함수
function ImageBox(props: { src: string }) {
  return (
    // html파일에서 js소스를 쓸때는 {} 사용
    <div className="image-box">
      <img src={props.src} />
    </div>
  );
}

// 다른곳에서 사용할 것이기 때문에 export를 사용해서 내보내주기
export default ImageBox;
