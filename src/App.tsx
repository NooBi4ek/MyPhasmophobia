import React from 'react';
import Header from './Header/Header.tsx';
import { Wrapper } from './styled/App/SApp.js';
import Evidence from './Main/Evidence.tsx';
import GhostName from './Main/GhostName.tsx';
import GhostPage from './GhostPage/GhostPage.tsx';
import { Route, Routes } from 'react-router-dom';
import { useAppSelector } from './store/hooks.ts';

interface IChar {
  id: number;
  name: string;
  history: string;
}
interface IText {
  text: string;
}
interface IApp {
  text: IText[];
  ghosts: IChar[];
}

const App: React.FC<IApp> = () => {
  const ghosts = useAppSelector((state) => state.fazma.ghosts);
  return (
    <Wrapper>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header text={<div>Улики</div>} />
              <Evidence />
              <GhostName />
            </>
          }
        />
        <Route path="/:id" element={<GhostPage ghosts={ghosts} />} />
      </Routes>
    </Wrapper>
  );
};
export default App;

// function Ghost(){
//   state.ghosts.map(el=>el.ul1||el.ul2||el.ul3!==action.payload?{...el,el.visible:false}:{el})
// }
