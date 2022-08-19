import { ChangeEvent, useEffect, useState } from 'react';
import { Homes } from './component/Homes/Homes';
import { Header } from './component/Header/Header';
import { Main } from './component/Main/main';
import { ThemeProvider } from 'styled-components';
import Api from './component/Api/Api';
import './scss/index.scss';
import { useSelector } from 'react-redux';
import { ContextProvider } from '../src/context/ContextProvider';


export function App() {

  const [data, setData] = useState([]);
  const [value, setValue] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    Api.fetchData(`https://fe-student-api.herokuapp.com/api/hotels/${value}`, setData, setSearch);
  }, []);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
    console.log("re-render");
  };

  //const theme = useSelector(themeSelector);
 // const isDark = theme === ThemaEnum.DARK ? darkTheme : lightTheme;

  return (
    <ContextProvider>
      <ThemeProvider theme={isDark} >
        <Header value={value} onChange={handleChange}/>
        <Main data={data}/>
        <Homes/>
      </ThemeProvider>
    </ContextProvider>
  );
}