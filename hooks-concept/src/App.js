import React,{useReducer} from 'react';
import './App.css';
import ClassCounter from './Component/ClassCounter';
import ClassCounterOne from './Component/ClassCounterOne';
import ClassMouse from './Component/ClassMouse';
import ComponentC from './Component/ComponentC';
import DataFetching from './Component/DataFetching';
import HookCounter from './Component/HookCounter';
import HookCounterTwo from './Component/HookCounterTwo';
import HookMouse from './Component/HookMouse';
import HooksuseStateObj from './Component/HooksuseStateObj';
import HookuseEffectOne from './Component/HookuseEffectOne';
import HookuseStateArray from './Component/HookuseStateArray';
import IntervalClassCounter from './Component/IntervalClassCounter';
import IntervalHookCounter from './Component/IntervalHookCounter';
import MouseContainer from './Component/MouseContainer';
import ReducerCounterone from './Component/ReducerCounterone';
import ReducerCountertwo from './Component/ReducerCountertwo';
import ReducerCounterthree from './Component/ReducerCounterthree';
import ReducersComponentA from './Component/ReducersComponentA';
import ReducersComponentB from './Component/ReducersComponentB';
import ReducersComponentC from './Component/ReducersComponentC';
import DataFetchingOne from './Component/DataFetchingOne';
import DataFetchingTwo from './Component/DataFetchingTwo';
import ParentComponent from './Component/ParentComponent';
import UsememoCounter from './Component/UsememoCounter';
import UseRefone from './Component/UseRefone';
import ClassTimer from './Component/ClassTimer';
import UseRefHookTimer from './Component/UseRefHookTimer';
import UseMemoTwo from './Component/UseMemoTwo';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

export const CountContext = React.createContext()

const initialState = 0
const reducer = (state,action) =>{

    switch(action){
        case 'increment' :
            return state + 1;

        case 'decrement' :
            return state - 1;
            
        case 'reset' :
            return initialState
            
        default :
            return state
    }
}

function App() {
    const [count,dispatch] = useReducer(reducer,initialState)
    
    return (
    //   <CountContext.Provider value={{countState:count, countDispatch:dispatch}}>
      <div className="App">

      {/* Count - {count} */}
      {/* <ReducersComponentA/> */}
      {/* <ReducersComponentB/> */}
      {/* <ReducersComponentC/> */}
      

      {/* <DataFetchingOne/> */}
      {/* <DataFetchingTwo/> */}

      <ParentComponent/>    
      {/* <UsememoCounter/> */}
      {/* <UseMemoTwo/> */}
      {/* <UseRefone/> */}

      {/* <ClassTimer/> */}
      {/* <UseRefHookTimer/> */}

      {/* <ClassCounter/> */}
      {/* <HookCounter/> */}
      {/* <HookCounterTwo/> */}
      {/* <HooksuseStateObj/> */}
      {/* <HookuseStateArray/> */}
      {/* <ClassCounterOne/> */}
      {/* <HookuseEffectOne/> */}
      {/* <ClassMouse/> */}
      {/* <HookMouse/> */}
      {/* <MouseContainer/> */}
      {/* <IntervalClassCounter/> */}
      {/* <IntervalHookCounter/> */}
      {/* <DataFetching/> */}

      {/* User Context Example useContext */}
      {/* <UserContext.Provider value={'Satish'}>
         <ChannelContext.Provider value={'Patil'}>
           <ComponentC/>
         </ChannelContext.Provider>
      </UserContext.Provider> */}

      {/* <ReducerCounterone/> */}
      {/* <ReducerCountertwo/> */}
      {/* <ReducerCounterthree/> */}

      {/* <ReducersComponentA/> */}

      
      </div>
    //   </CountContext.Provider>
  );
}

export default App;
