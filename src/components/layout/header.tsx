'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Header = () => {
  const router = useRouter();
  return (
    <header className="w-full border-b-1 border-slate-200 bg-slate-200">
      {/* 데스크탑: 살짝 왼쪽정렬 + 아이콘 글씨*/}
      <div className="hidden lg:flex  w-full pl-[360px]">
        <button onClick={() => router.push('/')}>
          <Image src="/img/logo/textLogo.png" alt="logo" width={151} height={40} priority />
        </button>
      </div>

      {/* 테블릿 */}
      <div className="hidden sm:flex lg:hidden px-[16px]">
        <button onClick={() => router.push('/')}>
          <Image src="/img/logo/textLogo.png" alt="logo" width={151} height={40} priority />
        </button>
      </div>

      {/* 모바일 */}
      <div className="flex sm:hidden w-full px-[16px] ">
        <button onClick={() => router.push('/')}>
          <Image src="/img/logo/noneLogo.png" alt="logo" width={71} height={40} priority />
        </button>
      </div>
    </header>
  );
};
export default Header;

// 반응형 헤더 컴포넌트 (로고 및 홈 이동)
