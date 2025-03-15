import { Card } from "@/components/card";
import Link from "next/link";


export default function Notifications() {
  return (
    <>
      <Card>Notifications</Card>
      <div>
          <Link href='/dashboard/archived'>Archived</Link>
      </div>
    </>
  );
}
