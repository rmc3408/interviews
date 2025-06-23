import type { ReactNode } from 'react';
import Header from '../../components/headers';
import Menubar from '../../components/menubar';


const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="dashboard-screen">
      <Header />
      <div className="flex flex-row w-full bg-[#161618]">
        <Menubar />
        <main className="px-8 w-full flex flex-col content-around">{children}</main>
      </div>
    </div>
  )
};

export default DashboardLayout;
