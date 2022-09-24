import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProjectPage from "./pages/ProjectPage";
import SkillPage from './pages/SkillPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="projects" element={<ProjectPage />} />
        <Route path="skills" element={<SkillPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
