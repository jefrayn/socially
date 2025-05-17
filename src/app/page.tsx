//import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

import dynamic from "next/dynamic";

const ModeToggle = dynamic(() => import("@/components/ModeToggle"), { ssr: false });


export default function Home() {
  return (
   <div className="m-4">
      <SignedOut>
              <SignInButton mode ="modal">               
                <Button>Sign in</Button> 
              </SignInButton>   
                             
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
            <ModeToggle />
            <Button variant={"secondary"}>Click me</Button> 
   </div>
  );
}
