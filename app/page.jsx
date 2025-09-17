import LikeButton from './like-button';

function Header({ title }) {
  function createTitle(title) {
    return title ? title : 'Default Title'
  }

  return <h1>{`Cool ${createTitle(title)}`}</h1>;
}

export default function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

  return (
    <div>
      <Header title="Develop. Preview. Ship." />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <LikeButton />
    </div>
  );
}
