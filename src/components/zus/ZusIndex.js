import { useStore } from '../../store/store';
import shallow from 'zustand/shallow';

const ZusIndex = () => {
  const { count, increment, textData, setTextData } = useStore(
    (state) => ({
      count: state.count,
      increment: state.increment,
      textData: state.textData,
      setTextData: state.setTextData,
    }),
    shallow
  );
  return (
    <div>
      <div>{count}</div>
      <button onClick={() => increment()}>Increment</button>
      <input
        type='text'
        onChange={(e) => setTextData(e.target.value)}
        value={textData}
      />
      <p>{textData}</p>
    </div>
  );
};

export default ZusIndex;
