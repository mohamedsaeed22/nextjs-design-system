import Button from "./components/ui/Button";

export default function Home() {
  return (
    <>
    <div className="border border-red-500 p-4 w-full flex items-center  gap-4">
      <Button size={"xs"}>Primary btn</Button>
      <Button variant={"outline"} size={"sm"}>
        Outline btn
      </Button>
      <Button variant={"destructive"} size={"xs"}>
        Destructive btn
      </Button>
      <Button size={"lg"}>Ghost btn</Button>
      <Button>Link btn</Button>
      <Button>Secondary btn</Button>
    </div>
    <Button fullWidth>full width</Button>
    </>
  );
}
