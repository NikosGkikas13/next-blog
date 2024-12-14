type Repo = {
  id: number;
  title: string;
  description: string;
  stargazers_count: number;
};
const ProjectsPage = async () => {
  const repos = await fetch("http://localhost:3001/repos");
  const reposJson: Repo[] = await repos.json();

  return (
    <ul>
      {reposJson.map((repo: Repo) => (
        <li key={repo.id} className="mb-4">
          <div>{repo.title}</div>
          <div>{repo.description}</div>
          <div>{repo.stargazers_count}</div>
        </li>
      ))}
    </ul>
  );
};

export default ProjectsPage;
