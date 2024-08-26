import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button layout='iconic' text="Text button"/>
      <Button layout='numeric' text="1"/>
    </main>
  );
}
