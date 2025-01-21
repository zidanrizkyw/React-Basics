import Welcome from "./assets/components/Welcome"
import Header from "./assets/components/Header"
import ProfileCard from "./assets/components/ProfileCard"

type Teacher = {
  name: string;
  job: string;
  year: number;
  id: number;
}

const teachers: Teacher[] = [
  {
    job: "Dosen",
    name: "Dhika",
    year: 1995,
    id: 1,
  },
  {
    job: "Creator",
    name: "Dhika",
    year: 2000,
    id: 2,
  },
  {
    job: "Tech Lead",
    name: "PZN",
    year: 1996,
    id: 3,
  },
  {
    job: "Pengangguran",
    name: "Ega",
    year: 2000,
    id: 4,
  },
]

function App() {
  return (
    <div>
      <Header />
      <Welcome />
      <div style={{ gap: "10px", display: "flex", flexDirection: "row" }}>
        {
          teachers.map((teacher) => {
            return <ProfileCard
              name={teacher.name}
              year={teacher.year}
              job={teacher.job}
              key={teacher.id}
            />
          })
        }
      </div>

    </div>

  )
}

export default App
