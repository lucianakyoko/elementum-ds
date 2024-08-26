import Button from "@/components/Button/Button";
import IconBox from "@/components/IconBox/IconBox";
import Pill from "@/components/Pill/Pill";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button layout='iconic' text="Text button"/>
      <Pill text='100' variant='soft' color='tertiary'  corner='sharp' size='medium'/>
      <IconBox iconName='thumbs-up' colorType="positive" corner="smooth" variant="filled" size="small"/>
      <IconBox iconName='thumbs-up' colorType="positive" corner="smooth" variant="soft" size="medium"/>
      <IconBox iconName='thumbs-up' colorType="positive" corner="smooth" variant="boldStroke" size="small"/>
      <IconBox iconName='thumbs-up' colorType="positive" corner="smooth" variant="strokeSoft" size="large"/>
      <IconBox iconName='thumbs-up' colorType="positive" corner="smooth" variant="stroked" size="large"/>
    </main>
  );
}
