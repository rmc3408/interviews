import { useState } from 'react';
import Title from '../components/Title';
import CurrentDebts from '../modules/CurrentDebts';
import ConsolidatedDebts from '../modules/ConsolidateDebts';
import Screen from '../components/screen';

function App() {
  const [isReady, setReady] = useState<boolean>(false)

  const DISPLAY = isReady ? <ConsolidatedDebts setReady={setReady} /> : <CurrentDebts setReady={setReady} />

  return (
    <Screen>
        <Title />
        <div>
          {DISPLAY}
        </div>

    </Screen>
  );
}

export default App;
