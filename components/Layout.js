import Link from 'next/link';

export default function Layout({ children }) {
  const date = new Date();
  return (
    <div className="layout">
      <header>
        <Link href="/">
          <a>
            <h1>
              <span>My</span>
              <span>Recipe</span>
            </h1>
            <h2>Spread The Joy</h2>
          </a>
        </Link>
      </header>

      <div className="page-content">{children}</div>

      <footer>
        <p>&copy; {date.getFullYear()} MyRecipe :)</p>
      </footer>
    </div>
  );
}
