const { useEffect } = require("react");

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - News Today`;
  }, [title]);
};

export default useTitle;
