import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center">
      <main className="flex flex-col items-center gap-8 p-8 text-center">
        <Image
          src="/logo.png"
          alt="AFC Spittal Logo"
          width={200}
          height={200}
          priority
        />
        <h1 className="text-4xl font-bold text-primary">AFC Spittal</h1>
        <p className="text-xl text-foreground-muted">
          Amateurfunkclub Spittal an der Drau
        </p>
        <p className="text-sm text-foreground-muted">ADL 864</p>
      </main>
    </div>
  );
}
