import { useLocation } from "react-router-dom";

function WorksPage(props) {
  const location = useLocation();

  console.log(location.state.index);
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <h2>Works 페이지입니다.</h2>
      {location.state.index}
    </div>
  );
}

export default WorksPage;
