"use client";

import useAuth from "../shared/hooks/useAuth";

export default function Home() {
  const { user } = useAuth();
  return <div>{(user as any)?.name || ""}</div>;
}
