function MobileLayout({ children }) {
  return (
    <div className="app-container">
      <div className="mobile-frame">
        {children}
      </div>
    </div>
  );
}

export default MobileLayout;