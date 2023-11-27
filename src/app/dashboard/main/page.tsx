import { SimpleWidget } from "@/components";

export const metadata = {
  title: "Admin dashboard",
  description: "Admin dashboard",
};

export default function MainPage() {
  return (
    <div className="text-black">
      <h1 className="mt-2 text-3xl">Dashboard</h1>
      <span className="text-xl">Information</span>

      <div className="flex flex-wrap p-2 items-center justify-center">
        <SimpleWidget />
      </div>
    </div>
  );
}
