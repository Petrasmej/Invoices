export const Sidebar = ({ children, title }) => {
  return (
    <aside className="sidebar">
      <h2>{title}</h2>
      {children}
    </aside>
  );
};
