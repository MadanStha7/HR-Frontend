import Sidebar from "../components/Sidebar";
import HomePageHeader from "../components/HomePageHeader";
import HomePageTable from "../components/HomePageTable";

const HomePage = () => {
  return (
    <>
      <div className="page-wrapper">
        <Sidebar />
        <header className="top-header">
          <HomePageHeader />
        </header>
        <div className="page-content-wrapper">
          <HomePageTable />
        </div>
      </div>
    </>
  );
};

export default HomePage;
