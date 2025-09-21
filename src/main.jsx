import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/Home.jsx'
import Blogs from './pages/Blogs.jsx'
import AddBlog from './pages/AddNew.jsx'
import About from './pages/About.jsx'
import UpdateUsers from './pages/UpdateUsers.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<App />}>
            <Route index element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/add-blog" element={<AddBlog />} />
            <Route path="/about" element={<About />} />
            <Route path='/blogs/:id' element={<UpdateUsers />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
