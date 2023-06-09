import { useState } from 'react';

import {
  SaveLeaveBoxContainer,
  LeaveBtn,
  SaveBtn,
} from '@components/application/SaveLeaveBox';
import { ApplicationEditData } from '..';
import { LeaveModal } from '@pages/ApplicationWrite/write/components/LeaveModal';
import { EditSaveModal } from './EditSaveModal';

interface propsType {
  formId: number;
  form: ApplicationEditData | null;
}

export const SaveLeaveEditBox = ({ formId, form }: propsType) => {
  const [isOpenLeaveModal, setIsOpenLeaveModal] = useState<boolean>(false);
  const [isOpenSaveModal, setIsOpenSaveModal] = useState<boolean>(false);

  const handleClickSaveBtn = () => {
    const hasEmptyQuestion = form?.applicationItems?.some(
      (item) => item.applicationQuestion.trim() === ''
    );
    if (form?.recruiter !== '' && !hasEmptyQuestion) {
      setIsOpenSaveModal(true);
    } else {
      alert('동아리명과 질문을 모두 입력해주세요.');
    }
  };

  return (
    <SaveLeaveBoxContainer>
      <LeaveBtn
        onClick={() => {
          setIsOpenLeaveModal(true);
        }}
      >
        나가기
      </LeaveBtn>
      <SaveBtn onClick={handleClickSaveBtn}>저장하기</SaveBtn>
      <LeaveModal isOpen={isOpenLeaveModal} setIsOpen={setIsOpenLeaveModal} />
      <EditSaveModal
        isOpen={isOpenSaveModal}
        setIsOpen={setIsOpenSaveModal}
        form={form}
        formId={formId}
      />
    </SaveLeaveBoxContainer>
  );
};
