import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <Button>Click me</Button>
      <h1>Kirti's Portfolio</h1>
      <p>I am a software engineer</p>
    </div>
  );
}
