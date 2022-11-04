import * as S from './layout';
import randomColor from 'randomcolor';

interface Props {
  id: number;
  duration: number;
  startingMin: number;
  endEvent: string;
}

const EventBloc = ({ id, duration, startingMin, endEvent }: Props) => {
  return (
    <S.Event duration={duration} startingMin={startingMin} color={randomColor()}>
      {id}
    </S.Event>
  );
};

export default EventBloc;
