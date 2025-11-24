import { useEffect, useState } from "react";

const Lectures = () => {
  const [lectures, setLectures] = useState([]);

  useEffect(() => {
    fetch(import.meta.env.VITE_S3_LIST_URL)   // <-- S3 INDEX.json file
      .then((res) => res.json())
      .then((data) => setLectures(data.files))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="fw-bold mb-4">Lectures</h2>

      {lectures.length === 0 && <p className="text-muted">Loading lectures...</p>}

      {lectures.map((lecture) => (
        <div key={lecture.name} className="mb-3 p-3 border rounded">
          <h5 className="fw-semibold mb-2">{lecture.name}</h5>
          <audio controls src={lecture.url} className="w-100" />
        </div>
      ))}
    </div>
  );
};

export default Lectures;
