export const metadata = {
  title: "Home",
};
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
export default async function Home() {
  await delay(4000);
  return (
    <div className="flex h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black"></div>
  );
}
