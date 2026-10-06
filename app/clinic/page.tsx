import { redirect } from "next/navigation";

const CLINIC_DEMO_TARGET =
  process.env.NEXT_PUBLIC_CLINIC_DEMO_URL ??
  "https://arashwebstudio-clinic.vercel.app";

export default function ClinicDemoRedirectPage() {
  redirect(CLINIC_DEMO_TARGET);
}
