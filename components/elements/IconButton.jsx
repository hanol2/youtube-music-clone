import React from 'react'

// 기본 값으로 빈 함수를 전달해주면 null인경우 오류 안남
const IconButton = ({icon, onClickIcon = () => {}}) => {
  return (
     <div
      onClick={onClickIcon}
      className="flex justify-center items-center w-[36px] h-[36px]
       hover:bg-[rgba(144,144,144,0.45)] rounded-full cursor-pointer "
    >
        {icon}
    </div>
  )
}

export default IconButton;
