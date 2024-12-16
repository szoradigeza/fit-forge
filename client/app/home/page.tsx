"use client";

import useAuth from "../shared/hooks/useAuth";

export default function Home() {
  const { user, login } = useAuth();

  if (!user) {
    // TODO redirect to login
  }
  return <div>{(user as any)?.name || ""}</div>;
}
