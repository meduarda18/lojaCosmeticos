import { sincronizacaoOffline } from './src/hooks/SincronizacaoOffline';
import Routes from './src/routes/index'

export default function App() {
  sincronizacaoOffline();
  return <Routes />;
}
