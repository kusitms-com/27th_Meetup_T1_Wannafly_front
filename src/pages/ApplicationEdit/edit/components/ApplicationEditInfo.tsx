import {
  ApplicationInfoContainer,
  RecruiterInput,
  YearSelect,
  SemesterSelectBox,
  Semester,
} from '@components/application/ApplicationInfo';
import { getYearOptions } from '@pages/ApplicationWrite/write/util/getYearOptions';
import { ApplicationEditData } from '..';

interface propsType {
  form: ApplicationEditData | null;
  setForm: React.Dispatch<React.SetStateAction<ApplicationEditData | null>>;
}

export const ApplicationEditInfo = ({ form, setForm }: propsType) => {
  const handleChangeRecruiterInput = (e: React.FormEvent<HTMLInputElement>) => {
    setForm({ ...form!, recruiter: e.currentTarget.value });
  };

  const handleChangeSelectYear = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setForm({ ...form!, year: Number(e.currentTarget.value) });
  };

  const handleClickSemester = (semester: string) => {
    if (semester === 'first_half') {
      setForm({ ...form!, semester: 'first_half' });
    } else {
      setForm({ ...form!, semester: 'second_half' });
    }
  };

  return (
    <ApplicationInfoContainer>
      <RecruiterInput
        value={form?.recruiter || ''}
        onChange={handleChangeRecruiterInput}
      />
      <YearSelect value={form?.year} onChange={handleChangeSelectYear}>
        <option value="" disabled hidden>
          년도 선택
        </option>
        {getYearOptions()}
      </YearSelect>
      <SemesterSelectBox>
        <Semester
          className={form?.semester === 'first_half' ? 'selected' : ''}
          onClick={() => {
            handleClickSemester('first_half');
          }}
        >
          상반기
        </Semester>
        <Semester
          className={form?.semester === 'second_half' ? 'selected' : ''}
          onClick={() => {
            handleClickSemester('second_half');
          }}
        >
          하반기
        </Semester>
      </SemesterSelectBox>
    </ApplicationInfoContainer>
  );
};
