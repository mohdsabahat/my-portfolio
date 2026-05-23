"use client";

// import { useState, useEffect } from "react";

function getGreeting(): string {
  const hour = new Date().getHours();
  console.log("get greetig")
  if (hour >= 5 && hour < 12) return "Good morning";
  if (hour >= 12 && hour < 17) return "Good afternoon";
  if (hour >= 17 && hour < 21) return "Good evening";
  return "Still awake?";
}

export function TimeGreeting() {
  // const [greeting, setGreeting] = useState("");
  // const [mounted, setMounted] = useState(false);

  // useEffect(() => {
  //   console.log("Insode use effect")
  //   setMounted(true);
  //   setGreeting(getGreeting());
  // }, []);
  console.log("mount check")
  // if (!mounted) return <span className="text-sm tracking-wide">&nbsp;</span>;
  console.log("mounted")
  return (
    // <span className="text-sm text-ink-muted tracking-wide">{greeting}</span>
    // <span style={{"color": "red"}} >{greeting}</span>
    <span style={{"color": "red"}} >{getGreeting()}</span>
  );
}
