import Chronology, { hours } from '../Chronology/Chronology';
import Hour from '../Hour/Hour';
import * as S from './layout';

const Calendar = () => {
  return (
    <S.Container>
      <Chronology />
      <S.HoursContainer>
        {hours.map(hour => (
          <Hour key={hour} hour={hour} />
        ))}
      </S.HoursContainer>
    </S.Container>
  );
};
export default Calendar;
