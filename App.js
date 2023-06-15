import react from 'react';
// import styles from './styles.module.css'
import {Meme} from '../Meme/meme';
import {Switch, Route} from 'react-router-dom';
import { MemeGenerated } from '../MemeGenerated/MemeGenerated';
export const App =() => {
  return (
    <div>
      <h1>Meme Creator</h1>
      <Switch>
      <Route exact path='/'>
        <Meme />
      </Route>
      <Route path='/generated'>
        <Meme />
      </Route>
    </Switch>
    </div>
  );
}

