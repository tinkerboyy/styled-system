import React from 'react';
import './App.css';

/** @jsx jsx */
import { jsx } from '@emotion/core'
import styled from '@emotion/styled';
import { color, ColorProps, space, SpaceProps } from "styled-system";

type SomeProps = ColorProps & SpaceProps


function App() {
  return (
    <div className="App">
      <ArticleText />
      <H1 mb={4} pl={0} bg="red">heading</H1>
    </div>
  );
}

const P = (props: any) => (
  <p {...props}>
{props.children}
  </p>
);

const ArticleText = () => (
  <P css={{
    color: 'green',
    fontSize: 20
  }}>
    Text
  </P>
);

const H1 = styled<'h1', SomeProps>('h1')(space, color)




export default App;
