import Link from 'next/link';

const view = () => {
  return (
    <nav className="navbar navbar--vertical">
      <Link href="/">
        <a>
          <i className="fas fa-home"></i>
        </a>
      </Link>
    </nav>
  );
};

export default view;
