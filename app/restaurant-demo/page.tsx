import { redirect } from "next/navigation";

const RESTAURANT_DEMO_TARGET =
  process.env.NEXT_PUBLIC_RESTAURANT_DEMO_URL ??
  "https://arashwebstudio-restaurant.vercel.app";

export default function RestaurantDemoRedirectPage() {
  redirect(RESTAURANT_DEMO_TARGET);
}
