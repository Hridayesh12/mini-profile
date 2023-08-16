import '../styles/globals.css'
import { useState, useEffect } from "react";
import SideNavBar from '../components/Navbars/SideNav';
import Nav from '../components/Navbars/Nav';
import { useRouter } from "next/router";
import SideMobile from '../components/Navbars/SideMobile';
import AuthProvider from '../contexts/AuthContext';
function MyApp({ Component, pageProps }) {
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    setShowModal(true);
  }, []);
  const router = useRouter();
  const { pathname } = router;
  const isDashboard = pathname.startsWith("/dashboard");

  return (
    <AuthProvider>
      <div className="w-screen bg-slate-100">
        {
          isDashboard ? (
            <div className="w-screen bg-slate-100">
              <Nav />
              <div className="flex flex-col sm:flex-row w-screen min-h-screen h-fit overflow-hidden">
                <SideMobile />
                <SideNavBar />
                <div className="w-full ">
                  <Component {...pageProps} />
                </div>
              </div>
            </div>
          ) : (
            <Component {...pageProps} />
          )
        }
      </div>
    </AuthProvider>
  );
}
export default MyApp