import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import API from "../services/api";

function Submissions() {

  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {

    try {

      const res =
        await API.get("/submissions");

      setSubmissions(res.data);

    } catch (err) {

      console.log(err);

      alert("Failed To Fetch Submissions");

    }

  };

  return (
    <>
      <Navbar />

      <div className="container">

        <h1>
          Submission History
        </h1>

        <table>

          <thead>

            <tr>

              <th>ID</th>
              <th>Problem</th>
              <th>Language</th>
              <th>Verdict</th>

            </tr>

          </thead>

          <tbody>

            {submissions.map((s) => (

              <tr key={s.id}>

                <td>{s.id}</td>

                <td>{s.problem_id}</td>

                <td>{s.language}</td>

                <td>{s.verdict}</td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>
    </>
  );
}

export default Submissions;