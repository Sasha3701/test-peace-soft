import { Switch, Route } from "react-router-dom";
import { Gallery, Photo, AboutMe, Page404 } from "./pages";
import { PATHS } from "./const";

const App = () => {
  return (
    <Switch>
      <Route path={PATHS.GALLERY} exact component={Gallery} />
      <Route path={PATHS.ABOUT_ME} exact component={AboutMe} />
      <Route path={PATHS.PHOTO} exact component={Photo} />
      <Route path="*" component={Page404} />
    </Switch>
  );
};

export default App;
