// import Challenge from './components/Challenge'
// import ContextTheme from './components/ContextTheme'
// import Events from './components/Events'
// import Fetch from './components/Fetch'
// import FetchAxios from './components/FetchAxios'
// import FetchReactQuery from './components/FetchReactQuery'
// import Props from './components/Props'
// import Reducer from './components/Reducer'
// import Return from './components/Return'
// import State from './components/State'
// import Types from './componentsTwo/Types'

import Theme from './componentsTwo/ContextReducer/Theme'
import Event from './componentsTwo/Events/Event'
import Generics from './componentsTwo/Generics'
import Children from './componentsTwo/ParentChild/Children'
import Parent from './componentsTwo/ParentChild/Parent'
import PostCards from './componentsTwo/PostCards'
import State from './componentsTwo/State'
import UseRef from './componentsTwo/UseRef'


function App() {
  return (
    <>
      <main>
        {/* <Return name='Benson' id={123} />
        <Return name='Benson' id={123} >
          <h2>New Return</h2>
        </Return> */}
        {/* <State /> */}
        {/* <Events /> */}
        {/* <Challenge
          type='basic'
          name='Olukayode'
        />

        <Challenge
          type='advanced'
          name='Oluwaseun'
          email='oluwaseun@gmail.com'
        /> */}

        {/* <ContextTheme /> */}
        {/* <Reducer /> */}
        {/* <Fetch />
        <FetchAxios />
        <FetchReactQuery />
        <Props
          style={{
            backgroundColor: 'red',
            fontSize: 22,
            color: 'blue',
          }}
        /> */}
        {/* <Types /> */}
        {/* <PostCards id={32} title='Post Typescript' body='Learn Typescript' /> */}
        <Parent>
          <Children />
        </Parent>
        <Event />
        <State />
        <Theme />
        <UseRef />
        <Generics id={20} name='Olukayode' user={[{
          id: 22,
          desc: 'Typescript generics'
        }]} />
      </main>
    </>
  )
}

export default App
