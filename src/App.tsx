import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/theme-provider';
import { SidebarProvider } from './components/ui/sidebar';
import AppSidebar from './components/layout/app-sidebar';
import HomePage from './pages/home';
import Challenges from './pages/challenges';
import Posts from './pages/posts';
import Notifications from './pages/notifications';
import MessageChannels from './pages/message-channels';
import Header from './components/layout/header';
import MyProfile from './pages/profile/my-profile';
import EditProfile from './pages/profile/edit-profile';
import Settings from './pages/settings';
import Signin from './pages/sign-in';
import SignUp from './pages/sign-up';
import FindPassword from './pages/find-password';
import FindEmail from './pages/account/find-email';
import ChangePassword from './pages/account/change-password';

const userName = '김홍삼';

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <SidebarProvider>
          <AppSidebar />
          <div className="flex-1 max-h-screen overflow-y-auto">
            <Header userName={userName} />
            <main className="p-8">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/challenges" element={<Challenges />} />
                <Route path="/posts" element={<Posts />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/message-channels" element={<MessageChannels />} />
                <Route path="/my-profile" element={<MyProfile />} />
                <Route path="/edit-profile" element={<EditProfile />} />
                <Route path="/sign-in" element={<Signin />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/find-password" element={<FindPassword />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="account">
                  <Route path="find-email" element={<FindEmail />} />
                  <Route path="reset-password" element={<ChangePassword />} />
                </Route>
              </Routes>
            </main>
          </div>
        </SidebarProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}
