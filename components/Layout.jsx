import Header from "./Header";
export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="px-6 py-3">{children}</div>
    </>
  );
}
