import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import './App.css';
import LoginComponent from "./components/LoginComponent";
import NotFoundPage from './pages/404';
import AdminsPage from "./pages/Admins";
import BooksPage from './pages/Books';
import MainPage from './pages/Home';
import UsersPage from './pages/Users';
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UserPostForm from "./form/UserPostForm";
import BookPostForm from "./form/BookPostForm";

function App() {
  return (

    <Router>
      <div className="App">
        <br></br>
        <br></br>
        <h1 className="text-center">Library Management Application</h1>
        <br></br>
        <br></br>
        <hr></hr>

        {/* <AdminListComponent /> */}
      </div>
      <Switch>
      <Route  path="/" exact component={LoginComponent} />
      <Route  path="/login" exact component={LoginComponent} />

        <AuthenticatedRoute exact path="/api" component={MainPage} />
        <AuthenticatedRoute  path="/api/users" exact component={UsersPage} />
        <AuthenticatedRoute  path="/api/books" exact component={BooksPage} />
        <AuthenticatedRoute  path="/api/admins" exact component={AdminsPage} />
        <AuthenticatedRoute  path="/api/command/user" exact component={UserPostForm} />
        <AuthenticatedRoute  path="/api/command/book" exact component={BookPostForm} />


        <Route exact component={NotFoundPage} />
        <Redirect to="404" />
      </Switch>
    </Router>
  );
}

export default App;
