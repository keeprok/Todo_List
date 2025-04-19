import * as React from 'react';
// plus 아이콘
type PlusIconProps = {
  color: 'gray' | 'white';
};

export const PlusIcon = ({ color }: PlusIconProps) => {
  return color && 'gray' ? (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 8L14 8" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <path d="M8 14L8 2" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ) : (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 12L21 12" stroke="#64748B" strokeWidth="3" strokeLinecap="round" />
      <path d="M12 21L12 3" stroke="#64748B" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
};

// pen 아이콘
export const PenIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M13.3098 3.86603C13.586 3.38773 14.1975 3.22386 14.6758 3.5L18.0481 5.44698C18.5264 5.72312 18.6903 6.33471 18.4141 6.81301L11.1837 19.3366C11.072 19.5299 10.8989 19.6803 10.6919 19.7639L7.12194 21.2048C6.81834 21.3273 6.48085 21.1299 6.43891 20.8052L5.95038 17.0233C5.92229 16.8058 5.96647 16.5851 6.07612 16.3952L13.3098 3.86603Z"
      fill="white"
    />
  </svg>
);
// 체크박스 아이콘
type CheckboxIconProps = {
  checked: boolean;
};
export const CheckBoxIcon = ({ checked }: CheckboxIconProps) => {
  if (checked) {
    return (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="16" fill="#7C3AED" />
        <path
          d="M8 16.2857L13.8182 22L24 12"
          stroke="#FEFCE8"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  } else {
    return (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="15" fill="#FEFCE8" stroke="#0F172A" strokeWidth="2" />
      </svg>
    );
  }
};
// 체크 아이콘
export const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 7L6.5 11.5L14 4" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// 닫기 아이콘

export const CloseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 4L12 12" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <path d="M12 4L4 12" stroke="white" strokeWidth="2" strokeLinecap="round" />
  </svg>
);
