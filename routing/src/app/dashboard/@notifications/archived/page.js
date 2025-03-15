import { Card } from "@/components/card";
import Link from "next/link";


export default function ArchivedNotifications() {
  return (
    <>
      <Card>ArchivedNotifications</Card>
      <div>
          <Link href='/dashboard'>Default</Link>
      </div>
    </>
  );
}
