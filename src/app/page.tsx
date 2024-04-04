"use client"
import { useRouter } from "next/navigation";
import { path } from "../../service/path";

export default function Home() {
  const router = useRouter();
<<<<<<< HEAD
=======
  const router = useRouter();
>>>>>>> b266f322f94a685aac0700ecab9238381842a119


  router.push(path.login)
  return
}
