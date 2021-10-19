import { Button } from "@mui/material";
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import './App.css';
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import BookComponentTest from "./components/BookComponentTest";
import LoginComponent from "./components/LoginComponent";
import UserComponentTest from "./components/UserComponentTest";
import BookEditForm from "./form/BookEditForm";
import BookPostForm from "./form/BookPostForm";
import ComingSoon from "./form/ComingSoon";
import UserEditForm from "./form/UserEditForm";
import UserPostForm from "./form/UserPostForm";
import NotFoundPage from './pages/404';
import AdminsPage from "./pages/Admins";
import MainPage from './pages/Home';


function HomeIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

function App() {
  return (

    <Router>
      <div className="App-header">
        <br></br>
        <h1 className="text-center">Libro Library Management</h1>
        <div className="AddButton">
          <Button href="/api">
            <HomeIcon color="disabled" sx={{ fontSize: 40 }} />
          </Button>
        </div>
        <hr></hr>

      </div>
      <Switch>
        <Route path="/" exact component={LoginComponent} />
        <Route path="/login" exact component={LoginComponent} />

        <AuthenticatedRoute exact path="/api" component={MainPage} />
        <AuthenticatedRoute path="/api/users" exact component={UserComponentTest} />
        <AuthenticatedRoute path="/api/books" exact component={BookComponentTest} />
        <AuthenticatedRoute path="/api/admins" exact component={AdminsPage} />
        <AuthenticatedRoute path="/api/command/user" exact component={UserPostForm} />
        <AuthenticatedRoute path="/api/command/book" exact component={BookPostForm} />
        <AuthenticatedRoute path="/api/users/find/:id" exact component={UserEditForm} />
        <AuthenticatedRoute path="/api/books/find/:id" exact component={BookEditForm} />
        <AuthenticatedRoute path="/api/comingsoon" exact component={ComingSoon} />



        <Route exact component={NotFoundPage} />
        <Redirect to="404" />
      </Switch>
      <footer className='text-center'>
        © 2021 Assessment, Nidhin Alungal.  All rights reserved
      </footer>
    </Router>
  );
}

export default App;
