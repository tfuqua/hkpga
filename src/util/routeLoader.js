import Loadable from 'react-loadable';
import { MyLoadingComponent } from '../components/Loader';

export default function routeLoader(component) {
  return Loadable({
    loader: component,
    LoadingComponent: MyLoadingComponent,
    delay: 50
  });
}
