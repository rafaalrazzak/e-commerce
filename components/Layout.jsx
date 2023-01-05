import Header from "./Header";
export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <div className="px-4">{children}</div>
    </div>
  );
}
