import Link from "next/link";
export default function Home() {
  return (
    <div>
      Click{" "}
      <Link href="documents/123" className="text-blue-600 underline">
        here
      </Link>{" "}
      to go to documents page.
    </div>
  );
}
