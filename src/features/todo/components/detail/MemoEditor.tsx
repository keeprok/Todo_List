import Image from 'next/image';

interface MemoEditorProps {
  value: string;
  onChange: (value: string) => void;
}

export const MemoEditor = ({ value, onChange }: MemoEditorProps) => {
  return (
    <div className="relative lg:w-[588px] sm:w-[696px] w-[343px] rounded-[24px] overflow-hidden h-[311px]">
      <div className="absolute inset-0 w-full h-full ">
        <Image src="/img/memo.png" alt="메모 배경" fill className="object-cover" priority />
      </div>

      <div className="relative z-10 pt-4 h-full w-full flex flex-col items-center justify-center">
        <p className="text-center text-amber-800 font-extrabold">Memo</p>
        <div className="mt-4 flex h-full w-full items-end justify-center">
          <textarea
            value={value ?? ''}
            onChange={(e) => onChange(e.target.value)}
            className="w-full h-[229px] font-bold text-slate-800 resize-none outline-none 
              whitespace-pre-wrap break-words text-center overflow-y-scroll bg-transparent leading-relaxed"
            placeholder="메모를 입력하세요"
            maxLength={100}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

// 메모 입력 및 수정 영역
