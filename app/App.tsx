import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { Skeleton } from 'react-native-preload';

const App = () => {

  const [loading, setLoading] = useState(true);

  const carregando = (delay: number, valor: boolean) => {
    setTimeout(() => setLoading(valor), delay);
  }

  useEffect(() => carregando(3000, false));

  return (

    <View>
      {loading == true ? <Skeleton  Width={170} Height={130} BorderRadius={10} /> : <Text>Hello World</Text>}
    </View>
  )
}

export default App;
