import ZusIndex from '../src/components/zus/ZusIndex';
// import { initializeStore } from '../src/components/zustandTest/ZustandStore';

// export async function getServerSideProps() {
//   const zustandStore = initializeStore();
//   return {
//     props: {
//       // the "stringify and then parse again" piece is required as next.js
//       // isn't able to serialize it to JSON properly
//       initialZustandState: JSON.parse(JSON.stringify(zustandStore.getState())),
//     },
//   };
// }
export default function ZusInd() {
  return <ZusIndex />;
}
