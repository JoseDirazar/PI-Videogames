import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const RefreshRedirect = () => {
  const navigate = useNavigate();
  const location = useLocation();

    useEffect(() => {
    const lastPath = sessionStorage.getItem('lastPath');
    if (lastPath) {
      sessionStorage.removeItem('lastPath');
      if (lastPath !== location.pathname) {
        navigate(lastPath);
      }
    }
  }, []);

  // Efecto para escribir el sessionStorage mientras el usuario cambia de ruta
  useEffect(() => {
    sessionStorage.setItem('lastPath', location.pathname);
  }, [location.pathname]);


  return null;
};

export default RefreshRedirect;