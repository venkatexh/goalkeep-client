import "../sass/tabsNav.scss";

const TabsNav = (props) => {
  const { selectedTab } = props;
  return (
    <div className={"tabs-nav"}>
      <button
        className={`tab-selector ${selectedTab === 0 ? "tab-selected" : ""}`}
        onClick={() => props.setTab(0)}
      >
        All Goals
      </button>
      <button
        className={`tab-selector ${selectedTab === 1 ? "tab-selected" : ""}`}
        onClick={() => props.setTab(1)}
      >
        Bookmarked
      </button>
      <button
        className={`tab-selector ${selectedTab === 2 ? "tab-selected" : ""}`}
        onClick={() => props.setTab(2)}
      >
        Trash
      </button>
    </div>
  );
};

export default TabsNav;
