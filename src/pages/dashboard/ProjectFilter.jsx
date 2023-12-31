const filterList = [
  "all",
  "mine",
  "development",
  "design",
  "marketing",
  "sales",
];

function ProjectFilter({ currentFilter, changeFilter }) {
  const handleClick = (newFilter) => {
    changeFilter(newFilter);
  };

  return (
    <div className="project-filter">
      <nav>
        <p>Filter by:</p>
        {filterList.map((f) => {
          return (
            <button
              className={currentFilter === f ? "active" : ""}
              onClick={() => handleClick(f)}
              key={f}
            >
              {f}
            </button>
          );
        })}
      </nav>
    </div>
  );
}
export default ProjectFilter;
