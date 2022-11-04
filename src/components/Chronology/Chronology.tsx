import * as S from './layout';

export const hours = [
  '9:00',
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
  '18:00',
  '19:00',
  '20:00',
  '21:00',
];

const Chronology = () => {
  return (
    <S.Container>
      {hours.map(hour => (
        <S.Hour key={hour}>
          <span>{hour}</span>
        </S.Hour>
      ))}
    </S.Container>
  );
};

export default Chronology;
