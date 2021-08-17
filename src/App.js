
import './App.css';
import PropsApp from './Props/PropsApp';
import StateDemo from './States and props/StateDemo';
import StateApp from "./Sates/StateApp"
import UseStateApp from './UseState/UseStateApp';
import UseEffectApp from './UseEffect/UseEffectApp';
import EventHandlersApp from './EventHandler/EventHandlersApp';
import MapApp from './Map/MapApp';
import ExportsApp from './ExportVsDefaultExport/ExportsApp';
import Login from './LoginForm/Login';
import Register from './RegisterForm/Register';
import Fetch from './Fetch/Fetch';
import Axios from './Axios/Axios';
import ReactRouterApp from './React Router/ReactRouterApp';
import UseContextApp from './UseContext/UseContextApp';
import LifeCycleApp from './LifeCyCleMethods/LifeCycleApp';
import Bootstrap from './ReactBootstrap/Bootstrap';
import ClassApp from './ClassComponents/ClassApp';
import ContextApiApp from './ContextApi/ContextApiApp';
import PostHttp from './Axios/PostHttp';
import CondtionalApp from './ConditionalRendering/CondtionalApp';
import UseReducerApp from './UseReducer/UseReducerApp';
import UserefApp from './UseRef/UserefApp';
import {useSelector,useDispatch} from 'react-redux'
import {increment,decrement} from './Redux/actions'
import HocApp from './HOC/HocApp';
import ErrorApp from './ErrorBoundary/ErrorApp';
import CustomAPP from './CustomHooks/CustomAPP';
import JsxApp from './JSX/JsxApp';
function App() {
  const counter=useSelector(state=>state.counter);
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  const dispatch=useDispatch();
  return (
    <div className="App">
      {/* ---------------------------------------- */}
      <h1>counter {counter}</h1>
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>
      {isLoggedIn?<h1>Valueble information i shouldnot see</h1>:''}
      {/* ---------------------------------------- */}
      <JsxApp/>
      <StateDemo/>
      <PropsApp/>
      <StateApp/>
      <UseStateApp/>
      <UseEffectApp/>
      <EventHandlersApp/>
      <MapApp/>
      <ExportsApp/>
      <Login/>
      <Register/>
      <Fetch/>
      <Axios/>
      <PostHttp/>
      <ReactRouterApp/>
      <UseContextApp/>
      <LifeCycleApp/>
      <Bootstrap/>
      <ClassApp/>
      <ContextApiApp/>
      <CondtionalApp/>
      <UseReducerApp/>
      <UserefApp/>
      <HocApp/>
      <ErrorApp/>
      <CustomAPP/>
    </div>
  );
}
export default App;
