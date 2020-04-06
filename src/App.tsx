import React from 'react'
import { useCurrentRoute, useViewElement, Link } from 'react-navi'
import { animated, useTransition } from 'react-spring'
import { Header } from './components/styled-components/Header';

const App: React.FC = () => {
  const currentRoute = useCurrentRoute();
  const viewElement = useViewElement();
  const transitions = useTransition(viewElement, currentRoute.url.href, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });

  return <>
    <Header><Link href={`/`}>TRIVIABOX.</Link></Header>
    {transitions.map(({ item, props: style, key }) =>
      <animated.div key={key} style={{
        ...style,
        position: 'absolute',
        width: '100%'
      }}
      >{item}
      </animated.div>
    )}
  </>
}

export default App;