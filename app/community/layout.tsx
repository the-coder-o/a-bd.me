import User from "@/app/community/components/User";
import Form from "@/app/community/components/Form";
import Topics from "@/app/community/components/Topics";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex flex-col gap-16 p-10 md:gap-24">
      <div
        className={
          "absolute bottom-0 left-0 right-0 top-0 z-[999999] rounded-3xl bg-black/10 backdrop-blur-md"
        }
      >
        <div
          className={
            "absolute bottom-0 left-0 right-0 top-0 flex flex-col items-center justify-center gap-3 p-3"
          }
        >
          <p className={"text-3xl font-bold"}>Coming Soon!</p>
          <p className={"text-center"}>
            Thank you for your interest in our new feature! We&apos;re excited
            to announce that something amazing is on its way. Our team has been
            hard at work crafting a new page that will bring you a wealth of
            information, resources, and tools designed to enhance your
            experience.
          </p>
        </div>
      </div>
      <div
        className="flex animate-in items-center justify-between gap-8"
        style={{ "--index": 1 } as React.CSSProperties}
      >
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Community</h1>
          <p className="text-secondary">
            Let&apos;s talk about it!
            <span className="font-semibold"> (beta)</span>
          </p>
        </div>
        <User />
      </div>
      <div
        className="flex animate-in flex-col gap-8"
        style={{ "--index": 2 } as React.CSSProperties}
      >
        <Topics />
        <Form />
        {children}
      </div>
    </div>
  );
}
