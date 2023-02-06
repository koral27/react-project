import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";
import "./styles/index.scss"

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <button onClick={toggleTheme}>TOGGLE THEME</button>
      <AppRouter />
    </div>
  )
}

export default App;