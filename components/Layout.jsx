import Header from "./Header";
import SearchModal from "./search/SearchModal";
export default function Layout({ children }) {

  return (
    <div >
      <Header />
      <SearchModal />
      <div className="px-4">
        {children}
      </div>
    </div>
  );
}
