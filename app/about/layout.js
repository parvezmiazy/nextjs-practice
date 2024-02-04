import Link from "next/link";
export default function AboutLayout({ children }) {
  return (
    <div>
      <nav>
        <ul className="flex gap-4">
          <li>
            <Link href="/about/mission">Mission</Link>
          </li>
          <li>
            <Link href="/about/vision">Vision</Link>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
}
