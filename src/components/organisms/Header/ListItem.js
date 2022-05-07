import Link from 'next/link';

export default function ListItem(props) {
  const { href, title } = props;

  return (
    <li>
      <Link href={href} passHref>
        <a className="px-9 text-gray-800">{title}</a>
      </Link>
    </li>
  );
}
