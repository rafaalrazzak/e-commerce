import Header from "./Header";
export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="px-6">{children}</div>
    </>
  );
}
