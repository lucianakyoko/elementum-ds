import Button from "@/components/Button/Button";
import Pill from "@/components/Pill/Pill";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button layout='iconic' text="Text button"/>
      <Pill text='100' variant='soft' color='tertiary'  corner='sharp' size='medium'/>
    </main>
  );
}
