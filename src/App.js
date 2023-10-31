import HomePages from "./HomePages";
import Navbar from "./components/Navbar/Navbar";
import Users from "./pages/Users";
import Artist from "./pages/Artist"
import Album from "./pages/Album"
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import UsersRating from "./pages/UsersRating";
import AlbumRating from "./pages/AlbumRating";


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <HomePages />}>
            <Route path="user" element={<Users />} />
            <Route path="artist" element={<Artist />} />
            <Route path="album" element={<Album />} />
            <Route path="usersRating" element={<UsersRating/>} />
            <Route path="albumRating" element={<AlbumRating />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
