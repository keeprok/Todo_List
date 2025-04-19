import { ActionButton } from '@/components/common/button/AcctionButton';

import { MemoEditor } from './MemoEditor';
import { ImgEditor } from '../image/ImgEditor';

export const TodoDetialEditer = () => {
  return (
    <div className="flex flex-col gap-6 pt-[17px] sm:pt-6">
      <div className="flex flex-col gap-[17px] sm:gap-6 lg:flex-row">
        <ImgEditor />
        <MemoEditor />
      </div>
      <div className="w-full justify-center lg:justify-end flex gap-[7px] sm:gap-4">
        <ActionButton purpose="edit" />
        <ActionButton purpose="delete" />
      </div>
    </div>
  );
};
